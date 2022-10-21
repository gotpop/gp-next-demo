import type { NextPage } from 'next'
import Head from 'next/head'
import NextLink from 'next/link'
import { Paper, Box, Typography, Link, Grid, Container } from '@mui/material'
import NavBar from '../components/menu'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NextJS Demo</title>
      </Head>
      <NavBar />
      <main>
        <Container maxWidth="md">
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
        </Container>
      </main>
    </div>
  )
}

export default Home
