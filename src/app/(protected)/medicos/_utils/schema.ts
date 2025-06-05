import { z } from "zod"

export const AddMedicSchema = z.object({
    name: z.string().min(3, { message: "Mínimo 3 caracteres" }),
    avatarImg: z.string(),
    speciality: z.string(),
    availableFromWeekDay: z.string(),
    availableToWeekDay: z.string(),
    availableFromTime: z.string(),
    availableToTime: z.string(),
    appointmentPriceDents: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
}).refine((data) => {
    if (data.availableFromTime < data.availableToTime) return true
}, {
    message: "O horário de início não pode ser anterior ao horário de fim",
    path: ["availableToTime"]
})

export type AddMedicFormData = z.infer<typeof AddMedicSchema>