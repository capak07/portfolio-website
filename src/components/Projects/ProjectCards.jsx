import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import "./projects.css";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img 
        variant="top" 
        src={props.imgPath} 
        alt="card-img" 
        width={"100%"} 
        height={"200px"} 
        style={{objectFit: "cover", borderRadius: "8px 8px 0 0" }} 
      />
      <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
        <div>
          <Card.Title style={{ color: "#00d4ff", marginBottom: "1rem", fontSize: "1.3rem", fontWeight: "700" }}>
            {props.title}
          </Card.Title>
          <Card.Text style={{ color: "rgba(255, 255, 255, 0.7)", lineHeight: "1.6", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
            {props.description}
          </Card.Text>
        </div>
        <Button 
          href={props.ghLink} 
          target="_blank" 
          style={{
            background: "linear-gradient(135deg, #00d4ff, #0084ff)",
            border: "none",
            color: "white",
            fontWeight: "600",
            padding: "8px 16px",
            borderRadius: "6px",
            transition: "all 0.3s ease",
            marginTop: "auto"
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 8px 16px rgba(0, 212, 255, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "none";
          }}
        >
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
