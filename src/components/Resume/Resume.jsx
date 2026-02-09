import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "./Resume.css";
import { experiences } from "./Constants";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(135deg, rgba(40, 50, 70, 0.9) 0%, rgba(30, 40, 60, 0.9) 100%)",
        color: "#fff",
        height: "100%",
        border: "1px solid rgba(0, 212, 255, 0.2)",
        borderRadius: "8px",
        boxShadow: "0 8px 16px rgba(0, 212, 255, 0.1)",
        padding: "20px"
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(0, 212, 255, 0.3)" }}
      date={
        experience.date
      }
      iconStyle={{ 
        background: "linear-gradient(135deg, #00d4ff, #0084ff)", 
        height: "60px", 
        width: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)"
      }}
      icon={
        <div className='exp-card'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='logo'
            style={{ width: "90%", height: "90%", objectFit: "contain" }}
          />
        </div>
      }
    >
      <div>
        <h3 className='title'>{experience.title}</h3>
        <p
          className='pbody'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='experience'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='points'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <div className='exp' style={{ paddingTop: "100px" }}>
        <h1 style={{ textAlign: "center", color: "#fff", marginBottom: "3rem", fontSize: "2rem", fontWeight: "700" }}>
          My <strong style={{ background: "linear-gradient(135deg, #00d4ff, #0084ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Experience</strong>
        </h1>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
