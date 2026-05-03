import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Indica tu nombre completo').max(120),
  phone: z
    .string()
    .min(6, 'Introduce un teléfono válido')
    .max(30, 'Teléfono demasiado largo'),
  email: z
    .string()
    .email('Introduce un email válido')
    .optional()
    .or(z.literal('')),
  petName: z.string().max(80).optional().or(z.literal('')),
  petType: z.enum(['perro', 'gato', 'otro'], {
    errorMap: () => ({ message: 'Elige el tipo de mascota' }),
  }),
  reason: z.enum(
    [
      'consulta-general',
      'vacunacion',
      'cirugia',
      'peluqueria',
      'tienda',
      'otro',
    ],
    {
      errorMap: () => ({ message: 'Elige el motivo de la consulta' }),
    },
  ),
  preferredDate: z.string().optional().or(z.literal('')),
  message: z.string().max(2000).optional().or(z.literal('')),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Debes aceptar la política de privacidad' }),
  }),
  // Honeypot anti-bot — debe ir vacío
  website: z.string().max(0).optional().or(z.literal('')),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
