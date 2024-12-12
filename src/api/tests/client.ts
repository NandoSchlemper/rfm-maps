import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { appRouter } from '../trpc/router';
import { env } from '../../utils/env';

const trpc = createTRPCProxyClient<appRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000', // URL do seu servidor tRPC
    }),
  ],
});


async function main() {
    const result = await trpc.wrsat.listaVeiculos.query({
        usuario: env.USER, senha: env.PASSWORD
    })
    
    console.log(result)
}

main()