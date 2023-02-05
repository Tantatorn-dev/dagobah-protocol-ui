"use client";
import PoolList from "@/components/cds/PoolList";
import Navbar from "@/components/navbar/Navbar";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

const CDSPage = () => {
  return (
    <>
      <Navbar>
        <Link href="/insurance">
          <Button colorScheme="whiteAlpha" variant="ghost" color="white">
            Switch to Insurance
          </Button>
        </Link>
      </Navbar>
      <PoolList />
    </>
  );
};

export default CDSPage;
