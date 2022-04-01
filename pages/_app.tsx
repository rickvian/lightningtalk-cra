import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 to-blue-500">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
