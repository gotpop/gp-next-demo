import type { NextPage } from 'next'
import { Box, Typography, CardContent } from '@mui/material'
import BasicCard from '../components/card'
import Card from '@mui/material/Card'
import Layout from '@layouts/layout'
import { pages } from '@content/pages'

const Home: NextPage = () => {
  return (
    <Layout>
      <Box m={4}>
        <Box mb={4}>
          <Card>
            <CardContent>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem'
                }}>
                NextJS Demo
              </Typography>
              <Typography component="p">
                A demonstation of various different use cases and approaches.
              </Typography>
            </CardContent>
          </Card>
        </Box>
        {pages.map(page => (
          <BasicCard key={page.name} page={page} />
        ))}
      </Box>
    </Layout>
  )
}

export default Home
