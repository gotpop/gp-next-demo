import React from 'react'
import Head from 'next/head'
import { Container } from '@mui/material'
import NavBar from '@components/navbar'
import Footer from '@components/footer'

export default function Layout(props) {
  const { children } = props;

  return (
    <>
      <Head>
        <title>NextJS Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavBar {...props} />
        <main>
          <Container maxWidth="md">
            {children}
          </Container>
        </main>
        <Footer {...props} />
      </div>
    </>
  );
}