"use client";
import PoolCard from "./PoolCard";
import useSWR from "swr";
import { zondaxFetcher } from "@/lib/fetcher";
import { useMemo } from "react";
import { convertBalance, shortenAddress } from "@/lib/util";
import { MOCK_POOL_ADDR, MOCK_POOL_FIL_ADDR } from "@/lib/const";
import { useEthers } from "@usedapp/core";
import { Text } from "@chakra-ui/react";

const PoolList = () => {
  const { account } = useEthers();
  const { data: balanceData } = useSWR(
    `/account/balance/${MOCK_POOL_ADDR}`,
    zondaxFetcher
  );
  const { data: transactionData } = useSWR<TransactionResponse>(
    `/transactions/address/${account}`,
    zondaxFetcher
  );

  const totalValue = useMemo(() => {
    return balanceData ? convertBalance(balanceData.balances[0].value) : 0;
  }, [balanceData]);

  const myValue = useMemo(() => {
    const transactions = transactionData?.Transactions;

    const result = transactions?.reduce((acc, cur) => {
      if (cur?.tx_to === MOCK_POOL_FIL_ADDR && cur?.tx_type === "Send") {
	console.log(cur?.tx_type);
        return acc + Number(cur?.amount);
      }
      return acc;
    }, 0);

    return result || 0;
  }, [transactionData]);

  return (
    <>
      <PoolCard
        name={shortenAddress(MOCK_POOL_ADDR)}
        myValue={myValue}
        other={totalValue - myValue}
      />
      <PoolCard name={"0x133v...deFM"} myValue={3} other={1} />
      <PoolCard name={"0x3S3D...3FFD"} myValue={2} other={4.2} />
      <PoolCard name={"0x2S3F...BDFc"} myValue={4} other={15.3} />
    </>
  );
};

export default PoolList;
