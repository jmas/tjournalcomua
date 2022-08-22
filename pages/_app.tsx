import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { AuthProvider } from "../context/Auth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Component {...pageProps} />
      </MantineProvider>
    </AuthProvider>
  );
}

export default MyApp;
