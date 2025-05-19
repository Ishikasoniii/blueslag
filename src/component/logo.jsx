import React from "react";
import logo from "../component/image/image.png"; // Adjust path if needed
import "./logo.css";

const CompaniesSection = () => {
  return (
    <section className="companies-section">
      <h2>People we've trained work at</h2>
      <img src={logo} alt="Company logo" className="company-logo" />
    </section>
  );
};

export default CompaniesSection;
