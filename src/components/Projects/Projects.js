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
import dietes from "../../Assets/Projects/dietes.png";
import fumicon from "../../Assets/Projects/fumicon.png";
import lms from "../../Assets/Projects/LMS-portal.png";

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
              imgPath={dietes}
              isBlog={false}
              title="Dietis Hospital App"
              description="Introducing the Hospital App. This app is created using MERN stack technology. Revolutionize the way hospitals manage their operations. This cutting-edge app combines advanced features, such as a chat platform, attendance management, and work management tools."
              ghLink="https://github.com/mabdullahjs/Dietis-Backend"
              demoLink="https://dietes-322.web.app/schedule"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fumicon}
              isBlog={false}
              title="Fumicon Pesticides Control"
              description="The Pesticide Control Statuc website is your go-to online resource for comprehensive information and guidance on pest control. With expert advice and up-to-date resources, it helps individuals and businesses effectively manage pests and maintain a pest-free environment."
              ghLink="https://github.com/mabdullahjs/Fumicon-Second-Design"
              demoLink="https://fumicon-123.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lms}
              isBlog={false}
              title="Institute Management System"
              description="The Institute Management System is a robust online platform that streamlines administrative tasks and facilitates efficient management of academic institutions. From student enrollment and attendance tracking to resource allocation. and performance evaluation. This project is under developement mode."
              ghLink="https://github.com/mabdullahjs/LMS-PORTAL"
              demoLink="https://institute-322.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sunshine}
              isBlog={false}
              title="Sunshine Exhause"
              description="This website is owned by Sunshine Exhaust  which consists of the finest equipment and reputable technicians in the area. They have been providing exhaust fans for many years in Pakistan."
              ghLink="https://github.com/mabdullahjs/sunshine-fans"
              demoLink="https://sunshineblower.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textutils}
              isBlog={false}
              title="Textutils"
              description="TextUtils is a powerful module that offers a range of functionalities for extracting and manipulating text from paragraphs. such as whitespace removal, word capitalization, and word lowercasing."
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
              description="This is my previous portfolio website, created using HTML, CSS, JavaScript, Tailwind CSS, and Firebase. It has been recognized with the  Best Design of Portfolio award in my class."
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
