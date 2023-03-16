import React from "react";
import Card from "react-bootstrap/Card";

function Resumedata() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">Front End Developer</span>{" "}
            <span>at SkySoft Solutions I have been working as a Front End Developer and I have learned alot of things. I think it is very important to build a strong foundation at the beginning so that you can fit into your companies culture.</span>
            <br />
            <br />
           
            <span className="purple">Hackathon Experience</span>{" "}
            <span>
              I Participated in 12 hours{" "}
              <span className="purple">Hackathon</span> of SMIT where i learned to do a competitive task in less time.
            </span>
            <br />
            <br />
            <span className="purple">Internship Experience at</span>{" "}
            <span>
            SMIT where I learned Advance javaScript and How to tackle with difficult programming tasks and to solve them with cool mindset.
            </span>
            <br />
            <br />
            <span className="purple">Internship Experience at</span>{" "}
            <span>
              Coderatory where I learn the roadmap of front end development and How to work in the market.
            </span>
            <br />
            <br />

          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Resumedata;