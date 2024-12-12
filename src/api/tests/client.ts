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
    const result = await trpc.wrsat.test.query({
        usuario: env.USER, senha: env.PASSWORD,
        ordem: null,
        limit: null,
        pagina: null,
        descricao: null
    })

    console.log(result)
}

main()