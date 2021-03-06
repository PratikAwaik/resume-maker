import React, { useEffect, useState } from "react";
import { setDataOnInitialMount } from "../../helpers";

export default function WorkExpPreview() {
  const [workExps, setWorkExps] = useState([]);

  useEffect(() => {
    setDataOnInitialMount("workExps", setWorkExps);
  }, []);

  return (
    <div className="work-exp-preview">
      <h2>Work Experience</h2>
      {workExps.map((workExp, index) => {
        return (
          <div key={index} className="work-exp" id={index}>
            <div className="work-position">{workExp.workPosition}</div>
            <div className="work-company">{workExp.workCompany}</div>
            <div className="work-meta">
              <div className="work-duration">
                {workExp.workDurationFrom}{" "}
                {workExp.workDurationFrom ? "-" : null} {workExp.workDurationTo}
              </div>
              <div className="work-city">{workExp.workCity}</div>
            </div>
            <div className="work-accomplishments">
              {workExp.workAccomplishments}
            </div>
          </div>
        );
      })}
    </div>
  );
}
