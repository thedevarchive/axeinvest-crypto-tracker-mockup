// app/users/page.tsx
"use client";

import { trpc } from "@/lib/trpc/client";
import { formatCurrency } from "@/lib/formatters";

export default function CryptoList() {
  const utils = trpc.useUtils();

  const { data: cryptos, isLoading } = trpc.crypto.getCryptos.useQuery();

  const { mutate: removeCrypto } = trpc.crypto.removeCrypto.useMutation({
    onSuccess: () => {
      utils.crypto.getCryptos.invalidate();
    }
  });

  if (isLoading) return <div>Loading...</div>;

  const handleRemoveCrypto = async (cryptoId: number) => {
    removeCrypto({
      id: cryptoId
    });
  }

  return (
    <>
      {cryptos?.map((c) => (
        <div key={c.id}>
          <hr className="border-t border-gray-300 my-4" />
          <div className="p-1 text-black flex justify-between items-center">
            <div>
              {c.name}
            </div>
            <div className="flex">
              <div className="mr-20">{formatCurrency(c.amount)}</div>
              <button onClick={() => handleRemoveCrypto(c.id)} className="text-red-500 mr-5">Remove</button>
            </div>
          </div>
        </div>
      ))}
      <br />
    </>
  );
}
