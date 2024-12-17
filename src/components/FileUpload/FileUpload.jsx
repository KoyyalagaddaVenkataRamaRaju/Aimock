import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("file", file);

    try {
        const userId = "USER_ID"; // Replace with the actual user ID
        const response = await axios.post(`/api/users/${userId}/upload`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        alert("Resume uploaded successfully");
    } catch (err) {
        console.error(err);
        alert("Error uploading resume");
    }
};


  return (
    <div>
      <h2>Upload Resume</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default FileUpload;
