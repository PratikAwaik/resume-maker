import React, { useEffect, useState } from "react";

export default function EducationEdit() {
  const [education, setEducation] = useState([
    {
      degree: "",
      university: "",
      edFrom: "",
      edTo: "",
    },
  ]);

  useEffect(() => {
    if (localStorage.getItem("education")) {
      setEducation(JSON.parse(localStorage.getItem("education")));
    }
  }, []);

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    const newEducation = [...education];
    newEducation[id][name] = value;
    localStorage.setItem("education", JSON.stringify(newEducation));
    setEducation(newEducation);
  };

  const addEducation = (e) => {
    const newEd = {
      degree: "",
      university: "",
      edFrom: "",
      edTo: "",
    };

    const newEducation = [...education];
    newEducation.push(newEd);
    localStorage.setItem("education", JSON.stringify(newEducation));
    setEducation(newEducation);
  };

  const deleteEducation = (id, e) => {
    const newEducation = [...education];
    newEducation.splice(id, 1);
    localStorage.setItem("education", JSON.stringify(newEducation));
    setEducation(newEducation);
  };

  return (
    <div className="education-edit">
      <h2>Education</h2>
      <div className="education-forms">
        {education.map((ed, index) => {
          return (
            <form
              key={index}
              className="education-form-edit"
              onSubmit={(e) => e.preventDefault()}>
              <div className="education-degree-container">
                <label htmlFor="education-degree">Degree</label>
                <br />
                <input
                  name="degree"
                  id="education-degree"
                  type="text"
                  placeholder="B.Tech Engineering"
                  onChange={(e) => handleChange(index, e)}
                  value={ed.degree}
                />
              </div>

              <div className="education-university-container">
                <label htmlFor="education-university">University</label>
                <br />
                <input
                  name="university"
                  id="education-university"
                  type="text"
                  placeholder="Technical University"
                  onChange={(e) => handleChange(index, e)}
                  value={ed.university}
                />
              </div>

              <div className="education-from-container">
                <label htmlFor="education-from">From</label>
                <br />
                <input
                  name="edFrom"
                  id="education-from"
                  type="text"
                  placeholder="10/2018"
                  onChange={(e) => handleChange(index, e)}
                  value={ed.edFrom}
                />
              </div>

              <div className="education-to-container">
                <label htmlFor="education-to">To</label>
                <br />
                <input
                  name="edTo"
                  id="education-to"
                  type="text"
                  placeholder="10/2022"
                  onChange={(e) => handleChange(index, e)}
                  value={ed.edTo}
                />
              </div>

              <button
                type="button"
                className="add-education-btn"
                onClick={(e) => addEducation(e)}>
                ADD
              </button>
              {education.length > 1 ? (
                <button
                  type="button"
                  className="delete-education-btn"
                  onClick={(e) => deleteEducation(index, e)}>
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
