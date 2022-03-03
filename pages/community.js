import {
  Flex,
  Box,
  Text,
  Heading,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import VideoResponse from "../components/VideoResponse";

import Layout from "../components/Layout";

export default function Community({ data }) {
  const sortedSubmissions = data.sort((a, b) => {
    if (b.date > a.date) return 1;
    if (b.date < a.date) return -1;
  });

  return (
    <Layout>
      <Flex justify="center" my="35">
        <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing="20" mb="20">
          {sortedSubmissions.map((sub) => (
            <GridItem key={sub._id} margin="5">
              <VideoResponse
                question={sub.question}
                userSubmitted={sub.userSubmitted}
                userAnswered={sub.userAnswered}
                video={sub.videoResponse}
                date={sub.date}
              />
            </GridItem>
          ))}
        </SimpleGrid>
      </Flex>
    </Layout>
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
