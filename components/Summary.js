import { Box, Stack, Text, Heading, Divider } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { BsFillLightningFill } from "@react-icons/all-files/bs/BsFillLightningFill";

export default function Summary({ children }) {
  return (
    <Box padding="10" boxShadow="base" bg="gray.50" borderRadius="10">
      <Stack direction="column">
        <Stack mb="1" align="center" direction={"row"}>
          <Text color={"blue.400"} fontWeight="semibold" fontSize="xl">
            Summary
          </Text>
          <Icon color="blue.400" as={BsFillLightningFill} />
        </Stack>
        <Divider />
        <Text pt="2">{children}</Text>
      </Stack>
    </Box>
  );
}
