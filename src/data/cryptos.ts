type PorfolioSummary = {
    id: number, 
    investment: number, 
    currentValue: number, 
    profitLoss: number, 
    profitLossPercent: number
}

export const portfolios: PorfolioSummary[] = [
    {id: 1, investment: 12500, currentValue: 18730.45, profitLoss: 6230.45, profitLossPercent: 49.84}
]

type Crypto = {
    id: number, 
    name: string, 
    amount: number, 
    purchasePrice: number
}; 

export const cryptos: Crypto[] = [
    { id: 1, name: "Bitcoin (BTC)", amount: 45230.15, purchasePrice: 1 },
    { id: 2, name: "Ethereum (ETH)", amount: 3456.78, purchasePrice: 30000 },
    { id: 3, name: "Cardano (ADA)", amount: 1.25, purchasePrice: 1},
    { id: 4, name: "Solana (SOL)", amount: 95.82, purchasePrice: 50},
    { id: 5, name: "T3 Coin (T33)", amount: 103.33, purchasePrice: 33.33 },
    { id: 6, name: "Funni Money (FUNNI)", amount: 100.15, purchasePrice: 69 },
    { id: 7, name: "Axe Coin (AXECOIN)", amount: 20.17, purchasePrice: 77.15 },
  ];