import {z} from 'zod'

export const RequestPayload = z.object({
    usuario: z.string(),
    senha: z.string(),
    ordem: z.string().nullable(),
    limit: z.string().nullable(),
    pagina: z.string().nullable(),
    descricao: z.string().nullable()
})