import React from "react";
import Card from "react-bootstrap/Card";

function Resumedata() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">React JS Developer</span>{" "}
            <span>at SkySoft Solutions, gaining valuable experience and skills in the field.
              Built a strong foundation in Front End Development that allowed me to fit seamlessly into the company's culture.</span>
            <br />
            <br />

            <span className="purple">Internship Experience</span>{" "}
            <span>Achieved the distinction of being the top student in the Jawan Pakistan Program's backend development track.</span>
            <br />
            <br />

            <span className="purple">Hackathon Experience</span>{" "}
            <span>Participated in a 12-hour Hackathon at SMIT, which taught me how to work on a competitive task under time constraints and pressure.</span>
            <br />
            <br />
            <span className="purple">Internship Experience</span>{" "}
            <span>
            Completed an internship at SMIT, where I gained advanced knowledge of JavaScript and learned how to approach and solve difficult programming tasks with a cool mindset.
            </span>
            <br />
            <br />
            <span className="purple">Internship Experience</span>{" "}
            <span>
            Completed an internship at Coderatory, where I learned about the roadmap of Front End Development and how to effectively work in the market.
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