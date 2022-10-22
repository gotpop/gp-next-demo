import type { NextPage } from 'next'
import PostSingle from '../components/post'
import { Box } from '@mui/material'
import Layout from '@components/layout'

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

// I use get static props here to take advantage of SSR
// Elsewhere I use SWR to call the comments which would be more likley to require realtime updates
export async function getStaticProps() {
  const url = 'https://jsonplaceholder.typicode.com/posts'

  const res = await fetch(url)
  const posts = await res.json()

  return {
    props: {
      posts: posts
    }
  }
}
