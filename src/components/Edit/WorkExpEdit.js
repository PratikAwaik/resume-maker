import React, { useState, useEffect } from "react";
import {
  setDataOnInitialMount,
  setDataOnChange,
  addData,
  deleteData,
} from "../../helpers";

export default function WorkExpEdit() {
  const [workExps, setWorkExps] = useState([
    {
      workPosition: "",
      workCompany: "",
      workDurationFrom: "",
      workDurationTo: "",
      workCity: "",
      workAccomplishments: "",
    },
  ]);

  useEffect(() => {
    setDataOnInitialMount("workExps", setWorkExps);
  }, []);

  return (
    <div className="work-exp-edit">
      <h2>Work Experience</h2>
      <div className="work-exp-forms">
        {workExps.map((workExp, index) => {
          return (
            <form
              key={index}
              className="work-exp-form-edit"
              onSubmit={(e) => e.preventDefault()}>
              <div className="work-position-container-edit">
                <label htmlFor="work-position">Work Position</label>
                <br />
                <input
                  name="workPosition"
                  id="work-position"
                  type="text"
                  placeholder="Software Developer"
                  onChange={(e) =>
                    setDataOnChange(index, e, workExps, setWorkExps, "workExps")
                  }
                  value={workExp.workPosition}
                />
              </div>

              <div className="work-company-container-edit">
                <label htmlFor="work-company">Work Company</label>
                <br />
                <input
                  name="workCompany"
                  id="work-company"
                  type="text"
                  placeholder="Google"
                  onChange={(e) =>
                    setDataOnChange(index, e, workExps, setWorkExps, "workExps")
                  }
                  value={workExp.workCompany}
                />
              </div>

              <div className="work-duration-from-container">
                <label htmlFor="work-duration-from">From</label>
                <br />
                <input
                  name="workDurationFrom"
                  id="work-duration-from"
                  type="text"
                  placeholder="10/2018"
                  onChange={(e) =>
                    setDataOnChange(index, e, workExps, setWorkExps, "workExps")
                  }
                  value={workExp.workDurationFrom}
                />
              </div>

              <div className="work-duration-to-container">
                <label htmlFor="work-duration-to">To</label>
                <br />
                <input
                  name="workDurationTo"
                  id="work-duration-to"
                  type="text"
                  placeholder="Present"
                  onChange={(e) =>
                    setDataOnChange(index, e, workExps, setWorkExps, "workExps")
                  }
                  value={workExp.workDurationTo}
                />
              </div>

              <div className="work-city-container-edit">
                <label htmlFor="work-city">Work City</label>
                <br />
                <input
                  name="workCity"
                  id="work-city"
                  type="text"
                  placeholder="Florida, USA"
                  onChange={(e) =>
                    setDataOnChange(index, e, workExps, setWorkExps, "workExps")
                  }
                  value={workExp.workCity}
                />
              </div>

              <div className="work-accomplishments-container">
                <label htmlFor="work-accomplishments">Accomplishments</label>
                <br />
                <textarea
                  name="workAccomplishments"
                  id="work-accomplishments"
                  placeholder="Your Work Accomplishments..."
                  onChange={(e) =>
                    setDataOnChange(index, e, workExps, setWorkExps, "workExps")
                  }
                  value={workExp.workAccomplishments}></textarea>
              </div>

              <button
                className="add-work-exp-btn"
                type="button"
                onClick={(e) =>
                  addData(
                    {
                      workPosition: "",
                      workCompany: "",
                      workDurationFrom: "",
                      workDurationTo: "",
                      workCity: "",
                      workAccomplishments: "",
                    },
                    workExps,
                    setWorkExps,
                    "workExps",
                  )
                }>
                ADD
              </button>
              {workExps.length > 1 ? (
                <button
                  className="delete-work-exp-btn"
                  type="button"
                  onClick={(e) =>
                    deleteData(index, workExps, setWorkExps, "workExps")
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
