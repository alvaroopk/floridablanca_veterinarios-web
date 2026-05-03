import { NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/schema'

export async function POST(req: Request) {
  let payload: unknown
  try {
    payload = await req.json()
  } catch {
    return NextResponse.json({ error: 'JSON inválido.' }, { status: 400 })
  }

  const parsed = contactFormSchema.safeParse(payload)
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: 'Datos no válidos.',
        details: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    )
  }

  const data = parsed.data

  // Honeypot: si está relleno, ignoramos silenciosamente.
  if (data.website && data.website.length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail =
    process.env.CONTACT_FORM_TO_EMAIL || 'floridablancaveterinarios@gmail.com'

  const subject = `Nueva solicitud de cita — ${data.name}`
  const lines = [
    `Nombre: ${data.name}`,
    `Teléfono: ${data.phone}`,
    `Email: ${data.email || '(no proporcionado)'}`,
    `Mascota: ${data.petName || '(sin nombre)'} (${data.petType})`,
    `Motivo: ${data.reason}`,
    `Fecha preferida: ${data.preferredDate || '(no indicada)'}`,
    '',
    'Mensaje:',
    data.message || '(sin mensaje)',
  ]
  const text = lines.join('\n')

  if (!apiKey) {
    // Resend no configurado: log en servidor; el front interpretará el 200 como éxito.
    // En despliegue real con env var configurada, se enviará por email.
    console.info('[contact] Resend API key no configurada. Mensaje recibido:')
    console.info(text)
    return NextResponse.json({ ok: true, transport: 'log' }, { status: 200 })
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Floridablanca Web <onboarding@resend.dev>',
        to: [toEmail],
        reply_to: data.email || undefined,
        subject,
        text,
      }),
    })
    if (!res.ok) {
      const errBody = await res.text()
      console.error('[contact] Resend error:', errBody)
      return NextResponse.json(
        { error: 'No se pudo enviar el email.' },
        { status: 502 },
      )
    }
    return NextResponse.json({ ok: true, transport: 'resend' }, { status: 200 })
  } catch (err) {
    console.error('[contact] Fetch error:', err)
    return NextResponse.json(
      { error: 'Error al enviar el email.' },
      { status: 500 },
    )
  }
}
