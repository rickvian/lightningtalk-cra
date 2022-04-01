import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const pages = [
  "useStatePageWrong",
  "useStatePageCorrect",
  "useEffectPage",
  "useMemoPage",
  "useCallbackPage",
  "useKeyPressPage",
  "useTogglePage",
];
const Home: NextPage = () => {
  return (
    <>
      <div className="grid grid-cols-6 divide-x text-white rounded-md">
        {pages.map((page) => (
          <div key={page}>
            <Link href={`/${page}`} passHref>
              <a className="bg-slate-500 opacity-90 px-4 py-3 flex justify-center">
                {page}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
