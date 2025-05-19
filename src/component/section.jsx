import React from "react";
import "./section.css";

export default function StatsSection() {
  const stats = [
    { value: "5Cr+", label: "ads spend" },
    { value: "25Cr+", label: "revenue" },
    { value: "5Yr+", label: "experience" },
    { value: "50+", label: "clients" },
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-circle">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
     
    </section>
  );
}