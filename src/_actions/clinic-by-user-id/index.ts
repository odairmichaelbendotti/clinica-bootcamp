import { prisma } from "@/db/db"
import { Clinics } from "@/generated/prisma"

export const getClinicByUser = async (userId: string): Promise<Clinics | { error: string }> => {
    try {
        if (!userId) return { error: "Informe o ID do usuário" }

        const response = await prisma.user.findUnique({
            where: {
                id: userId
            }
        })

        if (!response?.clinicId) return { error: "O usuário não possui uma clínica associada" }

        const clinic = await prisma.clinics.findUnique({
            where: {
                id: response.clinicId
            }
        })

        if (!clinic) return { error: "Clínica não encontrada" }

        return clinic
    } catch (err) {
        console.log(err)
        return { error: "Erro ao efetuar solicitação de clínica" }
    }

}