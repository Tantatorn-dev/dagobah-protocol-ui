import { Button, Center, Heading, Stack } from "@chakra-ui/react";
import { css } from "@emotion/react";

const Hero = () => {
  return (
    <Center height="100%">
      <Stack spacing={6}>
        <Heading as="h1" size="xl">
          Interplanetery Risk Management Marketplace
        </Heading>
        <Heading as="h2" size="md" textAlign="center">
          Purchase protection and secure your file
          <br />
          Vice versa, Get rewarded for providing protection
        </Heading>
        <Button
          css={css`
            width: 10rem;
            align-self: center;
            background: #466164;
          `}
        >
          Launch App
        </Button>
      </Stack>
    </Center>
  );
};

export default Hero;
