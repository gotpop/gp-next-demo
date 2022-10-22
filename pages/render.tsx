import type { NextPage } from 'next'
import { Box, Button, Container, TextField, Typography } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
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

const Render: NextPage<Props> = ({ posts }) => {
  const [name, setName] = useState('')
  const renderCount = useRef(0)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  const focus = () => {
    inputRef.current?.focus()
  }

  return (
    <Layout>
      <Box p={8}>
        <Typography variant="h2" component="h1" mb={2}>
          Component render count
        </Typography>
        <TextField
          inputRef={inputRef}
          fullWidth
          label={name}
          variant="outlined"
          onChange={e => setName(e.target.value)}
        />
        <Typography variant="h4" component="p" mb={2} mt={2}>
          This component has rendered {renderCount.current} times
        </Typography>
        <Button
          variant="contained"
          onClick={() => focus()}
          endIcon={<MenuIcon />}>
          Focus
        </Button>
      </Box>
    </Layout>
  )
}

export default Render

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
