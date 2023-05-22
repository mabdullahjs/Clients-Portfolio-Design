import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Resumedata from "./Resumedata";
// import Button from "react-bootstrap/Button";
import Particle from "../Particle";
// import pdf from "../../Assets/../Assets/Muhammad's Resume.pdf";
import developerImg from "../../Assets/experience/developer.gif";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);

  return (
    <div>
      <Container fluid className="about-section">
      <Particle />
      <Container>
      {/* <a  href={pdf} download="pdf" target="_blank">
        <Button style={{marginTop:"1rem"}}>Download My Resume</Button>
      </a> */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "flex-end",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <div className="purple">Experience</div>
            </h1>
            <Resumedata />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={developerImg} alt="experience" className="img-fluid experience" />
          </Col>
        </Row>
      </Container>
    </Container>
    </div>
  );
}

export default ResumeNew;
