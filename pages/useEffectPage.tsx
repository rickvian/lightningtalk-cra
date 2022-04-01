import React, { useEffect, useState } from "react";
import Button from "./components/Button";

const useEffectPage = () => {
  const [countJokes, setCountJokes] = useState(0);
  const [countSlap, setCountSlap] = useState(0);

  //? when mount and unmounted
  // useEffect(() => {
  //   console.log("Welcome to the Stand Up Comedy");
  //   return () => {
  //     alert("I'm done with slapping");
  //   }; // called when unmounted
  // }, []); // empty array = called onLoad only

  //? this hook is reacting to number of jokes:
  // use effect will always run 1 time on load, even with dependency
  // useEffect(() => {
  //   setCountSlap((prevSlap) => prevSlap + 1); // slap it!
  // }, [countJokes]);

  //? wrong, infinite loop
  // useEffect(() => {
  //   setCountSlap((prevSlap) => prevSlap + 1);
  // }, [countSlap]);

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

// caveats: in NEXT js if you run dev mode with React.StrictMode on , use effect may run twice
// returned func from useEffect will be called after component unmount
