import React, { useState } from 'react';
import { GrTechnology } from "react-icons/gr"; // Import the GrTechnology icon
import { FaTools } from "react-icons/fa"; // Import the FaTools icon
import { MdOutlineDeveloperMode } from "react-icons/md"; // Import the MdOutlineDeveloperMode icon

const Details = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="Details">
      <div className="container3">
        <div className="row g-4 py-5 row-cols-1">
          {accordionData.map((item, index) => (
            <div key={index} className="feature col">
              <div
                className="feature-header d-flex align-items-center justify-content-between"
                onClick={() => toggleAccordion(index)}
              >
                <div
                  className="feature-icon text-bg-primary bg-gradient fs-2 d-flex align-items-center justify-content-center"
                  style={{ backgroundColor: 'gray', padding: '10px', borderRadius: '50%' }}
                >
                  {item.icon}
                </div>
                <h3 className="fs-2 text-body-emphasis font-bold text-gradient">{item.title}</h3>
                <span className="accordion-toggle">
                  {activeIndex === index ? '-' : '+'}
                </span>
              </div>
              <div
                className={`feature-content ${index === activeIndex ? 'active' : ''}`}
                style={{
                  maxHeight: index === activeIndex ? '150px' : '0',
                  padding: index === activeIndex ? '1rem' : '0',
                }}
              >
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const accordionData = [
  {
    title: 'TECH-STACK',
    content: (
      <ul className="list-disc pl-5">
        <li>Gemini API</li>
        <li>React Hook for Speech to Text (STT)</li>
        <li>Speech Synthesis for Text to Speech (TTS)</li>
      </ul>
    ),
    icon: <GrTechnology style={{ color: 'black', fontSize: '2rem' }} />,
  },
  {
    title: 'FRAMEWORK',
    content: (
      <ul className="list-disc pl-5">
        <li>ReactJS</li>
        <li>Tailwind CSS</li>
        <li>Bootstrap</li>
        <li>ExpressJS</li>
      </ul>
    ),
    icon: <FaTools style={{ color: 'black', fontSize: '2rem' }} />,
  },
  {
    title: 'DEVELOPER',
    content: (
      <ul className="list-disc pl-5">
        <li>Ashish Anil Yadav</li>
        <li>Sachin Kumar</li>
        <li>Aman Sanjay Singh</li>
        <li>Ujjwal</li>
      </ul>
    ),
    icon: <MdOutlineDeveloperMode style={{ color: 'black', fontSize: '2rem' }} />,
  },
];

export default Details;
