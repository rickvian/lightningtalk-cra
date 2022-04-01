import React from "react";

const Toggle = ({ isChecked, labelText, id, toggleCheck, ...props }) => {
  return (
    <label
      htmlFor={id}
      className="flex items-center cursor-pointer mb-2"
      {...props}
    >
      <div className="relative">
        <input
          type="checkbox"
          id={id}
          className="sr-only"
          checked={isChecked}
          onChange={toggleCheck}
        />
        <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
        <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
      </div>
      <div className="ml-3 text-gray-700 font-medium">{labelText}</div>
    </label>
  );
};

export default Toggle;
