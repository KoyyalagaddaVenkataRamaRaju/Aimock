import React from "react";
import "./MockInt.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/footer";

function MockInt() {
  const companies = [
    {
      id: 1,
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png",
     
    },
    {
      id: 2,
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
     
    },
    {
      id: 3,
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      
    },
    {
      id: 4,
      name: "Facebook (Meta)",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
     
    },
    {
      id: 5,
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      
    },
    {
      id: 6,
      name: "Tesla",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
      
    },
  ];

  return (
    <div className="mock-int-container">
      <Navbar/>
      <h1 className="mock-int-heading">Mock Interviews by Top Companies</h1>
      <div className="mock-int-grid">
        {companies.map((company) => (
          <a
            key={company.id}
            href={company.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mock-int-card"
          >
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="mock-int-logo"
            />
            <p className="mock-int-name">{company.name}</p>
          </a>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default MockInt;
