import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import React from "react";

// Source - https://stackoverflow.com/questions/44989119/generating-a-pdf-file-from-react-components

function Download(props) {
  // convert HTML -> Canvas -> PNG (or JPEG) -> PDF

  const downloadPDF = () => {
    console.log("Downloading...");
    const resume = document.getElementById("resume-preview");
    const download = document.getElementById("download");
    const fullName = document.querySelector(".full-name-preview").textContent;
    document.documentElement.style.fontSize = "8.5px";

    download.style.display = "none";

    html2canvas(resume).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg");
      const resumeHeight = convertPxToMm(resume.clientHeight);
      const resumeWidth = convertPxToMm(resume.clientWidth);

      const pdf = new jsPDF({
        orientation: "l",
        unit: "mm",
        format: [resumeHeight, resumeWidth],
      });

      pdf.internal.pageSize.height = resumeHeight;
      pdf.internal.pageSize.width = resumeWidth;

      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save(`${fullName}'s Resume.pdf`);

      download.style.display = "block";
      document.documentElement.style.fontSize = "10px";
    });
  };

  return (
    <div id="download">
      <button type="button" className="download-btn" onClick={downloadPDF}>
        Download as PDF
      </button>
    </div>
  );
}

// for 96 dpi
function convertPxToMm(pxs) {
  return 0.264583 * pxs;
}

export default Download;
