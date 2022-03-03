import { Box, Text, Stack, Flex, Avatar } from "@chakra-ui/react";
import ReactPlayer from "react-player";

export default function VideoResponse({
  question,
  userSubmitted,
  userAnswered,
  video,
  date,
}) {
  let dateArray = date.split(" ");
  let month = dateArray[1];
  let day = dateArray[2];
  let year = dateArray[3];
  let dateString = `${month} ${day} ${year}`;

  return (
    <Box bg="white" width="320px" borderRadius={"10"} boxShadow="lg">
      <Stack pt="2" px="4" justifyContent={"space-between"} direction={"row"}>
        <Stack align="center" direction={"row"}>
          <Avatar size="2xs" src="https://bit.ly/broken-link" />
          <Text fontSize={"xs"}>{userSubmitted}</Text>
        </Stack>

        <Text fontSize={"xs"}>{dateString}</Text>
      </Stack>

      <Text fontWeight={"semibold"} px="4" my="2">
        {question}
      </Text>
      <Box height="400px" width="320px">
        <video
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
          src={video}
          controls={true}
        />
        {/* <Text
          color="white"
          position="relative"
          ml="4"
          mt="-30px"
          fontSize={"sm"}
        >
          Response from {userAnswered}
        </Text> */}
      </Box>
    </Box>
  );
}
