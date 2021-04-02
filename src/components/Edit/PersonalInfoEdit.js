import React, { useEffect, useState } from "react";

export default function PersonalInfoEdit() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    title: "",
    summary: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
  });

  useEffect(() => {
    if (localStorage.getItem("personalInfo")) {
      setPersonalInfo(JSON.parse(localStorage.getItem("personalInfo")));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newPersonalInfo = { ...personalInfo };
    newPersonalInfo[name] = value;
    localStorage.setItem("personalInfo", JSON.stringify(newPersonalInfo));
    setPersonalInfo(newPersonalInfo);
  };

  return (
    <div className="personal-info-edit">
      <h2>Personal Information</h2>
      <label htmlFor="full-name">Full Name</label>
      <br />
      <input
        id="full-name"
        name="fullName"
        className="full-name-edit"
        type="text"
        placeholder="Full Name"
        value={personalInfo["fullName"]}
        onChange={(e) => handleChange(e)}
      />

      <label htmlFor="title">Title</label>
      <br />
      <input
        id="title"
        name="title"
        className="title-edit"
        type="text"
        placeholder="Frontend Developer"
        value={personalInfo["title"]}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="summary">Professional Summary</label>
      <br />
      <textarea
        name="summary"
        className="summary-edit"
        type="text"
        placeholder="Your Professional Summary here..."
        value={personalInfo["summary"]}
        onChange={(e) => handleChange(e)}></textarea>

      <div id="row-1">
        <div className="email-container-edit">
          <label htmlFor="email">Email</label>
          <br />
          <input
            id="email"
            name="email"
            className="email-edit"
            type="email"
            placeholder="abc@xyz.com"
            value={personalInfo["email"]}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="phone-container-edit">
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            id="phone"
            name="phone"
            className="phone-edit"
            type="text"
            placeholder="+91 1234567890"
            value={personalInfo["phone"]}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>

      <div id="row-2">
        <div className="linkedin-container-edit">
          <label htmlFor="linkedin">LinkedIn</label>
          <br />
          <input
            id="linkedin"
            name="linkedin"
            className="linkedin-edit"
            type="text"
            placeholder="linkedin.com/myProfile"
            value={personalInfo["linkedin"]}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="github-container-edit">
          <label htmlFor="github">Github</label>
          <br />
          <input
            id="github"
            name="github"
            className="github-edit"
            type="text"
            placeholder="github.com/myProfile"
            value={personalInfo["github"]}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
    </div>
  );
}
