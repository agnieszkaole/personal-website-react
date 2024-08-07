import React from "react";
import styled from "styled-components";
import CardComponent from "../../components/ui/card/Card";
import { projects } from "../../utils/constants/constants";

const ProjectsPage = styled.div`
  padding: 30px 20px;
  background: linear-gradient(0deg, rgb(14, 2, 47) 20%, rgb(0, 2, 22));

  .title {
    color: rgb(108, 68, 217);
    text-align: center;
  }

  .projects-container {
    max-width: 1200px;
    margin: 30px auto 0;
  }

  .btn-container {
    margin-top: 10px;
  }

  .btn-project {
    margin: 5px;
  }
`;

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <ProjectsPage>
        <h2 className="title">Projects</h2>
        <div className="projects-container">
          {projects.map((project) => (
            <CardComponent key={project.id} project={project} />
          ))}
        </div>
      </ProjectsPage>
    </section>
  );
};

export default Projects;
