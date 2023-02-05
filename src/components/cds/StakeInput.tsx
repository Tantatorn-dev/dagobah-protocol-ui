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
        max={balance}
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
