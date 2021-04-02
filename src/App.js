import React, { useState } from "react";
import resumeImg from "./images/resume.png";
import ResumeEdit from "./components/Edit/ResumeEdit";
import ResumePreview from "./components/Preview/ResumePreview";

function App() {
  const [toEdit, setToEdit] = useState(true);

  const changeView = (e) => {
    if (e.target.textContent === "Edit") {
      e.target.textContent = "Preview";
      setToEdit(true);
    } else {
      e.target.textContent = "Edit";
      setToEdit(false);
    }
  };

  return (
    <div className="App">
      <div className="header">
        <img src={resumeImg} alt="Resume" />
        <h1>Resume Maker</h1>
      </div>
      <button className="change-view-btn" onClick={(e) => changeView(e)}>
        Preview
      </button>
      {toEdit ? <ResumeEdit /> : <ResumePreview />}
    </div>
  );
}

export default App;
