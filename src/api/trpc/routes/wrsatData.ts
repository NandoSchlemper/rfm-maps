import { router, procedure } from "../trpc";
import {RequestPayload} from "../../../entities/wrsatPayloads";
import { fetch } from "bun";
import { env } from "../../../utils/env";

export const wrsatRouter = router({
    test: procedure
        .input(RequestPayload)
        .query(({input}) => {
            return {message: input.usuario}
        }),
    
    listaVeiculos: procedure
        .input(RequestPayload)
        .query(async ({input}) => {
            const response = await fetch(`${env.WRSAT_LINK}/lista_veiculos`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(input)
            })

            if (!response.ok) {
                throw new Error(`Failed to fetch vehicles: ${response.statusText}`);
            }

            const data = await response.json()

            return data.dados
        })
})