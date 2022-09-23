import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import useExtendedTheme from "../hooks/useTheme";

function MyApp({ Component, pageProps }: AppProps) {
  const extendedTheme = useExtendedTheme();
  return (
    <ChakraProvider theme={extendedTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
