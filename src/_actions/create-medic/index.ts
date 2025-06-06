"use server"
import { prisma } from "@/db/db"
import { AddMedicFormData, AddMedicSchema } from "@/app/(protected)/medicos/_utils/schema"

export const addNewDoctor = async (data: AddMedicFormData) => {

    try {
        console.log(data)
        const result = AddMedicSchema.safeParse(data)

        if (!result.success) {
            return { error: result.error.flatten() }
        }

        const medic = await prisma.doctors.create({
            data: {
                ...result.data
            }
        })

        if (!medic) return { error: 'Erro ao cadastrar médico' }

        return medic
    } catch (err) {
        console.log(err)
    }
}