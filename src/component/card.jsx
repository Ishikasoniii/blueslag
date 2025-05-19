import React from "react";
import './card.css';

const CourseInfo = () => {
  return (
    <div className="course-container">
      <h2 className="course-heading">How We Work</h2>
      <div className="course-points">
        <p className="card-p">👉<span className="card-h">Initial Consultation</span><br></br>
        We initiate a quick call to deeply understand and analyze your business, and identify any areas that may need improvement.</p>
        <p className="card-p">👉<span className="card-h">Follow-up Meeting</span> <br></br>
        If we determine we're a good fit for your needs, we schedule a follow-up meeting to discuss essential elements and services needed to achieve optimal results.</p>
        <p className="card-p">👉<span className="card-h">Service Implementation</span><br></br>
        We begin implementing the necessary services to maximize profits for your business.</p>
        
      </div>
     
    </div>
  );
};

export default CourseInfo;