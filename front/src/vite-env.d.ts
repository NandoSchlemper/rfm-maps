/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_GOOGLE_MAPS_API_KEY: string
    readonly VITE_WRSAT_LOGIN: string
    readonly VITE_WRSAT_PASSWORD: string
    readonly VITE_WRSAT_URL: string
// more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}