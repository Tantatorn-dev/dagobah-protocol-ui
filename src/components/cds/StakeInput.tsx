"use client";
import { MOCK_POOL_ADDR } from "@/lib/const";
import { useBalance } from "@/lib/hooks";
import {
  Button,
  ButtonGroup,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { useSendTransaction } from "@usedapp/core";
import { ethers } from "ethers";
import { useState } from "react";

const StakeInput = () => {
  const balance = useBalance();
  const { sendTransaction } = useSendTransaction();
  const [input, setInput] = useState('');

  const onStake = () => {
    sendTransaction({
      value: ethers.utils.parseEther(input),
      to: MOCK_POOL_ADDR,
    });
  };

  return (
    <ButtonGroup spacing="2" width="100%" justifyContent="flex-end">
      <NumberInput
        max={balance}
        precision={2}
        keepWithinRange={false}
        clampValueOnBlur={false}
        value={input}
        onChange={(value) => setInput(value)}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Button onClick={onStake} variant="solid" background="#405654" color="white">
        Stake
      </Button>
    </ButtonGroup>
  );
};

export default StakeInput;
