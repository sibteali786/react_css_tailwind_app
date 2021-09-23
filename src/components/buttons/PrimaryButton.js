import React from "react";

const PrimaryButton = (props) => {
  return (
    <div>
      <button className=" btn bg-blue inline-block">
        {props.children}
      </button>
    </div>
  );
};

export default PrimaryButton;
