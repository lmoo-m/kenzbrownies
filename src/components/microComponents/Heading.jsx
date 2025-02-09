import React from "react";

const Heading = ({ className, children, ...props }) => {
  return (
    <h1
      {...props}
      className={`lg:text-4xl text-2xl drop-shadow-lg font-bold ${className}`}
    >
      {children}
    </h1>
  );
};

export default Heading;
