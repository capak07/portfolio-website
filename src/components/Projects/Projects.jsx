import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import "./projects.css";

function Projects() {
  return (
    <Container fluid className="project-section" style={{paddingTop: "100px"}}>
      <Container>
        <h1 className="project-heading">
          My All Time <strong className="purple"> Personal Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ display: "flex", paddingBottom: "10px" }}>
          <Col className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/Projects/web-app.png")}
              isBlog={false}
              title="Banking Web App"
              description="A simple banking web app with interactive UI using bootstrap"
              ghLink="https://github.com/capak07/web-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            imgPath={require("../../Assets/Projects/finance-app.png")}
              isBlog={false}
              title="Finance Web App"
              description="The OS for your personal finances and investments"
              ghLink="https://github.com/capak07/maybe"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/Projects/ai-tictactoe.png")}
              isBlog={false}
              title="AI TicTacToe Game"
              description="TicTacToe Game with assisted AI and machine learning"
              ghLink="https://github.com/capak07/TicTacToe-AI"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/Projects/leapfrog-triejoin.png")}
              isBlog={false}
              title="LeapFrog Triejoin in Amazon SimpleDB"
              description="The goal of the project is to implement Leapfrog Triejoin within SimpleDB."
              ghLink="https://github.com/capak07/simpledb"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          My <strong className="purple"> Open Source </strong> Contributions
        </h1>
        <Row style={{ display: "inline-flex", flexDirection: "row", paddingBottom: "50px" }}>
        <Col className="project-card">
            <ProjectCard
              isBlog={false}
              title="movie-web"
              description="Package that contains all the providers of movie-web"
              ghLink="https://github.com/movie-web/providers"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;