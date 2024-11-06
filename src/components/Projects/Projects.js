import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Simulator from "../../Assets/Projects/Simulator.png";
import OES from "../../Assets/Projects/OES.png";
import editor from "../../Assets/Projects/codeEditor.png";
import spotify from "../../Assets/Projects/spotify.png";
import BBMS from "../../Assets/Projects/BBMS.png";
import Voiceassistant from "../../Assets/Projects/voice.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotify}
              isvoice={false}
              title="Spotify-Clone"
              description="Spotify -Clone web application based on React js & OpenAPI configuration through which you can easily mange and maintain your data integration."
              ghLink="https://github.com/Sairitiknaidu/Spotify-clone"
              demoLink="https://spotify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Voiceassistant}
              isvoice={false}
              title="Voice assistant"
              description="Voice-Assitant based on python libraries . It work on multiple functions like Google search engine, youtube search or opening specific app."
              ghLink="https://github.com/Sairitiknaidu/Voice-Assitant"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isvoice={false}
              title="Wheather App"
              description="Wheather application based on javascript it provide wheather forecasting for multiple regions using Geolocation of particular device in which you open this site."
              ghLink="https://github.com/Sairitiknaidu/WeatherApp"
              demoLink="https://resilient-dodol-f66192.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Simulator}
              isvoice={false}
              title="ATM Simulator"
              description="ATM Simulator Application based on java & MYSQL . It have all the functions like real ATM Machine."
              ghLink="https://github.com/Sairitiknaidu/ATM-SIMULATOR.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BBMS}
              isvoice={false}
              title="BBMS"
              description="Blood Bank Management System using servlet programming to deploy multiple server pages dynamically. It collect data from donor receiver and provide blood information or detail data"
              ghLink="https://github.com/Sairitiknaidu/BBMS.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OES}
              isvoice={false}
              title="Online Examination System."
              description="Online Examination System created for student and faculties to conduct exams from anywhere during pandemic or less avaibility of resources."
              ghLink="https://github.com/Sairitiknaidu/online-examination-system.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
