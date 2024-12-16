import {z} from 'zod'

const envSchema = z.object({
    GOOGLE_MAPS_API_KEY: z.string()
})

export const env = envSchema.parse({
    GOOGLE_MAPS_API_KEY: Bun.env.GOOGLE_MAPS_API_KEY
})