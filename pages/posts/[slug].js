import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import path from "path";
import CustomLink from "../../components/CustomLink";
import Layout from "../../components/Layout";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import { Heading, Text, Box, Flex, Link } from "@chakra-ui/react";
import WithSubnavigation from "../../components/Navbar";
import Footer from "../../components/Footer";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  TestComponent: dynamic(() => import("../../components/TestComponent")),
  Head,
  p: (props) => (
    <Text as="p" my="8">
      {props.children}
    </Text>
  ),
  h1: (props) => (
    <Heading as="h1" size="4xl" my="8">
      {props.children}
    </Heading>
  ),
  h2: (props) => (
    <Heading as="h2" size="2xl" my="8">
      {props.children}
    </Heading>
  ),
  h3: (props) => (
    <Heading as="h3" size="xl" my="8">
      {props.children}
    </Heading>
  ),
  h4: (props) => (
    <Heading as="h3" size="lg" my="8">
      {props.children}
    </Heading>
  ),
};

export default function PostPage({ source, frontMatter }) {
  return (
    <>
      <WithSubnavigation />
      <Layout>
        <Head>
          <title>{frontMatter.title}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <header>
          <nav>
            <NextLink href="/" passHref>
              <Link color={"blue.400"}>&larr; Go back home</Link>
            </NextLink>
          </nav>
        </header>
        <div className="post-header">
          <Heading as="h1" size="3xl" mt="4" mb="10">
            {frontMatter.title}
          </Heading>
          {frontMatter.description && (
            <p className="description">{frontMatter.description}</p>
          )}
        </div>
        <Flex position="relative" width="100%" height="300" m="auto">
          <Image
            objectFit="cover"
            layout="fill"
            src={frontMatter.cover_image}
            alt={frontMatter.title}
          />
        </Flex>
        <main>
          <MDXRemote {...source} components={components} />
        </main>
      </Layout>
      <Footer />
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
