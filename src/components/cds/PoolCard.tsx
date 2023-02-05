"use client";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import { DonutChart, Legend } from "@tremor/react";
import StakeInput from "./StakeInput";

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()} TFIL`;

type Props = {
  name: string;
  myValue: number;
  other: number;
};

const PoolCard: React.FC<Props> = ({ name, myValue, other }) => {
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
        <Heading color="#a09590" size="md">Pool {name}</Heading>
      </CardHeader>
      <CardBody>
        <HStack>
          <DonutChart
            data={chartData}
            category="value"
            dataKey="name"
            valueFormatter={valueFormatter}
            marginTop="mt-6"
            colors={["slate", "emerald"]}
          />
          <Legend
            categories={["Other", "My Value"]}
            colors={["slate", "emerald"]}
            marginTop="mt-3"
          />
        </HStack>
      </CardBody>
      <CardFooter>
        <StakeInput />
      </CardFooter>
    </Card>
  );
};

export default PoolCard;
