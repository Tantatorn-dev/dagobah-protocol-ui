"use client";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import { DonutChart, Legend } from "@tremor/react";

const mockData = [
  {
    name: "Other",
    value: 9800,
  },
  {
    name: "My Value",
    value: 4567,
  },
];

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()} USDT`;

const PoolCard = () => {
  return (
    <Card
      css={css`
        width: 32rem;
      `}
    >
      <CardHeader>
        <Heading size="md">Pool 0xffffffff</Heading>
      </CardHeader>
      <CardBody>
        <HStack>
          <DonutChart
            data={mockData}
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
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Stake
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default PoolCard;
