"use client";
import React, { ReactNode, useEffect } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverTrigger,
  Portal,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { css } from "@emotion/css";
import { useEthers } from "@usedapp/core";
import { convertBalance } from "@/lib/util";
import { useBalance } from "@/lib/hooks";
import Link from "next/link";

const navbarStyles = css`
  background-color: #405654;
  padding: 18px;
`;

const HYPERSPACE_RPC_URL = "https://api.hyperspace.node.glif.io/rpc/v1";

const Navbar: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const { activateBrowserWallet, account, deactivate, chainId } = useEthers();
  const balance = useBalance();

  useEffect(() => {
    async function checkNetwork() {
      if (chainId !== 3141) {
        try {
          // @ts-ignore
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0xc45" }],
          });
        } catch (e) {
          console.log(e);
          if ((e as any).code == 4902) {
            // @ts-ignore
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: "0xc45",
                  chainName: "Hyperspace",
                  rpcUrls: [HYPERSPACE_RPC_URL],
                  nativeCurrency: {
                    name: "TFIL",
                    symbol: "TFIL",
                    decimals: 18,
                  },
                },
              ],
            });
            // @ts-ignore
            await window.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: "0xc45" }],
            });
          }
        }
      }
    }
    checkNetwork();
  }, [chainId]);

  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap="2"
      className={navbarStyles}
    >
      <Box p="2">
        <Heading size="md" color="white">
          <Link href="/">Dagobah Protocol</Link>
        </Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        {!account && (
          <Button
            onClick={() => {
              activateBrowserWallet();
            }}
            colorScheme="teal"
          >
            Connect Wallet
          </Button>
        )}
        {children}
        {account && (
          <Popover>
            <PopoverTrigger>
              <Button colorScheme="teal">
                {account.slice(0, 6) + "..." + account.slice(-4)}
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent alignItems="center" width="15rem">
                <PopoverArrow />
                <PopoverBody>
                  <Text
                    css={css`
                      color: black;
                    `}
                  >
                    My Balance: {balance?.toFixed(2)} TFIL
                  </Text>
                </PopoverBody>
                <PopoverFooter>
                  <Button
                    onClick={() => {
                      deactivate();
                    }}
                    colorScheme="red"
                  >
                    Deactivate
                  </Button>
                </PopoverFooter>
              </PopoverContent>
            </Portal>
          </Popover>
        )}
      </ButtonGroup>
    </Flex>
  );
};

export default Navbar;
