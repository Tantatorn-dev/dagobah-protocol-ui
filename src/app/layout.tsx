"use client";
import Navbar from "@/components/navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { Config, DAppProvider, Mainnet } from "@usedapp/core";
import { getDefaultProvider } from "ethers";
import "./globals.css";

const HYPERSPACE_CHAIN_ID = 3141;
const HYPERSPACE_RPC_URL = "https://api.hyperspace.node.glif.io/rpc/v1"

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet'),
    [HYPERSPACE_CHAIN_ID]: getDefaultProvider(HYPERSPACE_RPC_URL),
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <DAppProvider config={config}>
          <ChakraProvider>
            <Navbar />
            {children}
          </ChakraProvider>
        </DAppProvider>
      </body>
    </html>
  );
}
