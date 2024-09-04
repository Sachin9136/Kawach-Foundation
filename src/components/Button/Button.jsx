import React from "react";

function Button({
  children,
  type = "button",
  className = "bg-orange-300 hover:bg-orange-200 shadow text-lg rounded px-5 py-2 my-2 text-white",
  icon = "",
  ...props 
}) {
  return (
    <button
      className={`${className}`}
      {...props}
    >
      <i className={`bi bi-${icon}`}></i> {children}
    </button>
  );
}

export default Button;
