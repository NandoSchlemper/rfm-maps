import {z} from 'zod'

const envSchema = z.object({
    WRSAT_LINK: z.string().url(),
    USER: z.string(),
    PASSWORD: z.string()
})

export const env = envSchema.parse({
    WRSAT_LINK: Bun.env.WRSAT_LINK,
    USER: Bun.env.USER,
    PASSWORD: Bun.env.PASSWORD
})