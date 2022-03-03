import React from "react";
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import Head from "next/head";
import WithSubnavigation from "../components/Navbar";
import Footer from "../components/Footer";

const theme = extendTheme({
  fonts: {
    heading: "Montserrat, sans-serif",
  },
});

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Head>
        <title>Disconnext</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <WithSubnavigation />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
};
export default App;
