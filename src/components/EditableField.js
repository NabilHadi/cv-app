import React from "react";

const EditableField = (props) => {
  return (
    <div className={props.className}>
      {props.icon}
      <input
        className={props.className}
        autoFocus
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onFieldChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            props.onFieldSubmit(e);
          }
        }}
        onBlur={props.onFieldSubmit}
      />
    </div>
  );
};

export default EditableField;
