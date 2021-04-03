import React, { useEffect, useState } from "react";
import { setDataOnInitialMount } from "../../helpers";

export default function EducationPreview() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    setDataOnInitialMount("education", setEducation);
  }, []);

  return (
    <div className="education-preview">
      <h2>Education</h2>
      {education.map((ed, index) => {
        return (
          <div key={index} className="education">
            <div className="education-degree">{ed.degree}</div>
            <div className="education-university">{ed.university}</div>
            <div className="education-duration">
              {ed.edFrom} {ed.edFrom ? "-" : null} {ed.edTo}
            </div>
          </div>
        );
      })}
    </div>
  );
}
