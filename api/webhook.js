// api/webhook.js
// Recibe notificaciones de Mercado Pago
// En MP Developers → tu app → Notificaciones → URL:
//   https://tu-dominio.vercel.app/api/webhook

const https = require('https');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method === 'GET') {
    // MP hace un GET para verificar que el endpoint existe
    return res.status(200).send('OK');
  }

  if (req.method !== 'POST') return res.status(405).end();

  try {
    const { type, data } = req.body;
    console.log('[WEBHOOK] Tipo:', type, '| ID:', data?.id);

    if (type === 'payment' && data?.id) {
      const payment = await getPayment(data.id, process.env.MP_ACCESS_TOKEN);
      console.log('[WEBHOOK] Pago:', {
        id:         payment.id,
        status:     payment.status,         // approved / rejected / pending
        monto:      payment.transaction_amount,
        referencia: payment.external_reference,
        email:      payment.payer?.email
      });

      // Acá podés agregar lógica futura:
      // - Guardar en Supabase
      // - Enviar mail de confirmación al comprador
      // - Actualizar estado del pedido
    }

    return res.status(200).json({ received: true });

  } catch (err) {
    console.error('[WEBHOOK] Error:', err);
    // Siempre responder 200 a MP aunque haya error interno
    return res.status(200).json({ received: true });
  }
};

function getPayment(paymentId, token) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.mercadopago.com',
      path:     `/v1/payments/${paymentId}`,
      method:   'GET',
      headers:  { 'Authorization': `Bearer ${token}` }
    };

    const req = https.request(options, res => {
      let raw = '';
      res.on('data', chunk => raw += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(raw)); }
        catch(e) { reject(e); }
      });
    });

    req.on('error', reject);
    req.end();
  });
}
