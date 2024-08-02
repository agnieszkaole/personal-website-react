import React from "react";
import photo from "../../assets/img/AgnieszkaOleLegitymacjaWeb-removebg-preview_hag.png";
import styled from "styled-components";
import "../../styles/style.css";
import "../../styles/variables.css";
import { LinearGradient } from "react-text-gradients";

const AboutPage = styled.div`
  position: relative;
  padding: 50px 20px;
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
    max-width: 1000px;
    margin: 50px auto;
    /* text-align: center; */

    /* img {
      border-radius: 10px;
      width: 160px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      margin: 0 35px;
    } */

    p {
      font-size: 18px;
      line-height: 1.5;
      margin: 18px auto;

      /* text-align: center; */
      /* max-width: 500px; */
    }

    h2 {
      line-height: 1.4;
    }

    span {
      font-weight: 700;
    }

    .about-text {
      flex-basis: 80%;
      padding: 25px;
    }

    .heading-photo-container {
      width: 180px;
      height: 180px;
      /* border: 1px solid rgba(255, 255, 255, 0.3); */
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto;
      background-color: #6648b9;
      /* background-color: transparent; */
      img {
        width: 90%;
        margin-top: 14px;
        margin-left: 4px;
      }
    }

    @media (min-width: 1024px) {
      flex-direction: row;
      /* text-align: left; */

      p {
        max-width: unset;
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
              Hi! I'm a Front-end Developer based in Warsaw. I create responsive
              websites using technologies such as HTML5, CSS3, JavaScript,
              React, WordPress.
            </h2>
            <p>
              I have started my adventure in web development driven by a
              curiosity about how websites work and a passion for bringing
              creative ideas to life through code.
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
