import React from "react";
import PersonalInfoPreview from "./PersonalInfoPreview";
import SkillsPreview from "./SkillsPreview";
import WorkExpPreview from "./WorkExpPreview";
import ProjectsPreview from "./ProjectsPreview";
import EducationPreview from "./EducationPreview";
import Download from "./Download";

export default function ResumePreview() {
  return (
    <div id="resume-preview">
      <PersonalInfoPreview />
      <SkillsPreview />
      <WorkExpPreview />
      <ProjectsPreview />
      <EducationPreview />
      <Download />
    </div>
  );
}
