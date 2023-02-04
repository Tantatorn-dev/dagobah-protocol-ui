"use client";
import PoolCard from "./PoolCard";
import useSWR from "swr";
import { zondaxFetcher } from "@/lib/fetcher";
import { useMemo } from "react";
import { convertBalance } from "@/lib/util";

const mockPoolAddr = "0x4Ad851ceECe435bB29C60b0A0660744247F0C97C";

const PoolList = () => {
  const { data } = useSWR(`/account/balance/${mockPoolAddr}`, zondaxFetcher);
  const totalValue = useMemo(() => {
    return data ? convertBalance(data.balances[0].value) : 0;
  }, [data]);

  return (
    <>
      <PoolCard myValue={4} other={totalValue} />
      <PoolCard myValue={3} other={1} />
      <PoolCard myValue={2} other={4.2} />
      <PoolCard myValue={4} other={15.3} />
    </>
  );
};

export default PoolList;
