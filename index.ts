import { createBunServeHandler } from "trpc-bun-adapter";
import { AppRouter } from "./src/api/trpc/router";

Bun.serve(createBunServeHandler({router: AppRouter}))

console.log("Listening on http://localhost:3000 ...");