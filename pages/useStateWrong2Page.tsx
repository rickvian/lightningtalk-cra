import React, { useState } from "react";
import Button from "./components/Button";
import Counter from "./components/Counter";

// now use setter, but be careful!

const useStatePageWrong2Page = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    console.log("increment() called");
    setCount(count + 1); // careful, can be wrong
  };

  const incrementByFive = () => {
    console.log("incrementByFive called()");
    for (let i = 0; i < 5; i++) {
      setCount(count + 1); // this will not work as expeced due to React `batching` set states (for performance reason)
    }
  };

  return (
    <>
      <div className="grid grid-rows-9 grid-cols-1 gap-4 text-center">
        <Counter>{count}</Counter>

        <Button onClick={increment}>Counter add 1</Button>
        <Button onClick={incrementByFive}>Counter add 5</Button>
        <div className="p-3 text-center">Go to Home page, and come back</div>
      </div>
    </>
  );
};

export default useStatePageWrong2Page;
