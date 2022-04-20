import React from "react";

const Field = (props) => {
  return (
    <div className={props.className} onClick={props.onFieldClick}>
      {props.children}
    </div>
  );
};

export default Field;
