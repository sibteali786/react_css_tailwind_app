import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600 inline-block">
        {props.children}
      </button>
    </div>
  );
};

export default Button;
