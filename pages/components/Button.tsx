import React from "react";

const Button = ({ children, ...props }) => (
  <button
    className="p-3 hover:transition-colors text-white rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-sky-700"
    {...props}
  >
    {children}
  </button>
);

export default Button;
