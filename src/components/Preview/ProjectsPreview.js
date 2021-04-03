import React, { useEffect, useState } from "react";
import { setDataOnInitialMount } from "../../helpers";

export default function ProjectsPreview() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setDataOnInitialMount("projects", setProjects);
  }, []);

  return (
    <div className="projects-preview">
      <h2>Projects</h2>
      {projects.map((project, index) => {
        return (
          <div key={index} className="project">
            <div className="project-name">{project.projectName}</div>
            <div className="project-meta">
              <div className="project-link">{project.projectLink}</div>
              <div className="project-technologies">{project.technologies}</div>
            </div>
            <div className="project-description">{project.description}</div>
          </div>
        );
      })}
    </div>
  );
}
