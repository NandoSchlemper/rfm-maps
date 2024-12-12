import {z} from 'zod'

export const RequestPayload = z.object({
    usuario: z.string(),
    senha: z.string(),
    ordem: z.enum(['ASC', 'DESC']).default('ASC'),
    limit: z.number().min(0).max(300).default(100),
    pagina: z.number().min(1).default(1),
    descricao: z.string().optional().default(''), 
});