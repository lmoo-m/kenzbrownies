import React from "react";

const Button = ({ className, children, ...props }) => {
  return (
    <button
      className={`bg-yellow-600 font-semibold px-4 py-2 rounded shadow-md text-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
