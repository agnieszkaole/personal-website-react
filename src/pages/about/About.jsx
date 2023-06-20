import React from "react";
import photo from "../../assets/img/AgnieszkaOleLegitymacjaLP.jpg";
import pdf from "../../assets/pdf/Agnieszka_Ole_CV.pdf";
import Button from "../../components/ui/button/Button";
import styled from "styled-components";
import "../../styles/style.css";

const AboutPage = styled.div`
  position: relative;
  padding: 50px 20px;
  color: #37306b;

  .title {
    color: #37306b;
    text-align: center;
  }

  .about-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* max-width: 1100px; */
    margin: 50px auto;
    text-align: center;

    .image-decor {
      position: relative;

      &::before {
        content: "";
        position: absolute;
        top: -30px;
        left: 0;
        width: 160px;
        height: 215px;
        border-radius: 10px;
        background: linear-gradient(
          90deg,
          rgba(87, 79, 151, 0.7) 0%,
          rgba(158, 71, 132, 0.7) 50%
        );
        z-index: -1;
      }

      img {
        border-radius: 10px;
        width: 160px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        margin: 0 35px;
      }
    }

    p {
      font-size: 18px;
      line-height: 1.4;
      margin: 12px auto;
      max-width: 500px;
    }

    p:first-of-type {
      font-weight: 700;
      margin-bottom: 30px;
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
          <div className="about-image">
            <div className="image-decor">
              <img src={photo} alt="" />
            </div>
          </div>
          <div className="about-text">
            <p>Cześć, mam na imię Agnieszka. </p>
            <p>
              Tworzę responsywne strony internetowe z&nbsp;wykorzystaniem
              <span className="underline">
                {" "}
                HTML5, CSS3, JavaScript, jQuery
              </span>
              .
            </p>
            <p>
              Obecnie jestem w&nbsp;trakcie nauki
              <span className="underline"> React.js</span>. W&nbsp;przyszłości
              chciałabym nauczyć m.in. Node.js.
            </p>
            <p>
              Moją mocną stroną jest
              <span className="underline">
                {" "}
                umiejętność analitycznego myślenia i&nbsp;komunikatywność
              </span>
              .
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
