import { Button, Center, Heading, Stack } from "@chakra-ui/react";
import { css } from "@emotion/react";

const Hero = () => {
  return (
    <Center height="100%">
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
  );
};

export default Hero;
