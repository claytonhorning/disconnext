import fetch from "isomorphic-unfetch";
import VideoResponse from "../../../components/VideoResponse";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import { Box, Flex } from "@chakra-ui/react";

const Submission = ({ data }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{data.question}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={data.question} />
        <meta
          property="og:url"
          content={`${process.env.DB_HOST}/${data._id}`}
        />
        <meta property="og:title" content={data.question} />
        <meta property="og:type" content="video.movie" />
        {/* <meta
          property="og:image"
          content="https://i.ytimg.com/vi/3pvpNKUPbIY/maxresdefault.jpg"
        /> */}
        <meta property="og:video" content="/assets/videos/me.mov" />
      </Head>
      <Layout>
        <Flex justify="center" my="35">
          <VideoResponse
            question={data.question}
            userSubmitted={data.userSubmitted}
            userAnswered={data.userAnswered}
            video={data.videoResponse}
            date={data.date}
            id={data._id}
            width="500px"
            height="600px"
          />
        </Flex>
      </Layout>
    </>
  );
};
export default Submission;

export async function getServerSideProps({ query: { id } }) {
  const res = await fetch(`${process.env.DB_HOST}/api/submissions/${id}`);
  const { data } = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
}
