import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhay Kumar Gupta </span>
            from <span className="purple"> Varanasi, India.</span>
            <br />
            I am currently employed as a Business Technology Analyst at Deloitte.
            <br />
            I have completed B.Tech in Instrumentation Engineering from NIT Trichy.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Hockey
            </li>
            <li className="about-activity">
              <ImPointRight /> Capturing Landscapes
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Without data, you're just another person with an opinion."{" "}
          </p>
          <footer className="blockquote-footer">W. Edwards Deming</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
