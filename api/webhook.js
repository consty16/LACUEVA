try {
  require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });
} catch(e) {}

const https = require('https');

const SUPA_URL = process.env.SUPA_URL || 'https://tgoarsmdmyfcsylyurpa.supabase.co';
const SUPA_KEY = process.env.SUPA_KEY;
const BREVO_KEY = process.env.BREVO_API_KEY;

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method === 'GET') return res.status(200).send('OK');
  if (req.method !== 'POST') return res.status(405).end();

  try {
    const { type, data } = req.body;
    console.log('[WEBHOOK] Tipo:', type, '| ID:', data?.id);

    if (type === 'payment' && data?.id) {
      const payment = await getPayment(data.id, process.env.MP_ACCESS_TOKEN);
      const { id, status, transaction_amount, external_reference, payer } = payment;

      console.log('[WEBHOOK] Pago:', { id, status, monto: transaction_amount, ref: external_reference, email: payer?.email });

      if (status === 'approved') {
        const payerEmail = payer?.email;

        // 1 — Actualizar órdenes pendientes del usuario en Supabase
        if (payerEmail && SUPA_KEY) {
          try {
            // Buscar usuario por email
            const userRes = await supaFetch(`/rest/v1/users?email=eq.${encodeURIComponent(payerEmail)}&limit=1`);
            const user = userRes?.[0];
            if (user?.id) {
              // Actualizar sus órdenes pendientes a "pagado"
              await supaFetch(
                `/rest/v1/orders?user_id=eq.${user.id}&estado=eq.pendiente`,
                'PATCH',
                { estado: 'pagado', mp_payment_id: String(id) }
              );
              console.log('[WEBHOOK] Órdenes actualizadas a "pagado" para user:', user.id);
            }
          } catch(e) {
            console.error('[WEBHOOK] Error actualizando Supabase:', e);
          }
        }

        // 2 — Enviar email de confirmación de compra
        if (payerEmail && BREVO_KEY) {
          try {
            await sendMail(BREVO_KEY, {
              sender: { name: 'LA CUEVA', email: 'consty16@gmail.com' },
              to: [{ email: payerEmail }],
              subject: '✦ ¡Compra confirmada! — LA CUEVA Piedras Preciosas',
              htmlContent: htmlCompraConfirmada(payerEmail, transaction_amount, external_reference)
            });
            console.log('[WEBHOOK] Email de confirmación enviado a:', payerEmail);
          } catch(e) {
            console.error('[WEBHOOK] Error enviando email:', e);
          }
        }
      }
    }

    return res.status(200).json({ received: true });

  } catch (err) {
    console.error('[WEBHOOK] Error:', err);
    return res.status(200).json({ received: true });
  }
};

/* ── Helpers Supabase ── */
function supaFetch(path, method = 'GET', body = null) {
  return new Promise((resolve, reject) => {
    const data = body ? JSON.stringify(body) : null;
    const options = {
      hostname: SUPA_URL.replace('https://', ''),
      path,
      method,
      headers: {
        'apikey': SUPA_KEY,
        'Authorization': `Bearer ${SUPA_KEY}`,
        'Content-Type': 'application/json',
        ...(method === 'PATCH' ? { 'Prefer': 'return=minimal' } : {})
      }
    };
    if (data) options.headers['Content-Length'] = Buffer.byteLength(data);

    const req = https.request(options, r => {
      let raw = '';
      r.on('data', chunk => raw += chunk);
      r.on('end', () => {
        try { resolve(raw ? JSON.parse(raw) : null); }
        catch(e) { resolve(null); }
      });
    });
    req.on('error', reject);
    if (data) req.write(data);
    req.end();
  });
}

/* ── Helper MP ── */
function getPayment(paymentId, token) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.mercadopago.com',
      path: `/v1/payments/${paymentId}`,
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` }
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

/* ── Helper Brevo ── */
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

/* ══ TEMPLATES DE EMAIL ══ */
function htmlCompraConfirmada(email, monto, referencia) {
  const fmt = n => '$' + Number(n).toLocaleString('es-AR');
  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#03030a;font-family:'Georgia',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#03030a;padding:40px 20px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#07070f;border:1px solid rgba(180,210,255,.15);border-radius:8px;overflow:hidden;">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#0c0c18,#07070f);padding:36px 40px;text-align:center;border-bottom:1px solid rgba(180,210,255,.1);">
            <p style="margin:0;font-size:11px;letter-spacing:.5em;color:rgba(180,210,255,.5);text-transform:uppercase;margin-bottom:10px;">Piedras Preciosas · Tucumán</p>
            <h1 style="margin:0;font-size:28px;letter-spacing:.3em;color:#e8f0ff;font-weight:400;">LA CUEVA</h1>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:40px;">
            <p style="font-size:11px;letter-spacing:.3em;color:rgba(180,210,255,.6);text-transform:uppercase;margin:0 0 16px;">Confirmación de compra</p>
            <h2 style="margin:0 0 24px;font-size:22px;color:#c8d6e8;letter-spacing:.05em;font-weight:400;">✦ ¡Tu pedido fue confirmado!</h2>
            <p style="margin:0 0 28px;font-size:14px;color:rgba(200,214,232,.7);line-height:1.8;letter-spacing:.03em;">
              Recibimos tu pago exitosamente. En breve procesaremos tu pedido y te enviaremos el número de tracking cuando sea despachado.
            </p>
            <!-- Detalle -->
            <table width="100%" style="border:1px solid rgba(180,210,255,.1);border-radius:4px;margin-bottom:28px;">
              <tr>
                <td style="padding:14px 18px;border-bottom:1px solid rgba(180,210,255,.07);">
                  <span style="font-size:11px;letter-spacing:.2em;color:rgba(180,210,255,.5);text-transform:uppercase;">Referencia</span>
                  <p style="margin:4px 0 0;font-size:13px;color:#c8d6e8;letter-spacing:.05em;">${referencia || '—'}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:14px 18px;">
                  <span style="font-size:11px;letter-spacing:.2em;color:rgba(180,210,255,.5);text-transform:uppercase;">Total abonado</span>
                  <p style="margin:4px 0 0;font-size:18px;color:#e8f0ff;letter-spacing:.05em;">${fmt(monto)}</p>
                </td>
              </tr>
            </table>
            <p style="margin:0;font-size:12px;color:rgba(180,210,255,.4);line-height:1.8;letter-spacing:.03em;">
              Si tenés alguna consulta, contactanos por WhatsApp al <strong style="color:rgba(180,210,255,.7);">+54 381 534-1233</strong>
            </p>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="padding:20px 40px;border-top:1px solid rgba(180,210,255,.08);text-align:center;">
            <p style="margin:0;font-size:10px;letter-spacing:.2em;color:rgba(180,210,255,.3);text-transform:uppercase;">LA CUEVA · Piedras Preciosas · Tucumán, Argentina</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
