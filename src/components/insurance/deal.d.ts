type DealResponse = {
  totalCount: number;
  deals: Deal[];
};

type Deal = {
  id: string;
  timestamp: number;
  client: string;
  provider: string;
  pieceSize: number;
  verifiedDeal: boolean;
  stroagePrice: number;
};
