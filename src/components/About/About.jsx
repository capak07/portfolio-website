import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./TechStack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/About/about.png";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";
import "./about.css";

function ToolstackList() {
  const tools = [
    { name: "macOS", icon: SiMacos },
    { name: "Visual Studio Code", icon: SiVisualstudiocode },
    { name: "Postman", icon: SiPostman },
    { name: "Slack", icon: SiSlack },
    { name: "Vercel", icon: SiVercel },
  ];

  return (
    <div className="tools-list-container">
      {tools.map((tool, index) => {
        const IconComponent = tool.icon;
        return (
          <div key={index} className="tool-item">
            <div className="tool-icon-wrapper">
              <IconComponent className="tool-icon-single" />
            </div>
            <span className="tool-name">{tool.name}</span>
          </div>
        );
      })}
    </div>
  );
}

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={5}
            style={{
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "1.7em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
            <Col>
                <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <ToolstackList />
      </Container>
    </Container>
  );
}

export default About;
