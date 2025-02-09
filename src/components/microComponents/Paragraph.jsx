import React from "react";

const Paragraph = ({ className, children, ...props }) => {
  return (
    <p className={`${className}`} {...props}>
      {children}
    </p>
  );
};

export default Paragraph;
