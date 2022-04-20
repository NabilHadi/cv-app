import React from "react";

const Field = (props) => {
  return (
    <div className={props.className} onClick={props.onFieldClick}>
      {props.icon}
      {props.textContent === "" ? props.placeHolder : props.textContent}
    </div>
  );
};

export default Field;
