import type { Next } from "next";

import Link from "next/link";

const pagesBasic1 = ["useStateWrong1", "useStateWrong2", "useStateCorrect"];
const pagesBasic2 = ["useEffect", "useRef"];
const pagesMemo = ["useMemo"];

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
        </div>
      </div>
    </>
  );
};

export default Home;
