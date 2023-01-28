"use client";
import Navbar from "@/components/navbar/Navbar";
import { Button, ChakraProvider } from "@chakra-ui/react";
import { Config, DAppProvider, Goerli, Mainnet } from "@usedapp/core";
import { getDefaultProvider } from "ethers";
import "./globals.css";

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet'),
    [Goerli.chainId]: getDefaultProvider('goerli'),
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
