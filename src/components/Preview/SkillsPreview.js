import React, { useState, useEffect } from "react";

export default function SkillsPreview() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("skills")) {
      const newSkills = JSON.parse(localStorage.getItem("skills"));
      const parsedSkills = newSkills.split(",").map((skill) => skill.trim());
      setSkills(parsedSkills);
    }
  }, []);

  return (
    <div className="skills-preview">
      <h2>Skills</h2>
      <div className="skills">
        {skills.map((skill, index) => {
          return (
            <div key={index} className="skill-item-preview">
              {skill}
            </div>
          );
        })}
      </div>
    </div>
  );
}
