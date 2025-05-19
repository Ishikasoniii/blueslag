import React from "react";
import "./home.css";

const CourseIntro = () => {
  return (
    <div className="intro-container">
      <h2 className="intro-heading">
        We build full-funnel Performance Marketing journeys that capture your customer's heart.
      </h2>
      <p className="intro-description">
        “A dedicated team of specialists, delivering remarkable results worldwide!”
      </p>

      <div className="intro-highlights">
        <div className="highlight-box">📅 Minimum 3 Month Onboarding</div>
        <div className="highlight-box">⏳ 15 Days Notice Period</div>
        <div className="highlight-box">🚀 Boost Sales With Us</div>
      </div>

      <div className="intro-features">
        <p>
          Creative testing, audience segmentation, advanced bidding, and remarketing for maximum ROI.
        </p>
      </div>

      <div className="partner-badges">
        <div className="badge">🛠 Meta Business Partner</div>
        <div className="badge">🛒 Certified Shopify Business Partner</div>
      </div>
    </div>
  );
};

export default CourseIntro;
