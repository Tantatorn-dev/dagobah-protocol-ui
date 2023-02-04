export const convertBalance = (balance: string) => {
  const balanceNum = Number(balance);
  return balanceNum / 1000000000000000000;
};

export const shortenAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const kilobytesToAppropriateUnit = (kilobytes: number) => {
  if (kilobytes < 1000) {
    return `${kilobytes} KB`;
  } else if (kilobytes < 1000000) {
    return `${(kilobytes / 1000).toFixed(2)} MB`;
  } else {
    return `${(kilobytes / 1000000).toFixed(2)} GB`;
  }
};
