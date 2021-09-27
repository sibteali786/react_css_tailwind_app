import React from "react";

const PrimaryButton = (props) => {
  return (
    <div>
      <button className=" btn bg-color inline-block tracking-widest ">
        {props.children}
      </button>
    </div>
  );
};

export default PrimaryButton;
