// api/send-email.js
// Envía emails via Brevo (SendinBlue) — 300 emails/día gratis sin dominio propio
// Variable requerida en Vercel: BREVO_API_KEY

try {
  require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });
} catch(e) {}

const https = require('https');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  const { to, subject, html } = req.body || {};
  const BREVO_KEY = process.env.BREVO_API_KEY;

  if (!BREVO_KEY) {
    console.error('[MAIL] BREVO_API_KEY no configurado');
    return res.status(500).json({ error: 'BREVO_API_KEY no configurado' });
  }
  if (!to || !subject || !html) {
    return res.status(400).json({ error: 'Faltan parámetros: to, subject, html' });
  }

  try {
    const result = await sendMail(BREVO_KEY, {
      sender: { name: 'LA CUEVA', email: 'consty16@gmail.com' },
      to: Array.isArray(to) ? to.map(e => ({ email: e })) : [{ email: to }],
      subject,
      htmlContent: html
    });
    console.log('[MAIL] Enviado OK →', to, '| id:', result.messageId);
    return res.status(200).json({ ok: true, id: result.messageId });
  } catch (err) {
    console.error('[MAIL] Error Brevo:', err);
    return res.status(500).json({ error: 'Error al enviar email', detail: err });
  }
};

function sendMail(apiKey, payload) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(payload);
    const options = {
      hostname: 'api.brevo.com',
      path: '/v3/smtp/email',
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      }
    };
    const req = https.request(options, r => {
      let raw = '';
      r.on('data', chunk => raw += chunk);
      r.on('end', () => {
        try {
          const json = JSON.parse(raw);
          if (r.statusCode >= 400) reject(json);
          else resolve(json);
        } catch(e) { reject(e); }
      });
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}
