// server/routers/user.ts
import { router, publicProcedure } from "../trpc";
import { cryptos } from "@/data/cryptos";

export const cryptoRouter = router({
  getAll: publicProcedure.query(() => {
    return cryptos;
  }),
});
