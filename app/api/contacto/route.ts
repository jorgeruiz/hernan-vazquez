import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const RECIPIENTS = ['hvazquezg@gmail.com', 'almarne72@hotmail.com']

function createTransport() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? 'smtp.hostinger.com',
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: true, // SSL en puerto 465
    auth: {
      user: process.env.SMTP_USER, // ej: contacto@reumamonterrey.com
      pass: process.env.SMTP_PASS,
    },
  })
}

function buildHtml(nombre: string, correo: string, whatsapp: string, colonia: string) {
  const waLink = `https://wa.me/52${whatsapp.replace(/\D/g, '')}`
  return `<!DOCTYPE html>
<html lang="es">
<body style="margin:0;padding:20px;background:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:520px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">
    <div style="background:#0273B5;padding:24px 28px;">
      <p style="margin:0;color:rgba(255,255,255,0.7);font-size:12px;text-transform:uppercase;letter-spacing:.08em;">Nueva solicitud de cita</p>
      <h1 style="margin:6px 0 0;color:#ffffff;font-size:20px;font-weight:700;">Dr. Hernán Vázquez</h1>
      <p style="margin:2px 0 0;color:rgba(255,255,255,0.6);font-size:13px;">Reumatólogo — Monterrey</p>
    </div>
    <div style="padding:28px;">
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #f0f4f8;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:.06em;width:110px;">Nombre</td>
          <td style="padding:10px 0;border-bottom:1px solid #f0f4f8;color:#0F1923;font-weight:600;font-size:15px;">${nombre}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #f0f4f8;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:.06em;">Correo</td>
          <td style="padding:10px 0;border-bottom:1px solid #f0f4f8;color:#0F1923;font-size:14px;">${correo}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #f0f4f8;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:.06em;">WhatsApp</td>
          <td style="padding:10px 0;border-bottom:1px solid #f0f4f8;color:#0F1923;font-size:14px;">${whatsapp}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:.06em;">Colonia</td>
          <td style="padding:10px 0;color:#0F1923;font-size:14px;">${colonia}</td>
        </tr>
      </table>
      <a href="${waLink}"
         style="display:inline-flex;align-items:center;gap:8px;margin-top:24px;background:#25D366;
                color:#ffffff;padding:12px 22px;border-radius:10px;text-decoration:none;
                font-weight:600;font-size:14px;">
        Responder por WhatsApp
      </a>
    </div>
    <div style="background:#f8fafc;padding:14px 28px;text-align:center;border-top:1px solid #f0f4f8;">
      <p style="margin:0;color:#94a3b8;font-size:11px;">Enviado desde reumamonterrey.com</p>
    </div>
  </div>
</body>
</html>`
}

export async function POST(req: NextRequest) {
  try {
    const { nombre, correo, whatsapp, colonia } = await req.json()

    if (!nombre || !correo || !whatsapp || !colonia) {
      return NextResponse.json({ error: 'Campos incompletos' }, { status: 400 })
    }

    const from = `Dr. Hernán Vázquez <${process.env.SMTP_USER}>`
    const transporter = createTransport()

    await transporter.sendMail({
      from,
      to: RECIPIENTS,
      replyTo: correo,
      subject: `Nueva cita — ${nombre} (${colonia})`,
      html: buildHtml(nombre, correo, whatsapp, colonia),
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contacto] Error enviando email:', err)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}
