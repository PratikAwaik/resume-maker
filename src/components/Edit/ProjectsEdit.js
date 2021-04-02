import React, { useEffect, useState } from "react";

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
    if (localStorage.getItem("projects")) {
      setProjects(JSON.parse(localStorage.getItem("projects")));
    }
  }, []);

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    const newProjects = [...projects];
    newProjects[id][name] = value;
    localStorage.setItem("projects", JSON.stringify(newProjects));
    setProjects(newProjects);
  };

  const addProject = (e) => {
    const newProject = {
      projectName: "",
      projectLink: "",
      technologies: "",
      description: "",
    };
    const newProjects = [...projects];
    newProjects.push(newProject);

    localStorage.setItem("projects", JSON.stringify(newProjects));
    setProjects(newProjects);
  };

  const deleteProject = (id, e) => {
    const newProjects = [...projects];
    newProjects.splice(id, 1);
    localStorage.setItem("projects", JSON.stringify(newProjects));
    setProjects(newProjects);
  };

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
                  onChange={(e) => handleChange(index, e)}
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
                  onChange={(e) => handleChange(index, e)}
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
                  onChange={(e) => handleChange(index, e)}
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
                  onChange={(e) => handleChange(index, e)}
                  value={project.description}></textarea>
              </div>

              <button
                type="button"
                className="add-project-btn"
                onClick={(e) => addProject(e)}>
                ADD
              </button>
              {projects.length > 1 ? (
                <button
                  type="button"
                  className="delete-project-btn"
                  onClick={(e) => deleteProject(index, e)}>
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
