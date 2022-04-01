import type { Next } from "next";

import Link from "next/link";

<<<<<<< HEAD
const pagesBasic1 = ["useStatePageWrong1", "useStatePageWrong2"];
const pagesBasic2 = ["useStatePageCorrect", "useEffectPage"];
const pagesMemo = ["useMemoPage", "useCallbackPage"];
=======
const pagesBasic1 = ["useStateWrong1", "useStateWrong2", "useStateCorrect"];
const pagesBasic2 = ["useEffect", "useRef"];
const pagesMemo = ["useMemo"];
>>>>>>> 49499c6dd46544d02f4b73ad2e9b9b4914d126ce

const pagesCustom = ["useKeyPress", "useToggle"];

const List = ({ pages }) => (
  <>
    {pages.map((page) => (
      <div key={page}>
        <Link href={`/${page}Page`} passHref>
          <a className="bg-slate-500 opacity-90 px-4 py-3 flex justify-center">
            {page}
          </a>
        </Link>
      </div>
    ))}
  </>
);

const Home: Next = () => {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-white mb-3">Basic Hooks</h2>
<<<<<<< HEAD
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
=======
        <div className="grid grid-cols-4 divide-x text-white rounded-md mb-3">
          <List pages={pagesBasic1} />
        </div>
        <div className="grid grid-cols-4 divide-x text-white rounded-md mb-3">
          <List pages={pagesBasic2} />
        </div>

        <div className="grid grid-cols-4 divide-x text-white rounded-md">
          <List pages={pagesMemo} />
        </div>

        <h2 className="text-white mb-3">Custom Hooks</h2>
        <div className="grid grid-cols-4 divide-x text-white rounded-md">
          <List pages={pagesCustom} />
>>>>>>> 49499c6dd46544d02f4b73ad2e9b9b4914d126ce
        </div>
      </div>
    </>
  );
};

export default Home;
