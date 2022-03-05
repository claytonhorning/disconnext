import { Box, Text, Stack, Flex, Avatar, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function VideoResponse({
  question,
  userSubmitted,
  userAnswered,
  video,
  date,
  id,
  height,
  width,
}) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = new Date(date).toLocaleDateString("en-US", options);

  return (
    <Box bg="white" width={width} borderRadius={"10"} boxShadow="lg">
      <Stack pt="2" px="4" justifyContent={"space-between"} direction={"row"}>
        <Stack align="center" direction={"row"}>
          <Avatar size="2xs" src="https://bit.ly/broken-link" />
          <Text fontSize={"xs"}>{userSubmitted}</Text>
        </Stack>

        <Text fontSize={"xs"}>{formattedDate}</Text>
      </Stack>

      <Text fontWeight={"semibold"} px="4" my="2">
        {question}
      </Text>
      <Box height={height} width={width}>
        <video
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
          src={video}
          controls={true}
        />
      </Box>
      <Box
        bg="black"
        color="white"
        justify="center"
        p="4"
        borderBottomRadius={"10"}
      >
        <Stack direction="row" justify={"space-between"}>
          <Text fontSize={"xs"}>Response - {userAnswered}</Text>
          <NextLink href={"/submissions/" + id} passHref>
            <Link
              color="blue.200"
              _hover={{ textDecoration: "underline" }}
              fontSize={"xs"}
            >
              See post
            </Link>
          </NextLink>
        </Stack>
      </Box>
    </Box>
  );
}
