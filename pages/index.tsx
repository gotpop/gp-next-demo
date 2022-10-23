import type { NextPage } from 'next'
import { Box } from '@mui/material'
import BasicCard from '../components/card'
import Layout from '@layouts/layout'
import { pages } from '@content/pages'
import Intro from '@components/intro'
import Grid from '@mui/material/Unstable_Grid2'
import { introContent } from '@content/intro'

const Home: NextPage = () => {
  return (
    <Layout>
      <Box m={4}>
        <Intro content={introContent} />
        <Grid container spacing={2}>
          {pages.map(page => (
            <Grid key={page.name} xs={12} md={6}>
              <BasicCard page={page} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  )
}

export default Home
