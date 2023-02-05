'use client';
import { MOCK_POOL_ADDR } from "@/lib/const";
import { zondaxFetcher } from "@/lib/fetcher";
import { convertBalance } from "@/lib/util";
import {
  Button,
  ButtonGroup,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { useEthers, useSendTransaction } from "@usedapp/core";
import { ethers } from "ethers";
import { useMemo, useState } from "react";
import useSWR from "swr";

const StakeInput = () => {
  const { account } = useEthers();
  const { data } = useSWR(`/account/balance/${account}`, zondaxFetcher);
  const myBalance = useMemo(() => {
    return data ? convertBalance(data.balances[0].value) : 0;
  }, [data]);
  const { sendTransaction } = useSendTransaction();
  const [sendValue, setSendValue] = useState(0);

  const onStake = () => {
    sendTransaction({
      value: ethers.utils.parseEther(sendValue.toString()),
      to: MOCK_POOL_ADDR,
    });
  };

  return (
    <ButtonGroup spacing="2" width="100%" justifyContent="flex-end">
      <NumberInput
        max={myBalance}
        keepWithinRange={false}
        clampValueOnBlur={false}
        value={sendValue}
        onChange={(value) => setSendValue(parseFloat(value))}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Button onClick={onStake} variant="solid" colorScheme="blue">
        Stake
      </Button>
    </ButtonGroup>
  );
};

export default StakeInput;
