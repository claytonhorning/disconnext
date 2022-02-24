import React from "react";
import { ChakraProvider, theme, CSSReset } from "@chakra-ui/react";
const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};
export default App;