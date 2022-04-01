import React, { useEffect, useState } from "react";
import Button from "./components/Button";

// caveats: in NEXT js if you run dev mode with React.StrictMode on , use effect may run twice
// returned func from useEffect will be called after component unmount

const useEffectPage = () => {
  const [countJokes, setCountJokes] = useState(0);
  const [countSlap, setCountSlap] = useState(0);

  // useEffect(() => {
  //   console.log("WELCOME");
  //   return () => {
  //     alert("I'm done with slapping");
  //   }; // called when unmounted
  // }, []); // empty array = called onLoad only

  // use effect will always run 1 time on load, even with dependency
  useEffect(() => {
    setCountSlap((prevSlap) => prevSlap + 1); // slap it!
  }, [countJokes]); // this hook is reacting to number of jokes

  // useEffect(() => {
  //   setCountSlap((prevSlap) => prevSlap + 1);
  // }, [countSlap]); // wrong, or circular dependency, infinite loop

  return (
    <div className="text-center">
      <div>useEffect</div>
      <Button
        onClick={() => {
          setCountJokes((prev) => prev + 1);
        }}
      >
        Make Jokes
      </Button>
      <div>number of Jokes 🤡: {countJokes}</div>
      <div>times you got slap 👏: {countSlap}</div>
    </div>
  );
};

export default useEffectPage;
