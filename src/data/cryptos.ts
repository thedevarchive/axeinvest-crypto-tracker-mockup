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
    abbreviation: string, 
    amount: number
}; 

export const cryptos: Crypto[] = [
    { id: 1, name: "Bitcoin", abbreviation: "BTC", amount: 45230.15 },
    { id: 2, name: "Ethereum", abbreviation: "ETH", amount: 3456.78 },
    { id: 3, name: "Cardano", abbreviation: "ADA", amount: 1.25},
    { id: 4, name: "Solana", abbreviation: "SOL", amount: 95.82 },
    { id: 5, name: "T3 Coin", abbreviation: "T33", amount: 33.33 },
    { id: 6, name: "Funni Money", abbreviation: "FUNNI", amount: 100.15 },
    { id: 7, name: "Axe Coin", abbreviation: "AXECOIN", amount: 20.17 },
  ];