import { z } from 'zod'

export const formSchema = z.object({
  firstName: z.string().min(1, "Voornaam is verplicht").trim(),
  lastName: z.string().min(1, "Achternaam is verplicht").trim(),
  email: z.string().min(1, "E-mail is verplicht").email("Ongeldig e-mailadres").trim(),
  phone: z.string().min(1, "Telefoonnummer is verplicht").trim(),
  address: z.string().min(1, "Adres is verplicht").trim(),
  stalAddress: z.string().min(1, "Staladres is verplicht").trim(),
})

export type FormData = z.infer<typeof formSchema>