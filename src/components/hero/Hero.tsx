import { Button, Center, Flex, Heading, Stack } from "@chakra-ui/react";
import { css } from "@emotion/react";
import Planet from "./Planet";

const Hero = () => {
  return (
    <Flex
      css={css`
        row-gap: 2rem;
        padding-block: 2rem;
        height: 100%;
        flex-direction: column;
      `}
    >
      <Center height="24rem">
        <Planet />
      </Center>
      <Center>
        <Stack spacing={14}>
          <Stack spacing={6}>
            <Heading as="h1" size="xl">
              Interplanetery Risk Management Marketplace
            </Heading>
            <Heading as="h2" size="md" textAlign="center">
              Purchase protection and secure your file
              <br />
              Vice versa, Get rewarded for providing protection
            </Heading>
          </Stack>
          <Button
            css={css`
              width: 12.4rem;
              align-self: center;
              background: #466164;
              margin-top: 5rem;
            `}
            size="lg"
          >
            Launch App
          </Button>
        </Stack>
      </Center>
    </Flex>
  );
};

export default Hero;
