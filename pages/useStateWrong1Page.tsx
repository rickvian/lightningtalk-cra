import React, { useState } from "react";
import Button from "./components/Button";
import Counter from "./components/Counter";

// wrong example of managing state, when not using use state

// go to Profiler >  Highlight updates when components render

let count = 1; // defined count outside react component, it doesnt trigger re-render

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
        <div className="p-3">
          if Go to Home page, and come back, the value doesnt reset,
          <div>because its outside the react component</div>
        </div>
      </div>
    </>
  );
};

export default useStatePageWrong1;
