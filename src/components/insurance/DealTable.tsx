"use client";
import { filfoxFetcher } from "@/lib/fetcher";
import { kilobytesToAppropriateUnit, shortenAddress } from "@/lib/util";
import {
  Button,
  ButtonGroup,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import useSWR from "swr";

const DealTable = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = parseInt(searchParams.get("page") || "0");

  const { data, isLoading } = useSWR<DealResponse>(
    `/deal/list?pageSize=10&page=${page}`,
    filfoxFetcher
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <VStack
      css={css`
        margin-top: 2.2rem;
        margin-bottom: 3.2rem;
      `}
    >
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Total {data?.totalCount} Deals</TableCaption>
          <Thead>
            <Tr>
              <Th color="cyan.200" isNumeric>
                Deal ID
              </Th>
              <Th color="cyan.200">Create Time</Th>
              <Th color="cyan.200">Client</Th>
              <Th color="cyan.200">Provider</Th>
              <Th color="cyan.200">Piece Size</Th>
              <Th color="cyan.200">Verified Deal</Th>
              <Th color="cyan.200">Storage Fee</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.deals.map((deal) => {
              return (
                <Tr key={deal.id}>
                  <Th color="white" isNumeric>
                    <Link
                      href={`/insurance/detail?dealId=${deal.id}`}
                      passHref
                      legacyBehavior
                    >
                      <ChakraLink>{deal.id}</ChakraLink>
                    </Link>
                  </Th>
                  <Th color="white">
                    {new Date(deal.timestamp * 1000).toLocaleString()}
                  </Th>
                  <Th>{shortenAddress(deal.client)}</Th>
                  <Th>{shortenAddress(deal.provider)}</Th>
                  <Th color="white">
                    {kilobytesToAppropriateUnit(deal.pieceSize)}
                  </Th>
                  <Th color={deal.verifiedDeal ? "green.400" : "red.400"}>
                    {deal.verifiedDeal ? "Yes" : "No"}
                  </Th>
                  <Th color="white">{deal.stroagePrice}</Th>
                </Tr>
              );
            })}
            <Tr></Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <ButtonGroup>
        {page > 0 && (
          <Button
            css={css`
              background: #466164;
              width: 5.2rem;
            `}
            onClick={() => {
              router.push(
                "/insurance?page=" +
                  (parseInt(searchParams.get("page") || "1") - 1)
              );
            }}
          >
            Back
          </Button>
        )}
        <Button
          css={css`
            background: #466164;
            width: 5.2rem;
          `}
          onClick={() => {
            router.push(
              "/insurance?page=" +
                (parseInt(searchParams.get("page") || "0") + 1)
            );
          }}
        >
          Next
        </Button>
      </ButtonGroup>
    </VStack>
  );
};

export default DealTable;
