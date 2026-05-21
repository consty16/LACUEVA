module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).end();

  const record = req.body?.record;
  const old_record = req.body?.old_record;

  if (!record) return res.status(400).json({ error: 'Sin payload' });

  if (record.estado?.toLowerCase() !== 'pagado' || old_record?.estado?.toLowerCase() === 'pagado') {
    return res.status(200).json({ msg: 'Ignorado' });
  }

  const supabaseUrl = process.env.SUPA_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

  const userRes = await fetch(
    `${supabaseUrl}/rest/v1/users?id=eq.${record.user_id}&select=email,nombre`,
    {
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`
      }
    }
  );

  const users = await userRes.json();
  const email = users?.[0]?.email;
  const nombre = users?.[0]?.nombre;

  if (!email) return res.status(404).json({ error: 'Usuario no encontrado' });

  const baseUrl = `https://${req.headers.host}`;

  const response = await fetch(`${baseUrl}/api/send-email`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      to: email,
      subject: '✅ Pago recibido - LA CUEVA',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f9f9;">
          <h2 style="color: #222;">¡Hemos recibido tu pago!</h2>
          <p style="font-size: 16px; color: #444;">Hola <strong>${nombre}</strong>,</p>
          <p style="font-size: 16px; color: #444;">
            En <strong>48hs</strong> recibirás un mail con tu número de tracking.
          </p>
          <p style="font-size: 16px; color: #444;">
            Ante cualquier duda comunicate al 
            <a href="https://wa.me/543815341233" style="color: #25D366; font-weight: bold;">
              +54 381 534-1233
            </a>
          </p>
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #ddd;">
          <p style="font-size: 12px; color: #999;">LA CUEVA</p>
        </div>
      `
    })
  });

  const result = await response.json();
  return res.status(200).json(result);
};
