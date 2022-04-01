import React, { useState } from "react";
import Button from "./components/Button";
import Counter from "./components/Counter";

//wrong example not using use state

let count = 1; // defined count outside react component

setTimeout(() => {
  alert(`current count value: ${count}`);
}, 2000);

// React component:
const useStatePageWrong1 = () => {
  const increment = () => {
    console.log("increment() called");
    count++;
  };

  console.log("i will log when re-renders");

  return (
    <>
      <div className="grid grid-rows-4 grid-flow-col gap-4 text-center">
        <Counter>{count}</Counter>
        <div className="p-3">try click me 5 times:</div>
        <Button onClick={increment}>Counter add 1</Button>
        <div className="p-3">Go to Home page, and come back</div>
      </div>
    </>
  );
};

export default useStatePageWrong1;
