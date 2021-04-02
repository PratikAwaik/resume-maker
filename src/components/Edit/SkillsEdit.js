import React, { useState, useEffect } from "react";

export default function SkillsEdit() {
  const [skills, setSkills] = useState("");

  useEffect(() => {
    if (localStorage.getItem("skills")) {
      setSkills(JSON.parse(localStorage.getItem("skills")));
    }
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    localStorage.setItem("skills", JSON.stringify(value));
    setSkills(value);
  };

  return (
    <div className="skills-edit">
      <h2>Skills</h2>
      <input
        type="text"
        placeholder="HTML, CSS, JavaScript, ReactJS, Jest"
        value={skills}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
