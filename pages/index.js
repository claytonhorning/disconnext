import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Layout from "../components/Layout";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import BlogPosts from "../components/Blog/BlogPosts";
import HeroSection from "../components/HeroSection";

export default function Index({ posts }) {
  return (
    <Layout>
      <HeroSection />
      <BlogPosts posts={posts} />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
