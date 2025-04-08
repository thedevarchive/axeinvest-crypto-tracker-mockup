"use client";

import { useState, useEffect } from "react";
import { formatCurrency, formatProfitLoss } from "@/lib/formatters";
import CryptoList from "./components/CryptoList";

export default function Home() {
  const [investment, setInvestment] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [profitLoss, setProfitLoss] = useState(0);
  const [profitLossPercent, setProfitLossPercent] = useState(0);

  const [cryptoName, setCryptoName] = useState("");
  const [amount, setAmount] = useState(0);
  const [purchasePrice, setPurchasePrice] = useState(0);

  useEffect(() => {
    setInvestment(12500);
    setCurrentValue(18730.45);
    setProfitLoss(6230.45);
    setProfitLossPercent(49.84);

    setCryptoName("BTC");
    setAmount(0);
    setPurchasePrice(1);

  }, []);

  console.log(cryptoName, amount, purchasePrice);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen gap-4 sm:p-6 font-[family-name:var(--font-geist-sans)] max-w-screen-lg mx-auto">
      <div className="flex justify-between items-center">
        <div className="text-3xl font-bold text-white">AxeInvest Crypto Tracker</div>
        <div className="flex justify-between gap-4">
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
        </div>
      </div>
      <main className="flex flex-col row-start-2 items-center bg-gray-300">
        <div className="bg-gray-200 rounded-lg mb-4 mt-4 w-200 h-45 space-y-4">
          <div className="bg-white p-2 rounded-lg sm:items-start">
            <h2 className="text-xl font-semibold text-black">Portfolio Summary</h2>
          </div>
          <div className="text-base ml-2 mt-2">
            <div className="p-1 text-black">
              Total Investment: {formatCurrency(investment)}
            </div>
            <div className="p-1 text-black">
              Total Current Value: {formatCurrency(currentValue)}
            </div>
            <div className="p-1 text-green-600">
              Total Profit/Loss: {formatProfitLoss(profitLoss)} ({formatProfitLoss(profitLossPercent)}%)
            </div>
          </div>
        </div>
        <div className="bg-gray-200 rounded-lg mb-6 mt-4 w-200 h-75">
          <div className="bg-white p-2 rounded-lg sm:items-start">
            <h2 className="text-xl font-semibold text-black">Add Cryptocurrency</h2>
          </div>
          <div className="text-base ml-2 mt-2 text-black">
            <div className="m-2">
              <label className="p-1 mb-1">
                Crypto Name
              </label>
              <input className="bg-white rounded-sm outline outline-gray-300 w-190 ml-1 mt-1 p-2" placeholder="Crypto Name" />
            </div>
            <div className="m-2">
              <label className="p-1 mb-1">
                Amount
              </label>
              <input className="bg-white rounded-sm outline outline-gray-300 w-190 ml-1 mt-1 p-2" placeholder="Amount" />
            </div>
            <div className="m-2">
              <label className="p-1">
                Purchase Price
              </label>
              <input className="bg-white rounded-sm outline outline-gray-300 w-190 ml-1 mt-1 p-2" placeholder="Purchase Price" />
            </div>
            <button className="m-3 p-2 w-190 bg-blue-500 rounded-sm font-bold text-white">Add</button>
          </div>
        </div>
        <div className="bg-gray-200 rounded-lg mb-4 mt-4 w-200 h-auto">
          <div className="bg-white p-2 rounded-lg sm:items-start">
            <h2 className="text-xl font-semibold text-black">Your Portfolio</h2>
          </div>
          <div className="text-base ml-2 mt-2">
            <CryptoList /> 
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>© 2023 AxeInvest. All rights reserved.</p>
        <p className="text-center">Some of the cryptocurrencies displayed on this platform are fictional and for demonstration purposes only. They do not represent real assets or investments. All names and data are purely for mockup and creative use and do not reflect the actual value of cryptocurrency.</p>
      </footer>
    </div>
  );
}
