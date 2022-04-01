import React, { useState } from "react";
import Button from "./components/Button";
import Counter from "./components/Counter";

// wrong example, when not using use state

// go to Profiler >  Highlight updates when components render

let count = 1; // defined count outside react component

setTimeout(() => {
  alert(`current count value: ${count}`);
}, 2000);

//! React component:
const useStatePageWrong1 = () => {
  const increment = () => {
    console.log("increment() called");
    count++;
  };

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
