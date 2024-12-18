import { fetch } from "bun"

type Payload = {
  user: string,
  password: string
}


export async function getAllVehicles() {
  const authPayload: Payload = {
    user: import.meta.env.VITE_WRSAT_LOGIN,
    password: import.meta.env.VITE_WRSAT_PASSWORD
  }

  const api_url = import.meta.env.VITE_WRSAT_URL

  const response = await fetch(api_url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      usuario: authPayload.user,
      senha: authPayload.password,
      ordem: "ASC",
      limit: "100",
      pagina: "1",
      descricao: ""
    })
  })

  console.log(response)
}