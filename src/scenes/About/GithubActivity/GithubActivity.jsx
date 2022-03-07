import Resumecontent from "./ResumeContent";
import { Container, Row, Col } from "react-bootstrap";
import "./Resume.css";


const GithubActivity = () => {
  return (
    <>
      <Container fluid className="resume-section">
        <Container>
          <Row className="resume">
            <Col md={6} className="resume-right">
              <h3 className="resume-title">Education</h3>
              <Resumecontent
                title="B.E in Computer Science and Engineering [Coimbatore, India] "
                date="2019 - Present"
                content={["CGPA : 8.64"]}
              />
              <Resumecontent
                title="12th Tamilnadu State Board [Ponnu Matric Higher Secondary School, Dharapuram]"
                date="2017 - 2019"
                content={["Precentage : 77.0%"]}
              />
              <Resumecontent
                title="10th Tamilnadu State Board [Ponnu Matric Higher Secondary School, Dharapuram]"
                date="2016 - 2017"
                content={["Precentage : 90.2%"]}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default GithubActivity;
