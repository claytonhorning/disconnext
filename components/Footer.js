import { Box, Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react";

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
        <Text fontSize="lg" fontWeight="bold">
          Disconnext
        </Text>
        <Text fontSize="sm">&copy; 2022 Disconnext. All rights reserved.</Text>
      </Stack>
    </Box>
  );
}
