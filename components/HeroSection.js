import {
  Flex,
  Box,
  Heading,
  Text,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  AvatarGroup,
  Avatar,
  Center,
} from "@chakra-ui/react";

import { EmailIcon } from "@chakra-ui/icons";

export default function HeroSection() {
  const Mask = ({ mask, children }) => (
    <Box
      style={{
        WebkitMaskImage: "url(assets/images/mask.svg)",
        maskImage: "url(assets/images/mask.svg)",
        WebkitMaskPosition: "center center",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "cover",
        maskPosition: "center center",
        maskRepeat: "no-repeat",
        maskSize: "cover",
      }}
    >
      {children}
    </Box>
  );

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      my="35"
      justifyContent={"space-between"}
      align="center"
    >
      <Stack
        maxW={{ md: "50%", base: "100%" }}
        direction={"column"}
        spacing="6"
      >
        <Heading as="h1" size="2xl">
          A community combating the negative effects of social media &
          harnessing the good
        </Heading>
        <Text>
          Learn from others experiences about how they have disconnected their
          identities from the online world and be apart of the most positive
          online community.
        </Text>
        <FormControl>
          <InputGroup size="lg">
            <InputLeftElement children={<EmailIcon color="gray.300" />} />
            <Input
              rounded="none"
              variant="filled"
              type="email"
              placeholder="Email Address"
              size="lg"
            />

            <Box
              width="100px"
              as="button"
              _hover={{ bg: "black" }}
              color="white"
              bg="blue.400"
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            >
              Join Us
            </Box>
          </InputGroup>
        </FormControl>
        <Stack direction="row" align="center" text="sm" fontWeight="bold">
          <AvatarGroup size="sm">
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
          </AvatarGroup>
          <Text>Cameron, Zach, and Tahar just joined.</Text>
        </Stack>
      </Stack>
      <Box mt={{ base: "10", md: "0" }}>
        <Mask mask="url:public/assets/images/mask.svg">
          <video
            autoPlay="true"
            muted="true"
            loop="true"
            src="/assets/videos/video.mp4"
            width="350"
          ></video>
        </Mask>
      </Box>
    </Flex>
  );
}
