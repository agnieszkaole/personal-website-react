import React from "react";
import ParticlesBackground from "../../components/ui/particlesBg/ParticlesBackground";
import { LinearGradient } from "react-text-gradients";
import { Link } from "react-scroll";
// import Button from "../../components/ui/button/Button";
import "../../styles/variables.css";
import styled from "styled-components";

import pdf from "../../assets/pdf/Agnieszka_Ole_CV_EN.pdf";
import Button from "../../components/ui/button/Button";

const HomePage = styled.div`
  position: relative;
  display: flex;

  /* justify-content: center; */
  align-items: center;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  z-index: 1;

  .particles-bg {
    position: relative;
    /* flex-basis: 50%; */
    /* width: 500px; */
    z-index: 1;
  }
  .content {
    position: relative;
    left: 80px;
    /* flex-basis: 50%; */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    height: 100vh;
    /* max-height: 450px; */
    /* margin: 0 auto; */
    /* max-width: 600px; */
    background-color: rgba(13, 15, 38, 0.8);
    /* border: 1px solid rgba(255, 255, 255, 0.2); */
    /* border-left: 1px solid rgba(255, 255, 255, 0.2); */
    /* border-right: 1px solid rgba(255, 255, 255, 0.2); */
    border-radius: 5px;

    h1 {
      font-size: 1.5rem;
      margin-bottom: 10px;
      /* text-align: center; */
    }

    p {
      font-size: 1.1rem;
      line-height: 1.4;
    }

    span {
      /* color: #5e47fd; */
      font-weight: 700;
      font-size: 3.4rem;
    }
    .heading-container {
      position: relative;
      z-index: 2;
      max-width: 650px;
      background-color: d rgba(13, 15, 38, 0.8);
      padding: 15px;
    }

    .btn--secondary {
      color: #fff;
      background-color: transparent;
      border: 2px solid rgb(75, 86, 251);

      &:hover {
        background-color: rgb(75, 86, 251);
        border: 2px solid rgb(75, 86, 251);
      }
    }
  }

  .arrow,
  .arrow:before {
    position: absolute;
    left: 50%;
  }
  .arrow {
    width: 30px;
    height: 30px;
    bottom: 50px;
    margin: -20px 0 0 -20px;
    border-left: none;
    border-top: none;
    border-right: 2px #fff solid;
    border-bottom: 2px #fff solid;
    transform: rotate(45deg);
    cursor: pointer;
    &:before {
      content: "";
      width: 15px;
      height: 15px;
      top: 50%;
      margin: -10px 0 0 -10px;
      border-left: none;
      border-top: none;
      border-right: 1px #fff solid;
      border-bottom: 1px #fff solid;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-name: arrow;
    }
  }
  @keyframes arrow {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate(-10px, -10px);
    }
  }

  @media (min-width: 1200px) {
    /* .content {
      h1 {
        font-size: 70px;
      }

      h2 {
        font-size: 38px;
        font-weight: 400;
      }

      p {
        margin: 40px 0 50px;
        max-width: 500px;
        font-size: 18px;
        max-width: 90%;
      }
    } */
  }

  @media (min-width: 1400px) {
    .content {
      /* padding: 230px 60px 0px; */
    }
  }

  @media (min-width: 1900px) {
    .content {
      /* max-width: 1300px; */
    }
  }
`;

const Home = () => {
  return (
    <section className="home" id="home">
      <HomePage>
        <ParticlesBackground />
        <div className="content">
          <div className="heading-container">
            <h1>Hello, I'm Agnieszka Ole</h1>
            <p>
              <LinearGradient gradient={["to left", "#2e62fd ,#d068ff"]}>
                <span>Front-end developer</span>
              </LinearGradient>
            </p>
            <p>
              with a&nbsp;passion for creating engaging and user-friendly
              web&nbsp;experiences.
            </p>{" "}
            <div className="btn-container">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <Button>Let's talk</Button>
              </Link>
              <a href={pdf} target="_blank" rel="noreferrer">
                <Button className="btn btn--secondary">Download CV</Button>
              </a>
            </div>
          </div>{" "}
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <div className="arrow"></div>
          </Link>
        </div>

        {/* <div className="particles-bg"></div> */}
      </HomePage>
    </section>
  );
};

export default Home;
