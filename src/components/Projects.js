import { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { VideoPlayer } from "./VideoPlayer";
import projectr1 from "../assets/img/projectr1.png";
import projectr2 from "../assets/img/projectr2.png";
import projectr3 from "../assets/img/projectr3.png";
import projectr4 from "../assets/img/projectr4.png";
import projectr5 from "../assets/img/projectr5.png";
import dormDash from "../assets/img/DormDash.gif";
import portfolio from "../assets/img/portfolio.gif";
import myRide from "../assets/img/myRide.gif";
import easyNote from "../assets/img/EasyNote.gif";
import colorSharp2 from "../assets/img/color-sharp2.png";
import colorSharp from "../assets/img/color-sharp.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("first");
  const [intervalId, setIntervalId] = useState(null);
  const [isRotating, setIsRotating] = useState(true);
  const projectsSectionRef = useRef(null);
  const tabs = ["first", "second", "third"];

  const webProjects = [
    {
      title: "DormDash",
      description:
        "A comprehensive real estate platform for university communities using MERN stack.",

      githubUrl: "https://github.com/AM-creator/DormDash.git",
      imgUrl: dormDash,
      webUrl: "https://dormdash-5u6i.onrender.com/",
    },

    {
      title: "Portfolio",
      description: "A portfolio site built with React and Bootstrap.",

      githubUrl: "https://github.com/AM-creator/portfolio.git",
      imgUrl: portfolio,
      webUrl: "https://am-creator.github.io/portfolio/",
    },

    {
      title: "MyRide-Frontend",
      description:
        "Frontend development for MyRide, a ride-sharing application.",

      githubUrl: "https://github.com/AM-creator/MyRide-Frontend.git",
      imgUrl: myRide,
      webUrl: "https://am-creator.github.io/MyRide-Frontend",
    },
    {
      title: "EasyNote",
      description: "A full-Stack note-taking web application.",
      imgUrl: easyNote,
      githubUrl: "https://github.com/AM-creator/EasyNote.git",
    },
  ];

  const VRProjects = [
    {
      title: "Room to Read",
      videoUrl: "https://www.youtube.com/embed/imKNfHtmZmw?si=wP7qPCk_Ajmw2T_w",
      description:
        "A VR project created using Mozilla Hubs for NGO Room to Read. The user will experience the profound impact of quality education through two alternative futures and can choose to make a donation to the organization at the end of the experience.",
    },
    {
      title: "Game Room",
      videoUrl:
        " https://www.youtube.com/embed/Niqw7q4W47A?si=sl57XGkEFsz3KeLt",
      description:
        "A VR mini-game created in Unity for Google Cardboard where the player can collect gems and shoot bowling pins to score points in a game room.",
    },
    {
      title: "Elixir of Eternity",
      videoUrl:
        " https://www.youtube.com/embed/-2_T96YvQzg?si=3mf5Cy8IMhcHFuXz",
      description:
        "An Oculus VR mini-game in which the user is tasked with figuring out the order and amount of ingredients for the immortality Elixir.",
    },
  ];
  const researchProjects = [
    {
      title: "MongDB on EC2 VS AWS DocumentDB",
      description:
        "Comparative Study of MongoDB and Amazon DocumentDB in Write-Heavy Scenarios",
      imgUrl: projectr1,
      githubUrl:
        "https://github.com/AM-creator/Comparative-Study-of-Self-hosted-MongoDB-on-EC2-and-AWS-DocumentDB.git",
    },
    {
      title: "AWS Lambda Transform-Load-Query Data Pipeline",
      description:
        "Case study of a multi-stage data processing pipeline using AWS Lambda services to perform extract and transform-load-query tasks.",
      imgUrl: projectr2,
      githubUrl:
        "https://github.com/AM-creator/Case-Study-of-AWS-Data-Processing-Pipeline.git",
    },

    {
      title: "User Experience",
      description:
        "Mu, Y. (2022). Why and How Do Users Use Bullet Screen? A Qualitative Study Paper/Poster at AEJMC 2022, Detroit, MI.",
      imgUrl: projectr3,
    },

    {
      title: "Media Influence",
      description:
        "Alpert, J., Chen, H., Chung, Y., & Mu, Y. (2021). A content analysis of e-cigarette posts using the Content Appealing to Youth (CAY) Index. Substance Use & Misuse. DOI: 10.1080/10826084.2021.1899233",
      imgUrl: projectr4,
    },
    {
      title: "Audiance Research",
      description:
        "Mu, Y. (2020). Urban Audiences’ Consumption of Rural Self-Media in China. Paper/Poster at AEJMC 2020, San Francisco, CA.",
      imgUrl: projectr5,
    },
  ];

  useEffect(() => {
    if (isRotating) {
      const newIntervalId = setInterval(() => {
        setActiveTab((prevTab) => {
          const currentIndex = tabs.indexOf(prevTab);
          const nextIndex = (currentIndex + 1) % tabs.length;
          return tabs[nextIndex];
        });
      }, 5000);

      return () => clearInterval(newIntervalId);
    }
  }, [isRotating, tabs]);

  const handleTabSelect = (eventKey) => {
    setActiveTab(eventKey);
    setIsRotating(false);
    clearInterval(intervalId);
    setIntervalId(null);
  };

  useEffect(() => {
    const projectsSection = projectsSectionRef.current;

    const handleInteraction = () => {
      setIsRotating(false);
      clearInterval(intervalId);
      setIntervalId(null);
    };

    // Listen for various interaction events within project image boxes and videos
    const projectImageBoxes = projectsSection.querySelectorAll(".proj-imgbx");
    const projectVideos = projectsSection.querySelectorAll(".video");

    projectImageBoxes.forEach((box) => {
      box.addEventListener("mouseenter", handleInteraction);
      box.addEventListener("click", handleInteraction);
    });

    projectVideos.forEach((video) => {
      video.addEventListener("mouseenter", handleInteraction);
      video.addEventListener("click", handleInteraction);
    });

    return () => {
      // Clean up event listeners
      projectImageBoxes.forEach((box) => {
        box.removeEventListener("mouseenter", handleInteraction);
        box.removeEventListener("click", handleInteraction);
      });

      projectVideos.forEach((video) => {
        video.removeEventListener("mouseenter", handleInteraction);
        video.removeEventListener("click", handleInteraction);
      });
    };
  }, [intervalId]);

  return (
    <section className="project" id="projects" ref={projectsSectionRef}>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <div className="section-title">
                    <h2>Projects</h2>
                  </div>

                  <Tab.Container
                    id="projects-tabs"
                    activeKey={activeTab}
                    onSelect={handleTabSelect}
                  >
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center flex-column flex-md-row"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">VR Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Research</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {webProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {VRProjects.map((project, index) => {
                            return (
                              <VideoPlayer
                                key={index}
                                title={project.title}
                                videoUrl={project.videoUrl}
                                description={project.description}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {researchProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
      <img
        className="background-image-left"
        src={colorSharp}
        alt="background"
      />
    </section>
  );
};
