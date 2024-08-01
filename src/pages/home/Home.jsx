import React from "react";
import ParticlesBackground from "../../components/ui/particlesBg/ParticlesBackground";
import { LinearGradient } from "react-text-gradients";
import { Link } from "react-scroll";
import Button from "../../components/ui/button/Button";
import "../../styles/variables.css";
import styled from "styled-components";
import photo from "../../assets/img/AgnieszkaOleLegitymacjaWeb-removebg-preview_hag.png";

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
      font-size: 1.2rem;
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

    .heading-photo-container {
      width: 200px;
      height: 200px;
      /* border: 1px solid rgba(255, 255, 255, 0.3); */
      /* border-radius: 50%; */
      overflow: hidden;
      margin: 0 auto;
      /* background-color: var(--primary-color); */
      background-color: transparent;
      img {
        width: 90%;
        margin-top: 16px;
        margin-left: 10px;
      }
    }
  }

  @keyframes wheel {
    to {
      opacity: 0;
      top: 60px;
    }
  }

  @-webkit-keyframes wheel {
    to {
      opacity: 0;
      top: 60px;
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
            {/* <div className="heading-photo-container">
              <img src={photo} alt="" />d
            </div> */}
            <h1>Hello, I'm Agnieszka Ole</h1>
            <p>
              <LinearGradient gradient={["to left", "#17acff ,#d068ff"]}>
                <span>Front-end developer</span>
              </LinearGradient>
            </p>
            <p>
              with a&nbsp;passion for creating engaging and user-friendly
              web&nbsp;experiences.
            </p>{" "}
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              <Button className="btn-project btn-project--dark">
                Contact me{" "}
              </Button>
            </Link>
          </div>
        </div>
        {/* <div className="particles-bg"></div> */}
      </HomePage>
    </section>
  );
};

export default Home;
