export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount);
};

export const formatProfitLoss = (amount: number): string => {
    let sign: string = "";
    sign = amount > 0 ? "+" : "-";
    return sign + new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount);
}