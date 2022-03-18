import React from "react";

const Button = ({ children, addClassName, variant }) => {
  const variants = {
    "outlined-yellow": "border border-yellow-500 text-yellow-500",
    yellow: "bg-yellow-500 text-black",
  };

  const pickedVariant = variants[variant];

  return (
    <a
      className={`border border-yellow-500 text-yellow-500 py-3 px-10 rounded-full text-lg font-semibold inline-block ${pickedVariant} ${addClassName}`}
    >
      {children}
    </a>
  );
};

export default Button;
