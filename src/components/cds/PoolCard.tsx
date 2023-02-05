"use client";
import { zondaxFetcher } from "@/lib/fetcher";
import { convertBalance } from "@/lib/util";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import { DonutChart, Legend } from "@tremor/react";
import { useEthers, useSendTransaction } from "@usedapp/core";
import { ethers } from "ethers";
import { useMemo, useState } from "react";
import useSWR from "swr";
import { mockPoolAddr } from "./PoolList";

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()} TFIL`;

type Props = {
  name: string;
  myValue: number;
  other: number;
};

const PoolCard: React.FC<Props> = ({ name, myValue, other }) => {
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
      to: mockPoolAddr,
    });
  };

  const chartData = [
    {
      name: "Other",
      value: other,
    },
    {
      name: "My Value",
      value: myValue,
    },
  ];

  return (
    <Card
      css={css`
        width: 32rem;
      `}
    >
      <CardHeader>
        <Heading size="md">Pool {name}</Heading>
      </CardHeader>
      <CardBody>
        <HStack>
          <DonutChart
            data={chartData}
            category="value"
            dataKey="name"
            valueFormatter={valueFormatter}
            marginTop="mt-6"
            colors={["slate", "cyan"]}
          />
          <Legend
            categories={["Other", "My Value"]}
            colors={["slate", "cyan"]}
            marginTop="mt-3"
          />
        </HStack>
      </CardBody>
      <CardFooter>
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
      </CardFooter>
    </Card>
  );
};

export default PoolCard;
