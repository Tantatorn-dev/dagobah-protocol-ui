export const convertBalance = (balance: string) => {
  const balanceNum = Number(balance);
  return balanceNum / 1000000000000000000;
};
