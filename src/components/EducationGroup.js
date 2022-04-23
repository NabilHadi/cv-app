import { useField } from "../hooks";

export default function EducationGroup({
  id,
  schoolName,
  titleOfStudy,
  dateOfStudy,
}) {
  return (
    <div id={id} className="EducationGroup">
      {useField(schoolName)}
      {useField(titleOfStudy)}
      {useField(dateOfStudy)}
    </div>
  );
}
