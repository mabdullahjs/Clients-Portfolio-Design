import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Abdullah </span>
            from <span className="purple"> Karachi, Pakistan.</span>
            <br />I am a junior Web Developer and student of SMIT Karachi.
            <br />
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
