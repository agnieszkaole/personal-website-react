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
    z-index: 1;
  }
  .content {
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    height: 100vh;
    background-color: rgba(13, 15, 38, 0.6);

    h1 {
      font-size: 1.1rem;
      margin-bottom: 10px;
      text-align: center;
    }

    p {
      font-size: 1rem;
      line-height: 1.3;
      margin-bottom: 8px;
      text-align: center;
      max-width: 360px;
    }

    span {
      /* color: #5e47fd; */
      font-weight: 700;
      font-size: 1.9rem;
      line-height: 1.1;
    }
    .heading-container {
      position: relative;
      z-index: 2;
      max-width: 650px;
      /* background-color: rgba(13, 15, 38, 0.8); */
      padding: 5px;
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
    bottom: 30px;
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

  @media (min-width: 640px) {
    .content {
      background-color: rgba(13, 15, 38, 0.8);
      h1 {
        font-size: 1.4rem;
      }
      p {
        font-size: 1.2rem;
        max-width: 440px;
        margin-bottom: 15px;
      }
      span {
        font-size: 2.5rem;
      }
    }
  }

  @media (min-width: 768px) {
    .content {
      h1 {
        font-size: 1.6rem;
      }
      p {
        font-size: 1.4rem;
        max-width: 600px;
      }
      span {
        font-size: 3rem;
      }
    }
  }

  @media (min-width: 1024px) {
    .content {
      margin: 0 auto;

      padding: 40px;
      height: 100vh;
    }
  }
  @media (min-width: 1200px) {
    .content {
      left: 80px;
      margin: 0;
      h1,
      p {
        text-align: left;
      }

      h1 {
        font-size: 1.6rem;
        max-width: 580px;
      }
      p {
        font-size: 1.6rem;
        max-width: 580px;
      }
      span {
        font-size: 3.3rem;
      }
    }
  }
  @media (min-width: 1920px) {
    .content {
      .heading-container {
        max-width: 800px;
        padding: 15px;
      }
      h1 {
        font-size: 2rem;
      }
      p {
        font-size: 1.6rem;
        max-width: 800px;
      }
      span {
        font-size: 4.4rem;
      }
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
              with a&nbsp;passion for creating engaging and&nbsp;user-friendly
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
