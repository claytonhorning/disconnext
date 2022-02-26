import React from "react";
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Montserrat, sans-serif",
  },
});

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};
export default App;
