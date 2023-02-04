"use client";
import { Box, Button, Center, HStack, Input, VStack } from "@chakra-ui/react";
import DealTable from "./DealTable";

const DealList = () => {
  return (
    <Center marginTop="8.4rem">
      <VStack gap="2.4rem">
        <HStack>
          <Input placeholder="Search for storage deals" width="24rem" />
          <Button background="#466164">Search</Button>
        </HStack>
        <DealTable />
      </VStack>
    </Center>
  );
};

export default DealList;
