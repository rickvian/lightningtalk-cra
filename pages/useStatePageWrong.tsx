import React, { useState } from "react";
import Button from "./components/Button";
import Counter from "./components/Counter";

let count = 1;

setTimeout(() => {
  console.log("count:", count);
}, 3000);

const useStatePageWrong = () => {
  // const [count, setCount] = useState(0);

  const increment = () => {
    console.log("increment 1");
    count++;

    // setCounter(count + 1); // also wrong
  };

  // const incrementByFive = () => {
  //   console.log("increment 5");
  //   for (let i = 0; i < 5; i++) {
  //     setCount(count + 1);
  //   }
  // };

  console.log("i will log when re-renders");
  return (
    <>
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        <Counter>{count}</Counter>

        <Button onClick={increment}>Counter add 1</Button>
        {/* <Button onClick={incrementByFive}>Counter add 5</Button> */}
      </div>
    </>
  );
};

export default useStatePageWrong;
