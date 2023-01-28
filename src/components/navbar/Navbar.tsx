"use client";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Spacer,
} from "@chakra-ui/react";
import { css } from "@emotion/css";
import { useEthers } from "@usedapp/core";
import React from "react";

const navbarStyles = css`
  background-color: #405654;
  border-bottom: 1px solid #e1e4e8;
  padding: 18px;
`;

const Navbar = () => {
  const { activateBrowserWallet, account, deactivate } = useEthers();

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
              <PopoverContent alignItems="center" width="10rem">
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <Button
                    onClick={() => {
                      deactivate();
                    }}
                    colorScheme="red"
                  >
                    Deactivate
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
        )}
      </ButtonGroup>
    </Flex>
  );
};

export default Navbar;
