import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { disableReactDevTools } from "../utils/disableReactDevTools";

if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
