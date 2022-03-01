import { Box, Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

export default function Footer() {
  return (
    <Box>
      <Stack
        py="4"
        direction="column"
        align="center"
        bg="black"
        spacing="2"
        color="white"
      >
        <Image
          height="30px"
          width="150px"
          src="/assets/images/logo-light.svg"
        />
        <Text fontSize="sm">&copy; 2022 Disconnext. All rights reserved.</Text>
      </Stack>
    </Box>
  );
}
