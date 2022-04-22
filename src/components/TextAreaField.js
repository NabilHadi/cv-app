import { useEffect, useRef } from "react";

const TextAreaField = ({
  icon,
  value,
  className,
  placeholder,
  onFieldChange,
  onFieldSubmit,
  changeInputHeight,
}) => {
  const inputEl = useRef(null);

  useEffect(() => {
    changeInputHeight(inputEl.current);
  }, []);

  return (
    <div className={className}>
      {icon}
      <textarea
        ref={inputEl}
        className={className}
        style={{
          resize: "none",
        }}
        autoFocus
        value={value}
        name="text"
        placeholder={placeholder}
        onChange={onFieldChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onFieldSubmit(e);
          }
        }}
        onBlur={onFieldSubmit}
      ></textarea>
    </div>
  );
};

export default TextAreaField;
