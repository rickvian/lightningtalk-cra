import React, { useState } from "react";
import Button from "./components/Button";
import Counter from "./components/Counter";

const useStatePage = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    console.log("increment 1");
    setCount((prevCount) => prevCount + 1); // correct
  };

  const incrementByFive = () => {
    console.log("increment 5");
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <>
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        <Counter>{count}</Counter>
        <Button onClick={increment}>Counter add 1</Button>
        <Button onClick={incrementByFive}>Counter add 5</Button>
      </div>
    </>
  );
};

export default useStatePage;
