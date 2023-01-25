"use client";
import { Box, Button, ButtonGroup, Flex, Heading, Image, Spacer, Stack } from "@chakra-ui/react";
import { css } from "@emotion/css";
import React from "react";

const navbarStyles = css`
  background-color: #405654;
  border-bottom: 1px solid #e1e4e8;
  padding: 18px;
`;

const Navbar = () => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" className={navbarStyles}>
      <Box p="2">
        <Heading size="md">Dagobah Protocol</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Button colorScheme="teal">Connect Wallet</Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Navbar;
