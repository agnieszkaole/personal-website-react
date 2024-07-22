import React from "react";
import styled from "styled-components";
import Card from "../../components/ui/card/Card";
import ProjectsSlider from "./ProjectsSlider";

const ProjectsPage = styled.div`
  padding: 50px 20px 50px;
  background: rgb(238, 238, 238);
  text-align: center;

  .title {
    color: #37306b;
  }

  .subtitle {
    color: #37306b;
  }
  .projects-container {
    display: block;
    max-width: 1200px;
    height: 500px;
    margin: 30px auto 0;
  }

  .slick-dots li button:before {
    width: 30px;
  }

  .slick-dots {
    bottom: -50px;
  }
  .slick-dots li {
    margin: 0 12px;
  }
  .slick-dots li button:before {
    font-size: 12px;
    line-height: 50px;
  }
  .slick-dots li.slick-active button:before {
    font-size: 18px;
  }
`;

const Projects = (props) => {
  return (
    <section className="projects" id="projects">
      <ProjectsPage>
        <h2 className="title">PROJEKTY</h2>
        <div className="projects-container">
          <ProjectsSlider />
        </div>
      </ProjectsPage>
    </section>
  );
};

export default Projects;
