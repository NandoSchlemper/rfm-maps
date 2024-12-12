import { router, procedure } from "../trpc";
import {RequestPayload} from "../../../entities/wrsatPayloads";

export const wrsatRouter = router({
    test: procedure
        .input(RequestPayload)
        .query(({input}) => {
            return {message: input.usuario}
        })
})