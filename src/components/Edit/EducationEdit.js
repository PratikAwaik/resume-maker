import React, { useEffect, useState } from "react";
import {
  setDataOnInitialMount,
  setDataOnChange,
  addData,
  deleteData,
} from "../../helpers";

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
    setDataOnInitialMount("education", setEducation);
  }, []);

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
                  onChange={(e) =>
                    setDataOnChange(
                      index,
                      e,
                      education,
                      setEducation,
                      "education",
                    )
                  }
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
                  onChange={(e) =>
                    setDataOnChange(
                      index,
                      e,
                      education,
                      setEducation,
                      "education",
                    )
                  }
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
                  onChange={(e) =>
                    setDataOnChange(
                      index,
                      e,
                      education,
                      setEducation,
                      "education",
                    )
                  }
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
                  onChange={(e) =>
                    setDataOnChange(
                      index,
                      e,
                      education,
                      setEducation,
                      "education",
                    )
                  }
                  value={ed.edTo}
                />
              </div>

              <button
                type="button"
                className="add-education-btn"
                onClick={(e) =>
                  addData(
                    { degree: "", university: "", edFrom: "", edTo: "" },
                    education,
                    setEducation,
                    "education",
                  )
                }>
                ADD
              </button>
              {education.length > 1 ? (
                <button
                  type="button"
                  className="delete-education-btn"
                  onClick={(e) =>
                    deleteData(index, education, setEducation, "education")
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
