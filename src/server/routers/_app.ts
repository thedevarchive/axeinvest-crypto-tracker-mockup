// server/routers/_app.ts
import { router } from "../trpc";
import { cryptoRouter } from "./crypto";

export const appRouter = router({
  crypto: cryptoRouter,
});
