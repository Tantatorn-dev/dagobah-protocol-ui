"use client";
import { filfoxFetcher } from "@/lib/fetcher";
import { Table, TableCaption, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { useEthers } from "@usedapp/core";
import useSWR from "swr";

const DealTable = () => {
  const { account } = useEthers();
  const { data } = useSWR(`/deal/list`, filfoxFetcher);

  return (
    <TableContainer marginTop="2.2rem">
      <Table variant="simple">
        <TableCaption>Total 10 Deals</TableCaption>
        <Thead>
          <Tr>
            <Th isNumeric>height</Th>
            <Th isNumeric>tx_timestamp</Th>
            <Th>tx_hash</Th>
	    <Th>tx_from</Th>
	    <Th>tx_to</Th>
	    <Th>amount</Th>
	    <Th>status</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
          </Tr>
          <Tr>
          </Tr>
          <Tr>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DealTable;
