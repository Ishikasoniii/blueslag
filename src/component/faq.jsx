import React, { useState } from "react";
import './faq.css';

const faqData = [
  {
    question: "What is performance marketing, and how can Blueslag Technologies help my business?",
    answer: "Performance marketing focuses on measurable results such as clicks, conversions, and sales. Blueslag Technologies specializes in creating full-funnel marketing strategies that drive tangible outcomes for businesses, from lead generation to customer acquisition and retention."
  },
  {
    question: "How does Blueslag Technologies measure performance?",
    answer: "We use a variety of key performance indicators (KPIs) to measure the success of our campaigns, including click-through rates (CTR), conversion rates, cost per acquisition (CPA), and return on ad spend (ROAS). Our advanced analytics and reporting tools allow us to track and optimize every aspect of your marketing efforts."
  },
  {
    question: "How can User-Generated Content (UGC) enhance our ad creative for performance marketing?",
    answer: "User-Generated Content (UGC) enhances ad creativity in performance marketing by showcasing authentic customer experiences, building trust, and boosting engagement. It acts as compelling social proof, increasing conversion rates, and is cost-effective and versatile across different marketing channels and formats."
  },
  {
    question: "What makes Blueslag Technologies different from other marketing agencies?",
    answer: "At Blueslag Technologies, we focus on performance and results. Our data-driven approach ensures that every marketing dollar is spent efficiently. We provide transparent reporting, personalized strategies, and a dedicated team of experts who are committed to helping you achieve your business goals."
  },
  {
    question: "How do I get started with Blueslag Technologies?",
    answer: "Getting started with Blueslag Technologies is easy. Simply contact us through our website or give us a call to schedule a consultation. We’ll discuss your business objectives, evaluate your current marketing efforts, and develop a customized performance marketing strategy tailored to your needs."
  },
];

export default function FaqData() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="page-container">
      <div className="content">
        <h2>Schedule a Demo</h2>
        <p>See our solution in action. Schedule a demo today and discover how we can help your business grow!</p>
        <button className="join-btn">Get Call Back</button>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions (FAQs)</h2>
        <p>
          Trying my best to answer most questions. In case you have more doubts, feel free to reach out at{" "}
          <a href="mailto:learn@9figures.club">learn@9figures.club</a>
        </p>
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">{faq.question}</div>
              {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
