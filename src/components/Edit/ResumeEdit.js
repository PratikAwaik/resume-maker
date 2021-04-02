import React from "react";
import PersonalInfoEdit from "./PersonalInfoEdit";
import SkillsEdit from "./SkillsEdit";
import WorkExpEdit from "./WorkExpEdit";
import ProjectsEdit from "./ProjectsEdit";
import EducationEdit from "./EducationEdit";

export default function ResumeEdit() {
  return (
    <div id="resume-edit">
      <PersonalInfoEdit />
      <SkillsEdit />
      <WorkExpEdit />
      <ProjectsEdit />
      <EducationEdit />
    </div>
  );
}
