import EditableField from "./components/EditableField";
import Field from "./components/Field";

export const getFieldView = (field, setField) => {
  if (field.isEditing) {
    return (
      <EditableField
        className={"field " + field.name}
        placeHolder={field.desc}
        icon={field.icon}
        value={field.content}
        onFieldChange={(e) => {
          setField({
            ...field,
            content: e.target.value,
          });
        }}
        onFieldSubmit={() => {
          setField({
            ...field,
            isEditing: false,
          });
        }}
      />
    );
  } else {
    return (
      <Field
        className={"field " + field.name}
        onFieldClick={() =>
          setField({
            ...field,
            isEditing: true,
          })
        }
      >
        {field.icon}
        {field.content ? field.content : field.desc}
      </Field>
    );
  }
};
