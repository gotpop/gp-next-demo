import type { GetStaticProps, NextPage } from 'next'
import PostSingle from '../components/post'
import { Box } from '@mui/material'
import Layout from '@layouts/layout'
import { IFeedProps, IPost } from 'types/index'

const Feed: NextPage<IFeedProps> = ({ posts }) => {
  return (
    <Layout>
      <Box mt={8}>
        {posts.map((post: IPost, index: number) => (
          <PostSingle key={index} post={post} />
        ))}
      </Box>
    </Layout>
  )
}

export default Feed

export const getStaticProps: GetStaticProps = async context => {
  const url = 'https://jsonplaceholder.typicode.com/posts'

  const res = await fetch(url)
  const posts = await res.json()

  return {
    props: {
      posts: posts
    }
  }
}
