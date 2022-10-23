import type { NextPage } from 'next'
import { Box } from '@mui/material'
import BasicCard from '../components/card'
import Layout from '@layouts/layout'
import { pages } from '@content/pages'
import Intro from '@components/intro'
import { introContent } from '@content/intro'
introContent

const Home: NextPage = () => {
  return (
    <Layout>
      <Box m={4}>
        <Box mb={4}>
          <Intro content={introContent} />
        </Box>
        {pages.map(page => (
          <BasicCard key={page.name} page={page} />
        ))}
      </Box>
    </Layout>
  )
}

export default Home
