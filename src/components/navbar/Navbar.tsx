"use client";
import React from "react";
import zondaxFetcher from "@/lib/fetcher";
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
import useSWR from "swr";
import { convertBalance } from "@/lib/util";

const navbarStyles = css`
  background-color: #405654;
  padding: 18px;
`;

const Navbar = () => {
  const { activateBrowserWallet, account, deactivate } = useEthers();
  const { data } = useSWR(`/account/balance/${account}`, zondaxFetcher);

  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap="2"
      className={navbarStyles}
    >
      <Box p="2">
        <Heading size="md" color="white">
          Dagobah Protocol
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
                    My Balance:{" "}
                    {data ? convertBalance(data.balances[0].value) : 0} TFIL
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
