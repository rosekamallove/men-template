import { Box, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MEN</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box className="w-screen h-screen flex flex-col justify-center items-center">
        <Heading>Welcom to MEN</Heading>
        <span className="my-4" />
        <Text>Masculine MEN</Text>
      </Box>
    </>
  );
};

export default Home;
