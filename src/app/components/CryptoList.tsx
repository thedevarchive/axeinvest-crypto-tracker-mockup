// app/users/page.tsx
"use client";

import { trpc } from "@/lib/trpc/client";
import { formatCurrency } from "@/lib/formatters";

export default function CryptoList() {
  const { data: cryptos, isLoading } = trpc.crypto.getAll.useQuery();

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
    {cryptos?.map((c) => (
              <>
                <hr className="border-t border-gray-300 my-4" />
                <div className="p-1 text-black flex justify-between items-center">
                  <div>
                    {c.name} ({c.abbreviation})
                  </div>
                  <div className="flex">
                    <div className="mr-20">{formatCurrency(c.amount)}</div>
                    <button className="text-red-500 mr-5">Remove</button>
                  </div>
                </div>
              </>
            ))}
            <br /> 
    </>
  );
}
