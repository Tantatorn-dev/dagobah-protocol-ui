"use client";
import PoolCard from "./PoolCard";
import useSWR from "swr";
import { zondaxFetcher } from "@/lib/fetcher";
import { useMemo } from "react";
import { convertBalance, shortenAddress } from "@/lib/util";
import { MOCK_POOL_ADDR } from "@/lib/const";

const PoolList = () => {
  const { data } = useSWR(`/account/balance/${MOCK_POOL_ADDR}`, zondaxFetcher);
  const totalValue = useMemo(() => {
    return data ? convertBalance(data.balances[0].value) : 0;
  }, [data]);

  return (
    <>
      <PoolCard name={shortenAddress(MOCK_POOL_ADDR)} myValue={4} other={totalValue} />
      <PoolCard name={'0x133v...deFM'} myValue={3} other={1} />
      <PoolCard name={'0x3S3D...3FFD'} myValue={2} other={4.2} />
      <PoolCard name={'0x2S3F...BDFc'} myValue={4} other={15.3} />
    </>
  );
};

export default PoolList;
