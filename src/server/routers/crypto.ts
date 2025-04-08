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
  removeCrypto: publicProcedure
    .input(z.object({ id: z.number() })) // Expecting an ID for removal
    .mutation(({ input }) => {
      const { id } = input;
      const index = cryptos.findIndex((crypto) => crypto.id === id);

      if (index === -1) {
        throw new Error("Crypto not found");
      }

      cryptos.splice(index, 1); // Remove the crypto from the list
      return { success: true }; // Return a success response
    }),
});
