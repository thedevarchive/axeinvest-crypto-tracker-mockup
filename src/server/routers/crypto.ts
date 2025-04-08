// server/routers/user.ts
import { router, publicProcedure } from "../trpc";
import { cryptos, portfolios } from "@/data/cryptos";

export const cryptoRouter = router({
  getCryptos: publicProcedure.query(() => {
    return cryptos;
  }),
  getPorfolioSummary: publicProcedure.query(() => {
    return portfolios[0]; 
  })
});
