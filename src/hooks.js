import { useState, useEffect } from "react";

import EditableField from "./components/EditableField";
import Field from "./components/Field";

export const useField = ({
  name,
  content: _content,
  desc,
  isEditing: _isEditing,
  icon,
  EditingFieldType = EditableField,
}) => {
  const [fieldView, setFieldView] = useState(null);
  const [isEditing, setIsEditing] = useState(_isEditing);
  const [content, setContent] = useState(_content);

  useEffect(() => {
    function handleFieldClick() {
      setIsEditing(true);
    }

    function handleFieldChange(e) {
      setContent(e.target.value);
      changeInputHeight(e.target);
    }

    function handleFieldSubmit(e) {
      setIsEditing(false);
    }

    function changeInputHeight(element) {
      element.style.height = "";
      element.style.height = element.scrollHeight + "px";
    }

    if (isEditing) {
      setFieldView(
        <EditingFieldType
          className={"field " + name}
          placeHolder={desc}
          icon={icon}
          value={content}
          onFieldChange={handleFieldChange}
          onFieldSubmit={handleFieldSubmit}
          changeInputHeight={changeInputHeight}
        />
      );
    } else {
      setFieldView(
        <Field className={"field " + name} onFieldClick={handleFieldClick}>
          {icon}
          {content ? content : desc}
        </Field>
      );
    }
  }, [name, content, desc, isEditing, icon]);

  return fieldView;
};
