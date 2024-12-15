import React from "react";
import "./MockTest.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/footer";
import Sidebar from "../../components/Sidebar/Sidebar";

const MockTest = () => {
  const exams = [
    { id: 1, name: "Aptitude Test", img: "./aptitude.jpg" },
    { id: 2, name: "Technical Test", img: "./technical.jpg" },
    { id: 3, name: "Coding Test", img: "./coding.jpg" },
    { id: 4, name: "Soft Skills", img: "./softskills.jpg" },
    { id: 5, name: "English Test", img: "./english.jpg" },
    { id: 6, name: "Logical Reasoning", img: "./logical.jpg" },
  ];

  return (
    <div className="mock-tests-page">
      <div className="mock-tests-container">
        <div className="mock-sidebar">
          <Sidebar />
        </div>
        <div className="mock-tests-data">
          <h1 className="mock-tests-heading">Mock Tests for Skill Assessment</h1>
          <div className="mock-tests-grid">
            {exams.map((exam) => (
              <div key={exam.id} className="mock-test-card">
                <img src={exam.img} alt={exam.name} className="mock-test-img" />
                <button className="mock-test-button">{exam.name}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockTest;
