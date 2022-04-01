import React, { useRef } from "react";
import Button from "./components/Button";

const useRefPage = () => {
  const inputARef = useRef(null);
  const inputBRef = useRef(null);

  const focusOnA = () => {
    inputARef.current.focus();
  };

  const focusOnB = () => {
    inputBRef.current.focus();
  };

  const insertValueUncontrolled = () => {
    inputARef.current.value = "Assigned to A";
    inputBRef.current.value = "Assigned to B";
  };

  return (
    <div className="grid grid-rows-4 grid-col-2 grid-flow-col gap-4">
      <div>
        <input ref={inputARef} type="text" placeholder="i am A input" />
      </div>

      <div>
        <input ref={inputBRef} type="text" placeholder="i am B input" />
      </div>

      <div>
        <Button onClick={focusOnA}>Focus on A</Button>
        <Button onClick={focusOnB}>Focus on B</Button>
        <Button onClick={insertValueUncontrolled}>Set text into forms</Button>
      </div>
    </div>
  );
};

export default useRefPage;

// caveats: in NEXT js if you run dev mode with React.StrictMode on , use effect may run twice
// returned func from useEffect will be called after component unmount

// this method called uncontrolled form, we can have "controlled" form which its input value binded into state
