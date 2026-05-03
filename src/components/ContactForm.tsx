'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { contactFormSchema, type ContactFormValues } from '@/lib/schema'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState<string>('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      petName: '',
      petType: 'perro',
      reason: 'consulta-general',
      preferredDate: '',
      message: '',
      consent: false as unknown as true,
      website: '',
    },
  })

  const onSubmit = async (values: ContactFormValues) => {
    setStatus('submitting')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(data.error || 'No se pudo enviar el formulario.')
      }
      setStatus('success')
      reset()
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Error desconocido.')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-card border border-emerald-200 bg-emerald-50 p-6 text-emerald-900 flex gap-3 items-start">
        <CheckCircle2 className="w-6 h-6 mt-0.5 shrink-0" aria-hidden />
        <div>
          <h3 className="font-display font-bold text-lg">
            ¡Gracias! Hemos recibido tu solicitud
          </h3>
          <p className="text-sm mt-1">
            Te contactaremos en horario laborable. Si es urgente, llámanos al{' '}
            <a className="underline font-semibold" href="tel:968343980">
              968 343 980
            </a>{' '}
            o, fuera de horario, a urgencias 24h:{' '}
            <a className="underline font-semibold" href="tel:968899280">
              968 899 280
            </a>
            .
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-4 text-sm font-semibold text-primary underline"
          >
            Enviar otra solicitud
          </button>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-4"
    >
      {/* Honeypot */}
      <div className="hidden" aria-hidden>
        <label>
          No rellenar
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register('website')}
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Nombre completo *" error={errors.name?.message}>
          <input
            type="text"
            autoComplete="name"
            className={inputCls(!!errors.name)}
            {...register('name')}
          />
        </Field>
        <Field label="Teléfono *" error={errors.phone?.message}>
          <input
            type="tel"
            autoComplete="tel"
            className={inputCls(!!errors.phone)}
            {...register('phone')}
          />
        </Field>
      </div>

      <Field label="Email" error={errors.email?.message}>
        <input
          type="email"
          autoComplete="email"
          className={inputCls(!!errors.email)}
          {...register('email')}
        />
      </Field>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Nombre de la mascota" error={errors.petName?.message}>
          <input type="text" className={inputCls(!!errors.petName)} {...register('petName')} />
        </Field>
        <Field label="Tipo de mascota *" error={errors.petType?.message}>
          <select className={inputCls(!!errors.petType)} {...register('petType')}>
            <option value="perro">Perro</option>
            <option value="gato">Gato</option>
            <option value="otro">Otro</option>
          </select>
        </Field>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Motivo de la consulta *" error={errors.reason?.message}>
          <select className={inputCls(!!errors.reason)} {...register('reason')}>
            <option value="consulta-general">Consulta general</option>
            <option value="vacunacion">Vacunación</option>
            <option value="cirugia">Cirugía</option>
            <option value="peluqueria">Peluquería</option>
            <option value="tienda">Tienda</option>
            <option value="otro">Otro</option>
          </select>
        </Field>
        <Field label="Fecha preferida" error={errors.preferredDate?.message}>
          <input
            type="date"
            className={inputCls(!!errors.preferredDate)}
            {...register('preferredDate')}
          />
        </Field>
      </div>

      <Field label="Mensaje (opcional)" error={errors.message?.message}>
        <textarea
          rows={4}
          className={inputCls(!!errors.message)}
          {...register('message')}
        />
      </Field>

      <label className="flex items-start gap-3 text-sm text-textSecondary">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-borderc text-primary focus:ring-primary"
          {...register('consent')}
        />
        <span>
          He leído y acepto la{' '}
          <a
            href="/aviso-legal"
            className="text-primary underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            política de privacidad
          </a>
          . *
        </span>
      </label>
      {errors.consent?.message && (
        <p className="text-sm text-emergency -mt-2">{errors.consent.message}</p>
      )}

      {status === 'error' && (
        <div className="rounded-card border border-emergency/30 bg-emergency/5 text-emergency p-3 text-sm flex items-start gap-2">
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" aria-hidden />
          <span>{errorMsg || 'Hubo un problema al enviar tu solicitud.'}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-primary hover:bg-primary-light disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-card transition-colors flex items-center justify-center gap-2"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden />
            Enviando...
          </>
        ) : (
          'Enviar solicitud de cita'
        )}
      </button>
    </form>
  )
}

function inputCls(hasError: boolean) {
  return [
    'w-full rounded-card border bg-white px-4 py-2.5 text-sm text-textPrimary',
    'focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary',
    'transition-colors',
    hasError ? 'border-emergency' : 'border-borderc',
  ].join(' ')
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-textPrimary mb-1.5">
        {label}
      </span>
      {children}
      {error && <span className="block text-sm text-emergency mt-1">{error}</span>}
    </label>
  )
}
