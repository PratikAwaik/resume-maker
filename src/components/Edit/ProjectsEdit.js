import React, { useEffect, useState } from "react";
import {
  setDataOnInitialMount,
  setDataOnChange,
  addData,
  deleteData,
} from "../../helpers";

export default function ProjectsEdit() {
  const [projects, setProjects] = useState([
    {
      projectName: "",
      projectLink: "",
      technologies: "",
      description: "",
    },
  ]);

  useEffect(() => {
    setDataOnInitialMount("projects", setProjects);
  }, []);

  return (
    <div className="projects-edit">
      <h2>Projects</h2>
      <div className="projects-forms">
        {projects.map((project, index) => {
          return (
            <form
              key={index}
              className="project-form-edit"
              onSubmit={(e) => e.preventDefault()}>
              <div className="project-name-container">
                <label htmlFor="project-name">Name of the Project</label>
                <br />
                <input
                  name="projectName"
                  id="project-name"
                  type="text"
                  placeholder="Resume Maker"
                  onChange={(e) =>
                    setDataOnChange(index, e, projects, setProjects, "projects")
                  }
                  value={project.projectName}
                />
              </div>

              <div className="project-link-container">
                <label htmlFor="project-link">Link for the project</label>
                <input
                  name="projectLink"
                  id="project-link"
                  type="text"
                  placeholder="https://myProfile.github.io/myProject"
                  onChange={(e) =>
                    setDataOnChange(index, e, projects, setProjects, "projects")
                  }
                  value={project.projectLink}
                />
              </div>

              <div className="project-technology-container">
                <label htmlFor="project-technology">Technologies Used</label>
                <input
                  name="technologies"
                  id="project-technology"
                  type="text"
                  placeholder="HTML, CSS, ReactJS"
                  onChange={(e) =>
                    setDataOnChange(index, e, projects, setProjects, "projects")
                  }
                  value={project.technologies}
                />
              </div>

              <div className="project-description-container">
                <label htmlFor="project-description">
                  Description of your project
                </label>
                <textarea
                  name="description"
                  id="project-description"
                  placeholder="Your Project's Description..."
                  onChange={(e) =>
                    setDataOnChange(index, e, projects, setProjects, "projects")
                  }
                  value={project.description}></textarea>
              </div>

              <button
                type="button"
                className="add-project-btn"
                onClick={(e) =>
                  addData(
                    {
                      projectName: "",
                      projectLink: "",
                      technologies: "",
                      description: "",
                    },
                    projects,
                    setProjects,
                    "projects",
                  )
                }>
                ADD
              </button>
              {projects.length > 1 ? (
                <button
                  type="button"
                  className="delete-project-btn"
                  onClick={(e) =>
                    deleteData(index, projects, setProjects, "projects")
                  }>
                  DELETE
                </button>
              ) : null}
            </form>
          );
        })}
      </div>
    </div>
  );
}
