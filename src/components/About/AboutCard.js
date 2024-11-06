import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sairitik Naidu </span>
            from <span className="purple"> Nagpur,Maharashtra, India.</span>
            <br />
            I am currently working as a software Engineer intern at
            ByteFusionTechsoft a startup company at pune .
            <br />
            I have completed MCA(Masters's of Computer Application) from Nagpur
            University in 2024.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sairitik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
