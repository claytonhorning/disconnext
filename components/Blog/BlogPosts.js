import matter from "gray-matter";
import Link from "next/link";
import {
  Heading,
  Stack,
  Box,
  LinkBox,
  Grid,
  GridItem,
  LinkOverlay,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";

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
              <img layout="fill" src={post.data.cover_image} />

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
