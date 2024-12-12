import { wrsatRouter } from "./routes/wrsatData";
import { router } from "./trpc";

export const AppRouter = router({
    wrsat: wrsatRouter
})

export type appRouter = typeof AppRouter