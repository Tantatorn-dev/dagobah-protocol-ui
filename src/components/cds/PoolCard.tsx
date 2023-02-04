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

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()} TFIL`;

type Props = {
  myValue: number;
  other: number;
};

const PoolCard: React.FC<Props> = ({ myValue, other }) => {
  const data = [
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
        <Heading size="md">Pool 0xffffffff</Heading>
      </CardHeader>
      <CardBody>
        <HStack>
          <DonutChart
            data={data}
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
