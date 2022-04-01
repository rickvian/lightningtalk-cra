import React from "react";

import { useCallback, useState } from "react";

// Hook
// Parameter is the boolean, with default "false" value
const useToggle = (initialState = false) => {
  // Initialize the state
  const [state, setState] = useState(initialState);

  // Define and memorize toggler function in case we pass down the component,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback(() => setState((state) => !state), []);

  return [state, toggle];
};

const useTogglePage = () => {
  //usage
  const [isMuted, toggleIsMuted] = useToggle();

  return (
    <div
      onClick={() => {
        toggleIsMuted();
      }}
      style={{ fontSize: "40px" }}
    >
      {isMuted ? <div>🔇</div> : <div>🔊</div>}
    </div>
  );
};

export default useTogglePage;
