"use client";

import useRegister from "@/contracts/hooks/useRegister";
import { filfoxFetcher } from "@/lib/fetcher";
import { kilobytesToAppropriateUnit } from "@/lib/util";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";
import useSWR from "swr";

const SubBox = styled(Box)`
  display: flex;
  & > * {
    min-width: 150px;
  }
`;

export const DealDetail = () => {
  const params = useSearchParams();
  const { data, isLoading } = useSWR<Deal>(
    `/deal/${params.get("dealId")}`,
    filfoxFetcher
  );
  const toast = useToast();
  const { register, state, resetState } = useRegister();

  const disabled = useMemo(() => {
    return (
      state.status === "Mining" ||
      state.status === "Success" ||
      state.status === "PendingSignature"
    );
  }, [state.status]);

  console.log(disabled);

  useEffect(() => {
    if (state.status === "Exception") {
      if (state.errorMessage) {
        toast({
          description: state.errorMessage,
          status: "error",
        });
        resetState();
      }
    }
  }, [state.status, resetState, state.errorMessage, toast]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Deal not found</div>;
  }

  return (
    <VStack
      css={css`
        margin-top: 2.2rem;
        margin-bottom: 3.2rem;
      `}
    >
      <Card>
        <CardBody>
          <Box display="flex">
            <Heading fontSize="2xl">Deal ID:</Heading>
            <Heading fontSize="2xl">{data.id}</Heading>
          </Box>
          <SubBox>
            <Text>Client:</Text>
            <Text>{data.client}</Text>
          </SubBox>
          <SubBox>
            <Text>Provider:</Text>
            <Text>{data.provider}</Text>
          </SubBox>
          <SubBox>
            <Text>Piece Size:</Text>
            <Text>{kilobytesToAppropriateUnit(data.pieceSize)}</Text>
          </SubBox>
          <SubBox>
            <Text>Storage Price:</Text>
            <Text>{data.stroagePrice}</Text>
          </SubBox>
          <SubBox>
            <Text>Verified Deal:</Text>
            <Text>{data.verifiedDeal.toString()}</Text>
          </SubBox>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button
            disabled={disabled}
            onClick={() => register(data.id)}
            colorScheme="blue"
            isLoading={state.status === "PendingSignature"}
          >
            Deal !
          </Button>
        </CardFooter>
      </Card>
    </VStack>
  );
};

export default DealDetail;
