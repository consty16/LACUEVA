// api/create-preference.js
// Variables de entorno requeridas en Vercel + AI Studio Secrets:
//   MP_ACCESS_TOKEN  → tu access token de Mercado Pago
//   SITE_URL         → https://tu-dominio.vercel.app

// Cargar .env en desarrollo local
try {
  require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });
} catch(e) { /* dotenv no disponible en producción — OK */ }

const https = require('https');

module.exports = async (req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN;
  const SITE_URL     = process.env.SITE_URL || 'https://lacueva-piedraspreciosas.vercel.app';

  if (!ACCESS_TOKEN) {
    return res.status(500).json({ error: 'MP_ACCESS_TOKEN no configurado' });
  }

  try {
    const { items } = req.body;

    if (!items || !items.length) {
      return res.status(400).json({ error: 'El carrito está vacío' });
    }

    // Calcular el total real sumando todos los productos del carrito (forzando número)
    const totalAmount = items.reduce((sum, item) => {
      const p = Number(item.price) || 0;
      return sum + p;
    }, 0);
    const itemCount   = items.length;

    // LOG DE DIAGNÓSTICO — verificar qué llega al servidor
    console.log(`[MP] Items recibidos: ${itemCount}`);
    items.forEach((item, i) => console.log(`  [${i+1}] ${item.name} → $${item.price}`));
    console.log(`[MP] TOTAL A COBRAR: $${totalAmount}`);

    const title       = itemCount === 1
      ? (items[0].name || 'Piedra preciosa')
      : `LA CUEVA · ${itemCount} productos`;
    const description = itemCount === 1
      ? (items[0].desc || 'Piedra preciosa — La Cueva')
      : items.map(i => i.name).join(', ');

    const preference = {
      items: [{
        title,
        quantity:    1,
        unit_price:  totalAmount,
        currency_id: 'ARS',
        description
      }],
      statement_descriptor: 'LA CUEVA',
      external_reference: `LC-${Date.now()}`
    };

    // back_urls y auto_return solo funcionan con URLs públicas HTTPS (producción)
    // MP rechaza localhost con error 'auto_return invalid'
    const isLocal = SITE_URL.includes('localhost') || SITE_URL.includes('127.0.0.1');
    if (!isLocal) {
      preference.back_urls = {
        success: `${SITE_URL}/?pago=aprobado`,
        failure: `${SITE_URL}/?pago=error`,
        pending: `${SITE_URL}/?pago=pendiente`
      };
      preference.auto_return       = 'approved';
      preference.notification_url  = `${SITE_URL}/api/webhook`;
    }

    // Llamada a la API de MP
    const result = await mpRequest('/checkout/preferences', ACCESS_TOKEN, preference);

    console.log(`[MP] Preference creada → init_point: ${result.init_point}`);

    return res.status(200).json({
      init_point:    result.init_point,     // producción
      sandbox_point: result.sandbox_init_point // testing
    });

  } catch (err) {
    console.error('Error MP:', err);
    return res.status(500).json({ error: 'Error al crear preferencia de pago' });
  }
};

// Helper: llamada HTTPS a la API de MP sin SDK (sin npm install)
function mpRequest(path, token, body) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);
    const options = {
      hostname: 'api.mercadopago.com',
      path,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type':  'application/json',
        'Content-Length': Buffer.byteLength(data)
      }
    };

    const req = https.request(options, res => {
      let raw = '';
      res.on('data', chunk => raw += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(raw);
          if (res.statusCode >= 400) reject(json);
          else resolve(json);
        } catch(e) { reject(e); }
      });
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}
