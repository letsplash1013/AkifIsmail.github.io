import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import bannerImage2 from "../assets/img/banner-bg2.png"

export const Projects = () => {

  const projects = [
    {
      title: "Agario",
      description: "A single player cell multiplication gamem made using native Java",
      imgUrl: projImg1,
    },
    {
      title: "Custom 3D engine",
      description: "Custom 3D engine developed using Java",
      imgUrl: projImg2,
    },
    {
      title: "This website",
      description: "Made using React, HTML and CSS",
      imgUrl: projImg3,
    }

    
  ];
  // {
  //   title: "Business Startup",
  //   description: "Design & Development",
  //   imgUrl: projImg3,
  // },

  return (
    <section className="project" id="projects" style={{ backgroundImage: `url(${bannerImage2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Most of my projects have been developed in Java, JavaScript, React or Express with a bit of Python for webscraping</p>
                  <Row>
                    {
                      projects.map((project, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={6}>
                          <ProjectCard {...project} />
                        </Col>
                      ))
                    }
                  </Row>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  )
}
