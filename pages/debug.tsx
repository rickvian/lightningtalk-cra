import { useState, useEffect } from "react";
import Button from "./components/Button";

const EvenLowerComponent = ({
  parentCounter,
  something,
  setChildCounterProps,
  childCounter,
}) => {
  const [initialLoad, setInitialLoad] = useState(true); // state 999

  return (
    <>
      i am child: {childCounter}
      <Button onClick={setChildCounterProps}> Set child only 655</Button>
    </>
  );
};

const LowerComponent = (props) => {
  const [count, setCount] = useState(0); // state 999
  // const randomValue = Math.random() // reassign
  const [childCounter, setChildCounter] = useState(count); // state
  const [initialLoad, setInitialLoad] = useState(true); // state

  useEffect(() => {
    if(initialLoad){
      setInitialLoad(false)
    }else{
      setChildCounter(999999)
    }

  }, [count])
  
  return (
    <div>
      <div>
        This is Upper component {count} 
        <br />
        <br />
      </div>
      <EvenLowerComponent
        something={{ key: "ValueOfSomethign" }}
        parentCounter={count}
        setChildCounterProps={() => {
          setChildCounter(655);
        }}
        childCounter={childCounter}
      />

      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Parent COunter
      </Button>
    </div>
  );
};

const Debug = (props) => {
  return <LowerComponent />;
};

export default Debug;
