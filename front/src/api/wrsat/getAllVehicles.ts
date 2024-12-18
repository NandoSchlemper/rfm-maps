export async function getAllVehicles() {
    console.log("Creating payload...")
    const timerStart = performance.now()

    type Payload = {
        user: string,
        password: string
      }
    
    const timerPayload = performance.now()
    console.log(`Payload created ms: ${timerPayload - timerStart}, getting envs...`)
    
      
    const authPayload: Payload = {
        user: import.meta.env.VITE_WRSAT_LOGIN,
        password: import.meta.env.VITE_WRSAT_PASSWORD
    }
    const api_url = import.meta.env.VITE_WRSAT_URL

    const timerEnvs = performance.now()
    console.log(`Envs created ms: ${timerEnvs - timerPayload}, fetching API Options`)

    const options = {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            "usuario": authPayload.user,
            "senha": authPayload.password,
            "ordem": "ASC",
            "limit": "100",
            "pagina": "1",
            "descricao": ""
            }),
        }

    const apiOptionsTimer = performance.now()
    console.log(`Optiions created ms: ${apiOptionsTimer - timerEnvs}, initializing trackingFilter types`)

    const response = await fetch(api_url, options)
    if (!response)  throw new Error("Erro ao pegar valores da API")

    const apiFetchingTimer = performance.now()
    console.log(`Fetching API created ms: ${apiFetchingTimer - apiOptionsTimer}, parsing response + formatting`)

    const responseParsing = response.json()
    return responseParsing
}

