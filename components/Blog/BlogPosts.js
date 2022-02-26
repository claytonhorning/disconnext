import {
  Heading,
  LinkBox,
  GridItem,
  LinkOverlay,
  Text,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";

export default function BlogPosts({ posts }) {
  return (
    <section id="blog">
      <Heading py="50" align="center" as="h2" size="xl">
        From the Blog
      </Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="10" mb="20">
        {posts.map((post) => (
          <GridItem key={`/posts/${post.filePath}`}>
            <LinkBox as="article">
              <Flex position="relative" height={{ base: "300", md: "200" }}>
                <Image
                  objectFit="cover"
                  layout="fill"
                  src={post.data.cover_image}
                  alt={post.data.title}
                />
              </Flex>

              <LinkOverlay
                href={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
              >
                <Text mt="2" color={"gray.600"}>
                  {post.data.date}
                </Text>
                <Heading mt="2" as="h2" size="md">
                  {post.data.title}
                </Heading>
                <Text mt="2">{post.data.summary}</Text>
              </LinkOverlay>
            </LinkBox>
          </GridItem>
        ))}
      </SimpleGrid>
    </section>
  );
}
