import type { NextPage } from "next";
import Post from "../components/post";
import { Box, Container } from "@mui/material";
import Head from "next/head";

interface Props {
  posts: [object]
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
          {posts.map((post, index) => (
            <Post key={index} post={post} />
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
