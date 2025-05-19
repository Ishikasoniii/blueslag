import React from 'react';
import Slider from 'react-slick';
import {
  FaFacebookF,
  FaInstagram,
  FaPalette,
  FaHandsHelping,
} from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';

const slides = [
  {
    title: 'Facebook Ads',
    content:
      'At Blueslag Technologies, we craft strategic and creative Facebook ad campaigns tailored to your goals. Our approach includes meticulous ad creation, rigorous testing, and data-driven optimizations for maximum ROI and sustainable growth.',
    icon: <FaFacebookF color="#4267B2" />,
  },
  {
    title: 'Instagram Ads',
    content:
      'Transform your brand with powerful Instagram ads by Blueslag Technologies. We create compelling visuals and effective messaging to engage your audience and drive results, from initial strategy to final optimization.',
    icon: <FaInstagram color="#C13584" />,
  },
  {
    title: 'Ad Creative',
    content:
      "We'll create highly engaging ad creatives tailored for catalogs, retargeting campaigns, and lookalike audiences, featuring compelling offers and striking color combinations.",
    icon: <FaPalette color="#FF6347" />,
  },
  {
    title: 'Marketing Support',
    content:
      'Our services include managing your ads and website, optimizing landing pages, crafting offers, creating UGC videos, integrating advanced payment gateways, and providing support for WhatsApp API integration to enhance your business operations.',
    icon: <FaHandsHelping color="#28a745" />,
  },
];

const chunkText = (text, wordsPerLine = 8) => {
  const words = text.split(' ');
  const lines = [];
  for (let i = 0; i < words.length; i += wordsPerLine) {
    lines.push(words.slice(i, i + wordsPerLine).join(' '));
  }
  return lines;
};

const WhyUsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <>
    <div className='sub-div'>
     <h2>Why Us</h2>
     <p className="subtitle">All Your needs at one place</p>
     </div>
    <div className="why-us-container">
      <div className="slider-content">
       
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <div className="icon-wrapper">{slide.icon}</div>
              <h3 className="slider-h">{slide.title}</h3>
              <div className="slider-p">
                {chunkText(slide.content).map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="video-container">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/XlW48uZyu5U?si=4gavM6CWlqhDTtPM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    </>
  );
};

export default WhyUsSlider;
