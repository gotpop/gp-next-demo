import type { NextPage } from "next";
import PostSingle from "../components/post";
import { Box, Container } from "@mui/material";
import Head from "next/head";

interface Props {
  posts: [PostInterface];
}

interface PostInterface {
  id: string;
  title: string;
  body: string;
}

const Feed: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Feed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="md">
        <Box p={8}>
          {posts.map((post: any, index: number) => (
            <PostSingle key={index} post={post} />
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Feed;

export async function getStaticProps() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const res = await fetch(url);
  const posts = await res.json();

  return {
    props: {
      posts: posts,
    },
  };
}
