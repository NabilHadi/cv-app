import { useState, useEffect } from "react";

import EditableField from "./components/EditableField";
import Field from "./components/Field";
import TextAreaField from "./components/TextAreaField";

export const useField = (defaultFieldData) => {
  const [fieldData, setFieldData] = useState(defaultFieldData);
  const [fieldView, setFieldView] = useState(null);

  useEffect(() => {
    function handleFieldClick() {
      setFieldData({
        ...fieldData,
        isEditing: true,
      });
    }

    function handleFieldChange(e) {
      setFieldData({
        ...fieldData,
        content: e.target.value,
      });
    }

    function handleFieldSubmit(e) {
      setFieldData({
        ...fieldData,
        isEditing: false,
      });
    }

    if (fieldData.isEditing) {
      setFieldView(
        <EditableField
          className={"field " + fieldData.name}
          placeHolder={fieldData.desc}
          icon={fieldData.icon}
          value={fieldData.content}
          onFieldChange={handleFieldChange}
          onFieldSubmit={handleFieldSubmit}
        />
      );
    } else {
      setFieldView(
        <Field
          className={"field " + fieldData.name}
          onFieldClick={handleFieldClick}
        >
          {fieldData.icon}
          {fieldData.content ? fieldData.content : fieldData.desc}
        </Field>
      );
    }
  }, [fieldData]);

  return fieldView;
};

export const useTextAreaField = (defaultFieldData) => {
  const [fieldData, setFieldData] = useState(defaultFieldData);
  const [fieldView, setFieldView] = useState(null);

  function changeInputHeight(inputEl) {
    inputEl.style.height = "";
    inputEl.style.height = inputEl.scrollHeight + "px";
  }

  useEffect(() => {
    function handleFieldClick() {
      setFieldData({
        ...fieldData,
        isEditing: true,
      });
    }

    function handleFieldChange(e) {
      changeInputHeight(e.target);
      setFieldData({
        ...fieldData,
        content: e.target.value,
      });
    }

    function handleFieldSubmit(e) {
      setFieldData({
        ...fieldData,
        isEditing: false,
      });
    }

    if (fieldData.isEditing) {
      setFieldView(
        <TextAreaField
          className={"field " + fieldData.name}
          placeHolder={fieldData.desc}
          icon={fieldData.icon}
          value={fieldData.content}
          onFieldChange={handleFieldChange}
          onFieldSubmit={handleFieldSubmit}
          changeInputHeight={changeInputHeight}
        />
      );
    } else {
      setFieldView(
        <Field
          className={"field " + fieldData.name}
          onFieldClick={handleFieldClick}
        >
          {fieldData.icon}
          {fieldData.content ? fieldData.content : fieldData.desc}
        </Field>
      );
    }
  }, [fieldData]);

  return fieldView;
};
