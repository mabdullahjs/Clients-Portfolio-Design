import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiCss3
} from "react-icons/di";
import {
  AiFillHtml5
} from "react-icons/ai";
import {
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiCanva,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeillustrator />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobexd />
      </Col>
      
    </Row>
  );
}

export default Techstack;
