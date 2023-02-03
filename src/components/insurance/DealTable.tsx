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
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
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
              <Th isNumeric>Deal ID</Th>
              <Th>Create Time</Th>
              <Th>Client</Th>
              <Th>Provider</Th>
              <Th>Piece Size</Th>
              <Th>Verified Deal</Th>
              <Th>Storage Fee</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.deals.map((deal) => {
              return (
                <Tr key={deal.id}>
                  <Th isNumeric>{deal.id}</Th>
                  <Th>{new Date(deal.timestamp * 1000).toLocaleString()}</Th>
                  <Th>{shortenAddress(deal.client)}</Th>
                  <Th>{shortenAddress(deal.provider)}</Th>
                  <Th>{kilobytesToAppropriateUnit(deal.pieceSize)}</Th>
                  <Th>{deal.verifiedDeal ? "Yes" : "No"}</Th>
                  <Th>{deal.stroagePrice}</Th>
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
