import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import "./projects.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My All Time <strong className="purple"> Personal Projects </strong>
        </h1>
        <p style={{ color: "rgba(255, 255, 255, 0.7)", textAlign: "center", marginBottom: "50px" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ display: "flex", flexDirection: "row", gap: "30px", justifyContent: "center", paddingBottom: "50px", flexWrap: "wrap" }}>
          <Col md={5} lg={4} style={{ minWidth: "300px" }}>
            <ProjectCard
              imgPath={require("../../Assets/Projects/web-app.png")}
              isBlog={false}
              title="Banking Web App"
              description="A simple banking web app with interactive UI using bootstrap"
              ghLink="https://github.com/capak07/web-app"
            />
          </Col>

          <Col md={5} lg={4} style={{ minWidth: "300px" }}>
            <ProjectCard
            imgPath={require("../../Assets/Projects/finance-app.png")}
              isBlog={false}
              title="Finance Web App"
              description="The OS for your personal finances and investments"
              ghLink="https://github.com/capak07/maybe"
            />
          </Col>

          <Col md={5} lg={4} style={{ minWidth: "300px" }}>
            <ProjectCard
              imgPath={require("../../Assets/Projects/ai-tictactoe.png")}
              isBlog={false}
              title="AI TicTacToe Game"
              description="TicTacToe Game with assisted AI and machine learning"
              ghLink="https://github.com/capak07/TicTacToe-AI"          
            />
          </Col>

          <Col md={5} lg={4} style={{ minWidth: "300px" }}>
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
        <Row style={{ display: "flex", flexDirection: "row", gap: "30px", justifyContent: "center", paddingBottom: "50px", flexWrap: "wrap" }}>
        <Col md={5} lg={4} style={{ minWidth: "300px" }}>
            <ProjectCard
              isBlog={false}
              title="movie-web"
              description="Package that contains all the providers of movie-web"
              ghLink="https://github.com/TGlide/movie-web"
              imgPath="https://avatars.githubusercontent.com/u/26071571?s=48&v=4"
            />
          </Col>
          <Col md={5} lg={4} style={{ minWidth: "300px" }}>
            <ProjectCard
              isBlog={false}
              title="Sympy"
              description="A computer algebra system written in pure Python"
              ghLink="https://github.com/sympy/sympy"
              imgPath="https://avatars.githubusercontent.com/u/260832?s=48&v=4"
            />
          </Col>
          <Col md={5} lg={4} style={{ minWidth: "300px" }}>
            <ProjectCard
              isBlog={false}
              title="langchain"
              description="https://github.com/patterns-ai-core/langchainrb"
              ghLink="Build LLM-backed Ruby applications"
              imgPath="https://avatars.githubusercontent.com/u/166417795?s=48&v=4"
            />
          </Col>
          <Col md={5} lg={4} style={{ minWidth: "300px" }}>
            <ProjectCard
              isBlog={false}
              title="gson"
              description="Library to convert Java Objects into JSON and back"
              ghLink="https://github.com/google/gson"
              inPath="https://avatars.githubusercontent.com/u/1342004?s=48&v=4"
            />
          </Col>
          <Col md={5} lg={4} style={{ minWidth: "300px" }}>
            <ProjectCard
              isBlog={false}
              title="duckdb"
              description="DuckDB is an in-process SQL OLAP Database Management System"
              ghLink="https://github.com/duckdb/duckdb"
              imgPath= "https://avatars.githubusercontent.com/u/82039556?s=48&v=4"
            />
          </Col>
          <Col md={5} lg={4} style={{ minWidth: "300px" }}>
            <ProjectCard
              isBlog={false}
              title="exa"
              description="exa is a modern replacement for the 'ls' command-line program"
              ghLink="https://github.com/ogham/exa"
              imgPath="https://avatars.githubusercontent.com/u/503760?s=48&v=4"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
