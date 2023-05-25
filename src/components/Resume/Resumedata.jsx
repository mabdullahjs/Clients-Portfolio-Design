import React from "react";
import Card from "react-bootstrap/Card";

function Resumedata() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">Freelance AI artist</span>{" "}
            <span> at fiver I've pushed artistic boundaries as a freelance AI artist, blending human creativity with advanced technology, gaining recognition in prestigious exhibitions.</span>
            <br />
            <br />

            <span className="purple">LinkedIn Branding Assistant</span>{" "}
            <span> worked as linkedin branding assistant for various clients in the Web3 space and helped them gain engagements,impressions and followers.</span>
            <br />
            <br />

            <span className="purple">Freelance Graphic Designer</span>{" "}
            <span> As a freelance graphic designer, I've collaborated with diverse clients, creating visually striking designs that effectively communicate their brand message, leaving a lasting impact.</span>
            <br />
            <br />
            <span className="purple"> Twitter Manager</span>{" "}
            <span>
            at sweetblocks which is a protocol that governs and manages the supply and demand of the SWTB token which is an ERC-20 token with a gamified allocation and vesting period.
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