import React from "react";
import pdf from "../../assets/pdf/Agnieszka_Ole_CV_dart.pdf";
import Button from "../../components/ui/button/Button";
import styled from "styled-components";
import "../../styles/style.css";
import "../../styles/variables.css";

const AboutPage = styled.div`
  position: relative;
  padding: 50px 20px;
  color: #ffffff;

  .title {
    color: var(--secondary-color);
    text-align: center;
  }

  .about-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 750px;
    margin: 50px auto;
    text-align: center;

    img {
      border-radius: 10px;
      width: 160px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      margin: 0 35px;
    }

    p {
      font-size: 18px;
      line-height: 1.5;
      margin: 12px auto;
      /* max-width: 500px; */
    }

    p:first-of-type {
      font-weight: 700;
      margin-bottom: 25px;
    }

    @media (min-width: 1024px) {
      flex-direction: row;
      text-align: left;

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
        <h2 className="title">O mnie</h2>
        <div className="about-container">
          {/* <div className="about-image">
            <img src={photo} alt="" />
          </div> */}
          <div className="about-text">
            <p>Hello! I'm Agnieszka Ole.</p>
            <p>
              I create responsive websites using
              <span className="underline">HTML5, CSS3, JavaScript, React</span>.
            </p>
            <p>
              I have started my adventure in web development driven by a
              curiosity about how websites work and a passion for bringing
              creative ideas to life through code.
            </p>
            <p>
              My goal is to
              <span className="underline">create web experiences</span> that are
              not only <span className="underline">visually beautiful</span> but
              also
              <span className="underline">
                intuitive and enjoyable for users.
              </span>
            </p>
          </div>
        </div>
        <a href={pdf} target="_blank">
          <Button
            style={{ textAlign: "center" }}
            background="primary"
            color="primary"
            onClick={() => console.log("clicked")}
          >
            POBIERZ CV
          </Button>
        </a>
      </AboutPage>
    </section>
  );
};

export default About;
