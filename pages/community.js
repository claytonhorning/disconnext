import { Flex, Box, Text, Heading } from "@chakra-ui/react";

export default function Community({ data }) {
  return (
    <Box>
      <Flex>
        {data.map((sub) => (
          <Text>{sub.title}</Text>
        ))}
      </Flex>
    </Box>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/api/submissions");
  const { data } = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
