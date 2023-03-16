import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sunshine from "../../Assets/Projects/sunshine.png";
import quiz from "../../Assets/Projects/quiz.png";
import textutils from "../../Assets/Projects/textutils.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import tkh from "../../Assets/Projects/tkh.png";
import noon from "../../Assets/Projects/noon.png";

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
              imgPath={sunshine}
              isBlog={false}
              title="Sunshine Exhause"
              description="This website is owned by Sunshine Exhaust  which consists of the finest equipment and reputable technicians in the area. They have been providing exhaust fans for many years in Pakistan and they even have our own wholesale division that supplies customers all over the country."
              ghLink="https://github.com/mabdullahjs/sunshine-fans"
              demoLink="https://sunshine-fans.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textutils}
              isBlog={false}
              title="Textutils"
              description="textutils is a module that provides functionality for extracting text from paragraph. It has many capabilities like removing whitespace capitalizing words and lowercasing words."
              ghLink="https://github.com/mabdullahjs/TextUtils"
              demoLink="https://textutils-322.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quiz App"
              description="Quiz app is very helpful for schools and students. It helps them to develop their skills and knowledge through quizzes. This app provides a way for students to take exams, improve their abilities and skills."
              ghLink="https://github.com/mabdullahjs/Presentation-Quiz-App"
              demoLink="https://quiz-322.web.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Old Portfolio"
              description="This is my old portfolio which is made using HTML CSS, Javascript Tailwind CSS and Firebase Database."
              ghLink="https://github.com/mabdullahjs/Complete-Portfolio"
              demoLink="https://portfolio-322.web.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={noon}
              isBlog={false}
              title="noon.com clone"
              description="This is a design of noon.com made using reactjs and antdesign library. It has a responsive layout which looks beautifully on all devices, from mobiles to desktops."
              ghLink="https://github.com/mabdullahjs/Noon.com-Clone"
              demoLink="https://noon-322.web.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tkh}
              isBlog={false}
              title="Theek Kar Dengey "
              description="This is a mobile repairing website which contain all e-commerce features and it is made using react js and antd. You can fix and buy repaired products on the website."
              ghLink="https://github.com/mabdullahjs/Mobile-Repair-ReactJs"
              demoLink="https://tkh-123.web.app/"              
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
