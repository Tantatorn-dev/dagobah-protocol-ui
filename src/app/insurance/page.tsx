"use client";
import DealList from "@/components/insurance/DealList";
import Navbar from "@/components/navbar/Navbar";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

const InsurancePage = () => {
  return (
    <>
      <Navbar>
        <Link href="/cds">
          <Button variant="ghost">Switch to CDS Holder</Button>
        </Link>
      </Navbar>
      <DealList />
    </>
  );
};

export default InsurancePage;
