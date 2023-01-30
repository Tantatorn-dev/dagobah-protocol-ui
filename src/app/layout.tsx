"use client";
import Navbar from "@/components/navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { Config, DAppProvider, Mainnet } from "@usedapp/core";
import "./globals.css";

const HYPERSPACE_CHAIN_ID = 3141;
const HYPERSPACE_RPC_URL = "https://api.hyperspace.node.glif.io/rpc/v1";

const config: Config = {
  readOnlyChainId: HYPERSPACE_CHAIN_ID,
  readOnlyUrls: {
    [HYPERSPACE_CHAIN_ID]: HYPERSPACE_RPC_URL,
  },
  networks: [
    {
      chainId: HYPERSPACE_CHAIN_ID,
      chainName: "Hyperspace",
      isTestChain: true,
      rpcUrl: HYPERSPACE_RPC_URL,
      nativeCurrency: {
        name: "TFIL",
        symbol: "TFIL",
        decimals: 18,
      },
      isLocalChain: false,
      getExplorerAddressLink: (address) => {
        return `https://filfox.info/en/address/${address}`;
      },
      getExplorerTransactionLink: (txHash) => {
        return `https://filfox.info/en/message/${txHash}`;
      },
      multicallAddress: "0x00",
    },
  ],
};

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
