"use client";
import PoolCard from "./PoolCard";
import useSWR from "swr";
import { zondaxFetcher } from "@/lib/fetcher";
import { useMemo } from "react";
import { convertBalance, shortenAddress } from "@/lib/util";

export const mockPoolAddr = "0x4Ad851ceECe435bB29C60b0A0660744247F0C97C";

const PoolList = () => {
  const { data } = useSWR(`/account/balance/${mockPoolAddr}`, zondaxFetcher);
  const totalValue = useMemo(() => {
    return data ? convertBalance(data.balances[0].value) : 0;
  }, [data]);

  return (
    <>
      <PoolCard name={shortenAddress(mockPoolAddr)} myValue={4} other={totalValue} />
      <PoolCard name={'0x133v...deFM'} myValue={3} other={1} />
      <PoolCard name={'0x3S3D...3FFD'} myValue={2} other={4.2} />
      <PoolCard name={'0x2S3F...BDFc'} myValue={4} other={15.3} />
    </>
  );
};

export default PoolList;
