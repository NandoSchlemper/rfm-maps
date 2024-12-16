/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly GOOGLE_MAPS_API_KEY: string
// more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}