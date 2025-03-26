import React from 'react';

const Resume = () => {
  return (
    <div className="section resume-section">
      <h2>Resume</h2>
      <p>
        You can view or download my resume below.
      </p>

      <div className="resume-viewer">
        <iframe
          src="https://docs.google.com/gview?url=https://your-domain.com/resume.pdf&embedded=true"
          width="100%"
          height="600px"
          title="Resume Viewer"
          style={{ border: "1px solid #ccc", borderRadius: "8px" }}
        ></iframe>
      </div>

      <a
        href="/resume.pdf"
        download
        className="download-button"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
