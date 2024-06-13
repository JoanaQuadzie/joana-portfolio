import React from "react";

export default function Button(props) {
  const { children, className } = props;

  return (
    <button
      className={`font-bold w-fit border rounded-full border-black p-4 ${className}`}
    >
      {children}
    </button>
  );
}
