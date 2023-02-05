import { useEthers } from "@usedapp/core";
import { useMemo } from "react";
import useSWR from "swr";
import { zondaxFetcher } from "./fetcher";
import { convertBalance } from "./util";

export const useBalance = () => {
  const { account } = useEthers();
  const { data } = useSWR(`/account/balance/${account}`, zondaxFetcher);

  const balance = useMemo(() => {
    return data?.balances && data?.balances?.length > 0
      ? convertBalance(data.balances[0]?.value)
      : 0;
  }, [data]);

  return balance;
};
