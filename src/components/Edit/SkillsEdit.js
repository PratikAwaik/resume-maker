import React, { useState, useEffect } from "react";
import { setDataOnInitialMount } from "../../helpers";

export default function SkillsEdit() {
  const [skills, setSkills] = useState("");

  useEffect(() => {
    setDataOnInitialMount("skills", setSkills);
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
