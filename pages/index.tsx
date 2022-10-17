import type { NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";
import { Paper, Box, Typography, Link, Grid } from "@mui/material";
import NavBar from "../components/menu";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NextJS Demo</title>
      </Head>
      <main>
        <NavBar />
      </main>
    </div>
  );
};

export default Home;
