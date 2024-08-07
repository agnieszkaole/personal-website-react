import React from "react";
import photo from "../../assets/img/AgnieszkaOleLegitymacjaWeb-removebg-preview_hag.png";
import styled from "styled-components";
import "../../styles/style.css";
import "../../styles/variables.css";
import { LinearGradient } from "react-text-gradients";

const AboutPage = styled.div`
  position: relative;
  padding: 50px 20px 30px;
  color: #ffffff;

  .title {
    /* color: var(--secondary-color); */
    text-align: center;
  }

  .about-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: 40px auto;

    p {
      font-size: 1rem;
      line-height: 1.4;
      margin: 18px auto;
      text-align: center;
    }

    h2 {
      font-size: 1rem;
      line-height: 1.4;
      text-align: center;
    }

    span {
      font-weight: 700;
    }

    .about-text {
      flex-basis: 80%;
      padding: 10px;
    }

    .heading-photo-container {
      width: 180px;
      height: 180px;
      /* border: 1px solid rgba(255, 255, 255, 0.3); */
      border-radius: 50%;
      overflow: hidden;
      margin: 15px;
      background-color: #6648b9;
      /* background-color: transparent; */
      img {
        width: 90%;
        margin-top: 14px;
        margin-left: 4px;
      }
    }

    @media (min-width: 768px) {
      .about-text {
        max-width: 670px;
      }
    }
    @media (min-width: 1024px) {
      flex-direction: row;
      /* text-align: left; */
      h2,
      p {
        text-align: left;
      }
      p {
        max-width: unset;
      }
    }
    @media (min-width: 1200px) {
      h2,
      p {
        font-size: 1.2rem;
      }
      .about-text {
        max-width: 820px;
        padding: 20px;
      }
    }
    @media (min-width: 1400px) {
      h2,
      p {
        font-size: 1.4rem;
      }
      .about-text {
        max-width: 1000px;
        padding: 20px;
      }
    }
  }

  a {
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translate(-50%);
  }
`;

const About = () => {
  return (
    <section className="about" id="about">
      <AboutPage>
        {/* <h2 className="title">About</h2> */}
        <div className="about-container">
          <div className="heading-photo-container">
            <img src={photo} alt="" />
          </div>
          <div className="about-text">
            <h2>
              Hi! I'm a Front-end Developer based in Warsaw. I&nbsp;create
              responsive websites using technologies such as HTML5, CSS3,
              JavaScript, React, WordPress.
            </h2>
            <p>
              I have started my adventure in web development driven by
              a&nbsp;curiosity about how websites work and a&nbsp;passion for
              bringing creative ideas to life through code.
            </p>
            <p>
              My goal is to create web experiences that are not only
              <LinearGradient gradient={["to left", "#2e62fd ,#d068ff"]}>
                <span> visually beautiful </span>
              </LinearGradient>
              but also
              <LinearGradient gradient={["to left", "#2e62fd ,#d068ff"]}>
                <span> intuitive and enjoyable for users</span>
              </LinearGradient>
              .
            </p>
          </div>
        </div>
      </AboutPage>
    </section>
  );
};

export default About;
