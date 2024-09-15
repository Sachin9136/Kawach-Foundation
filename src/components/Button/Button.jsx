import React from "react";

function Button({
  children,
  
  type = "button", 
  // className = "bg-orange-300 hover:bg-orange-200 shadow text-lg rounded px-5 py-2 my-2 text-white",
  className="flex items-center rounded-sm py-2 px-3 text-md font-semibold hover:bg-amber-200",
  icon = "",
  ...props 
}) {
  return (
    <button
    style={{backgroundColor: "rgba(255, 237, 5, 1)"}}
      className={`${className}`}
      {...props}
    >
      <i className={`bi bi-${icon}`}></i> {children}
    </button>
  );
}

export default Button;
