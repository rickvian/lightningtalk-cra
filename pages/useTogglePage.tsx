import React, { useEffect } from "react";

import { useCallback, useState } from "react";
import Toggle from "./components/Toggle";

// Hook
// Parameter is the boolean, with default "false" value
const useToggle = (initialState = false): [boolean, () => void] => {
  // Initialize the state
  const [state, setState] = useState(initialState);

  // Define and memorize toggler function in case we pass down the component,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback(() => setState((state) => !state), []);

  return [state, toggle];
};

// custom hooks inside custom hooks
const useNoUnrealisticExpectation = () => {
  const [isGood, toggleIsGood] = useToggle();
  const [isCheap, toggleIsCheap] = useToggle();
  const [isFast, toggleIsFast] = useToggle();

  const isHalu = isGood && isCheap && isFast; // derived state

  useEffect(() => {
    if (isHalu) {
      switch (Math.floor(Math.random() * 3) + 1) {
        case 1:
          toggleIsGood();
          break;
        case 2:
          toggleIsCheap();
          break;
        case 3:
          toggleIsFast();
          break;
        default:
          toggleIsGood();
      }
    }
  }, [isGood, isCheap, isFast]);

  return { isGood, isCheap, isFast, toggleIsGood, toggleIsCheap, toggleIsFast };
};

const useTogglePage = () => {
  const [isMuted, toggleIsMuted] = useToggle(); // returns array, can

  const { isGood, isCheap, isFast, toggleIsGood, toggleIsCheap, toggleIsFast } =
    useNoUnrealisticExpectation(); // returns object, can oso

  return (
    <div>
      Basic Toggle:
      <div
        onClick={() => {
          toggleIsMuted();
        }}
        style={{ fontSize: "40px", cursor: "pointer" }}
      >
        {isMuted ? <div>🔇</div> : <div>🔊</div>}
      </div>
      <div>{'"Advanced" toggle (maybe)'}</div>
      <Toggle
        labelText="Good"
        id="good"
        isChecked={isGood}
        toggleCheck={toggleIsGood}
      />
      <Toggle
        labelText="Cheap"
        id="cheap"
        isChecked={isCheap}
        toggleCheck={toggleIsCheap}
      />
      <Toggle
        labelText="Fast"
        id="fast"
        isChecked={isFast}
        toggleCheck={toggleIsFast}
      />
    </div>
  );
};

export default useTogglePage;
