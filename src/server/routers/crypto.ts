// server/routers/user.ts
import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import { cryptos, portfolios } from "@/data/cryptos";

export const cryptoRouter = router({
  getCryptos: publicProcedure.query(() => {
    return cryptos;
  }),
  getPorfolioSummary: publicProcedure.query(() => {
    return portfolios[0];
  }),
  addCrypto: publicProcedure
    .input(
      z.object({
        name: z.string(),
        amount: z.number(),
        purchasePrice: z.number(),
      })
    )
    .mutation(({ input }) => {
      const newCrypto = {
        id: cryptos.length + 1, // Simple way to generate an ID
        name: input.name,
        amount: input.amount,
        purchasePrice: input.purchasePrice,
      };

      cryptos.push(newCrypto); // Add it to the "database" (in this case, an array)

      return newCrypto;
    }),
});
