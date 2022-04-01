import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const pagesBasic1 = ["useStatePageWrong1", "useStatePageWrong2"];
const pagesBasic2 = ["useStatePageCorrect", "useEffectPage"];
const pagesMemo = ["useMemoPage", "useCallbackPage"];

const pagesCustom = ["useKeyPressPage", "useTogglePage"];

const PagesList = ({ pages }) => (
  <>
    {pages.map((page) => (
      <div key={page}>
        <Link href={`/${page}`} passHref>
          <a className="bg-slate-500 opacity-90 px-4 py-3 flex justify-center">
            {page}
          </a>
        </Link>
      </div>
    ))}
  </>
);

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-white mb-3">Basic Hooks</h2>
        <div className="grid grid-cols-2 divide-x text-white rounded-md mb-3">
          <PagesList pages={pagesBasic1} />
        </div>
        <div className="grid grid-cols-2 divide-x text-white rounded-md mb-3">
          <PagesList pages={pagesBasic2} />
        </div>

        <h2 className="text-white mb-3">Custom Hooks</h2>
        <div className="grid grid-cols-2 divide-x text-white rounded-md">
          <PagesList pages={pagesMemo} />
        </div>

        <h2 className="text-white mb-3">Custom Hooks</h2>
        <div className="grid grid-cols-2 divide-x text-white rounded-md">
          <PagesList pages={pagesCustom} />
        </div>
      </div>
    </>
  );
};

export default Home;
