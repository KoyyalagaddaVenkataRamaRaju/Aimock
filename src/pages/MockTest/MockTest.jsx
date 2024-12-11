import React from "react";
import "./MockTest.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/footer";

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
      <Navbar />
      <div className="mock-tests-container">
        {exams.map((exam) => (
          <div className="mock-test-card" key={exam.id}>
            <img src={exam.img} alt={exam.name} className="mock-test-img" />
            <button className="mock-test-button">{exam.name}</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default MockTest;
