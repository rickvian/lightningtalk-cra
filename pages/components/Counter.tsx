import React from "react";

const Counter = ({ children }) => {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-4xl">{children}</h1>
    </div>
  );
};

export default Counter;
