type TransactionResponse = {
  Transactions: Transaction[];
};

type Transaction = {
  amount: number;
  tx_from: string;
  tx_to: string;
  tx_type: string;
};
