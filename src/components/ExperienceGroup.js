import { useField } from "../hooks";

export default function ExperienceGroup({
  id,
  companyName,
  postionTitle,
  startDate,
  endDate,
  mainTasks,
}) {
  return (
    <div id={id} className="group">
      {useField(companyName)}
      {useField(postionTitle)}
      {useField(startDate)}
      {useField(endDate)}
      {useField(mainTasks)}
    </div>
  );
}
