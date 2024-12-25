import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./FileUpload.css"; // Import the CSS for styling

const UploadResume = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeData, setResumeData] = useState(null); // State to hold fetched resume data
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  // Fetch user data and resume on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = Cookies.get("jwt_token");
        if (!token) {
          setUserData(null);
          return;
        }

        const response = await axios.get("http://localhost:5001/api/userdata", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserData(response.data);
        setIsLoggedIn(true);

        // Fetch the user's resume if it exists
        await fetchResume();
      } catch (err) {
        console.error("Error fetching user data:", err);
        setUserData(null);
        setIsLoggedIn(false);
      }
    };

    fetchUserData();
  }, []);

  // Fetch the uploaded resume data
  const fetchResume = async () => {
    try {
      const token = Cookies.get("jwt_token");
      const response = await axios.get("http://localhost:5001/resume", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setResumeData(response.data); // Set the resume data
    } catch (err) {
      console.error("Error fetching resume:", err);
      setResumeData(null); // Handle case where no resume is found
    }
  };

  // Handle file selection
  const handleFileChange = (event) => {
    setResumeFile(event.target.files[0]);
  };

  // Handle resume upload
  const handleUploadClick = async () => {
    if (!isLoggedIn) {
      alert("Please log in to upload your resume.");
      navigate("/");
    } else {
      if (!resumeFile) {
        alert("Please select a file to upload.");
        return;
      }

      const formData = new FormData();
      formData.append("resume", resumeFile);

      try {
        const token = Cookies.get("jwt_token");
        const response = await axios.post(
          "http://localhost:5001/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          alert("Resume uploaded successfully!");
          await fetchResume(); // Refresh resume data after successful upload
        }
      } catch (error) {
        console.error("Error uploading resume:", error);
        alert("Error uploading resume. Please try again later.");
      }
    }
  };

  // Open resume in a new tab
  const handleOpenResume = () => {
    if (resumeData) {
      const resumeURL = `data:${resumeData.contentType};base64,${resumeData.fileData}`;
      const newTab = window.open();
      if (newTab) {
        newTab.document.write(
          `<iframe src="${resumeURL}" frameborder="0" style="width:100%; height:100%;"></iframe>`
        );
        newTab.document.close();
      } else {
        alert("Unable to open resume. Please check your browser settings.");
      }
    }
  };

  return (
    <div className="upload-resume-container ">
      <div className="file-upload-container">
        <h2> Upload your latest Resume</h2>
        <label className="upload-title">
       
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="file-input"
          />
          
        </label>
        <button className="upload-btn" onClick={handleUploadClick}>
          Upload Resume
        </button>
      </div>

      {/* Display the uploaded resume */}
      {resumeData && (
        <div className="resume-card" onClick={handleOpenResume}>
          <h3 className="resume-title">Uploaded Resume</h3>
          <p className="resume-name">{resumeData.filename}</p>
          <iframe
            src={`data:${resumeData.contentType};base64,${resumeData.fileData}`}
            title="Uploaded Resume"
            className="resume-iframe"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default UploadResume;
