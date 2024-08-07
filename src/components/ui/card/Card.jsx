import React from "react";
import styled from "styled-components";
import { projects } from "../../../utils/constants/constants";
// import { Button } from "react-scroll";
import Button from "../button/Button.js";

const CardComponent = styled.div`
  /* height: 500px;
  width: 90%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto;
  transition: 0.3s;
  overflow: hidden;
  position: relative;
  box-shadow: 2px 2px 15px -3px rgba(0, 0, 0, 0.1);
  background: #303055ba;
  border-radius: 10px;
  max-width: 900px;
  width: 100%;
  /* height: 250px; */
  padding: 20px 30px;

  .project-description {
    flex-basis: 50%;
    h1 {
      margin: 10px auto;
    }
  }

  /* .project-description p {
    padding: 20px;
  } */

  .project-image {
    position: relative;
    bottom: 0;
    left: 0;
    flex-basis: 50%;
    img {
      width: 100%;
    }
  }
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Card = ({ project }) => (
  <CardComponent>
    <div className="project-description">
      <h1>{project.title}</h1>
      <p>{project.text}</p>

      <a href={project.live} target="_blank" rel="noreferrer">
        <Button>LIVE</Button>
      </a>
    </div>{" "}
    <div className="project-image">
      <img src={project.photo} alt={`Project ${project.id}`} />
    </div>
  </CardComponent>
);

export default Card;
