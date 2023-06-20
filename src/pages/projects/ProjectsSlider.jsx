import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { projects } from "../../utils/constants/constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../../components/ui/button/Button";

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  // autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const CardComponent = styled.div`
  /* max-height: 500px; */
  max-width: 350px;
  margin: 0 auto;
  border-radius: 8px;
  transition: 0.3s;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);

  @media (min-width: 960px) {
    max-width: 90%;
  }

  .project-description {
    background: #37306b;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .project-description p {
    padding: 20px;
    min-height: 100px;
  }

  .project-image {
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    /* height: 50%; */
    height: 40%;
    min-height: 200px;
  }

  .project-image img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-bottom: 1px solid #fff;
  }

  .btn-project {
    width: 115px;
    height: 30px;
    margin: 10px 10px;
  }

  .btn-project--dark {
    background-color: #9e4784;
    color: #fff;
  }
  .btn-project--dark:hover {
    background-color: #fff;
    color: #9e4784;
  }
`;

const ProjectsSlider = () => {
  return (
    <Slider {...settings}>
      {projects.map((project, index) => (
        <CardComponent key={index}>
          <div className="project-image">
            <img src={project.photo} />
          </div>
          <div className="project-description">
            <p>{project.text}</p>
            <div className="btn-container">
              <a href={project.github} target="_blank">
                <Button className="btn-project">KOD</Button>
              </a>
              <a href={project.live} target="_blank">
                <Button className="btn-project btn-project--dark">LIVE</Button>
              </a>
            </div>
          </div>
        </CardComponent>
      ))}
    </Slider>
  );
};
export default ProjectsSlider;
