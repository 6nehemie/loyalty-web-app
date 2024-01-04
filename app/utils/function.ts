export const calculateTotalPrice = (...prices: number[]) => {
  return prices.reduce((acc, price) => acc + price, 0);
};

export const computesDays = (from: Date, to: Date) => {
  if (!from || !to) return 0;
  const differenceInTime = to.getTime() - from.getTime();
  return differenceInTime / (1000 * 3600 * 24) || 1;
};
