import type { GetStaticProps, NextPage } from 'next'
import PostSingle from '../components/post'
import { Box } from '@mui/material'
import Layout from '@layouts/layout'

// TODO: Types could be imported
interface Props {
  posts: PostInterface[]
}

interface PostInterface {
  id: string
  title: string
  body: string
}

const Feed: NextPage<Props> = ({ posts }) => {
  return (
    <Layout>
      <Box p={8}>
        {posts.map((post: PostInterface, index: number) => (
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
