import React, { useEffect } from "react";

const useEffectPage = () => {
  useEffect(() => {
    return () => {
      console.log("I will be logged when component unmounted");
    };
  }, []);

  return <div>useEffect</div>;
};

export default useEffectPage;
