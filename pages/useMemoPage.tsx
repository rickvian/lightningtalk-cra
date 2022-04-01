import React, { useEffect, useMemo, useState } from "react";
import Button from "./components/Button";

// caveats: in NEXT js if you run dev mode with React.StrictMode on , use effect may run twice
// returned func from useEffect will be called after component unmount

const useMemoPage = () => {
  const [countJokes, setCountJokes] = useState(0);
  const [countLightBulb, setCountLightBulB] = useState(0);

  const incrementLightBulb = () => {
    setCountLightBulB((prev) => prev + 1);
  };

  const incrementJokes = () => {
    setCountJokes((prev) => prev + 1);
  };

  const heavyComputingCountSlap = () => {
    // function rely on `props`, or other `hooks` value, so you can't put this outside component
    console.log("Heavy computation");
    let count = countJokes;
    for (let i = 0; i < 10000; i++) {
      count++;
    }
    return count;
  };

  // without memo
  const countSlap = heavyComputingCountSlap();

  // with memo
  // const countSlap = useMemo(() => heavyComputingCountSlap(), [countJokes]); //only re-run when countJokes changed

  return (
    <div className="text-center">
      <div>useMemo</div>
      <div className="text-center pb-4">
        <Button onClick={incrementJokes}>Add jokes</Button>
        <div>Total Jokes 🤡: {countJokes}</div>
        <div>times you got slap 👏: {countSlap}</div>
      </div>

      {/* Irrelevant with jokes and slap, but cause re-render */}
      <div className="text-center">
        <Button onClick={incrementLightBulb}>Add Light Bulb</Button>
        <div>Total Lightbulb 💡: {countLightBulb}</div>
      </div>
    </div>
  );
};

export default useMemoPage;
