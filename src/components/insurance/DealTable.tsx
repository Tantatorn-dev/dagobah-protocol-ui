"use client";
import { filfoxFetcher } from "@/lib/fetcher";
import { kilobytesToAppropriateUnit, shortenAddress } from "@/lib/util";
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import useSWR from "swr";

const DealTable = () => {
  const { data, isLoading } = useSWR<DealResponse>(`/deal/list`, filfoxFetcher);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <TableContainer
      css={css`
        margin-top: 2.2rem;
        margin-bottom: 3.2rem;
      `}
    >
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
  );
};

export default DealTable;
