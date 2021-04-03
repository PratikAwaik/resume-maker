import React, { useState, useEffect } from "react";
import { setDataOnInitialMount } from "../../helpers";
import emailImg from "../../images/email.svg";
import phoneImg from "../../images/phone.svg";
import linkedinImg from "../../images/linkedin.svg";
import githubImg from "../../images/github.svg";

export default function PersonalInfoPreview() {
  const [personalInfo, setPersonalInfo] = useState({});

  useEffect(() => {
    setDataOnInitialMount("personalInfo", setPersonalInfo);
  }, []);

  return (
    <div className="personal-info-preview">
      <div className="full-name-preview">{personalInfo.fullName}</div>
      <div className="title-preview">{personalInfo.title}</div>
      <div className="summary-preview">{personalInfo.summary}</div>
      <hr />
      <div className="personal-info-contact-preview">
        <div className="contact-container email-container-preview">
          <img
            className="contact-img email-preview-img"
            src={emailImg}
            alt="Email Icon"
          />
          <div className="contact-detail email-preview">
            {personalInfo.email}
          </div>
        </div>

        <div className="contact-container phone-container-preview">
          <img
            className="contact-img phone-preview-img"
            src={phoneImg}
            alt="Phone Icon"
          />
          <div className="contact-detail phone-preview">
            {personalInfo.phone}
          </div>
        </div>

        <div className="contact-container linkedin-container-preview">
          <img
            className="contact-img linkedin-preview-img"
            src={linkedinImg}
            alt="LinkedIn Icon"
          />
          <div className="contact-detail email-preview">
            {personalInfo.linkedin}
          </div>
        </div>

        <div className="contact-container github-container-preview">
          <img
            className="contact-img github-preview-img"
            src={githubImg}
            alt="Email Icon"
          />
          <div className="contact-detail github-preview">
            {personalInfo.github}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
