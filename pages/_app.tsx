import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 to-blue-500">
      <div className="fixed top-3 left-3">
        <Link href="/">Home</Link>
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
