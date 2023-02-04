'use client';
import Navbar from "@/components/navbar/Navbar";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

const CDSPage = () => {
  return (
    <>
      <Navbar>
        <Link href="/insurance">
          <Button variant="ghost">Switch to Insurance</Button>
        </Link>
      </Navbar>
    </>
  );
};

export default CDSPage;
