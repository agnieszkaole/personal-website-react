import React from "react";
import Button from "../../components/ui/button/Button";
import hero from "../../assets/img/undraw_remotely_-2-j6y2.svg";
import styled from "styled-components";

const HomePage = styled.div`
  position: relative;
  min-height: 100vh;
  background: rgb(55, 48, 107);
  background: linear-gradient(
    180deg,
    rgba(55, 48, 107, 1) 0%,
    rgba(102, 52, 127, 1) 90%
  );
  /* background: linear-gradient(
    90deg,
    rgba(87, 79, 151, 0.7) 0%,
    rgba(158, 71, 132, 0.7) 50%
  ); */
  background-attachment: fixed;
  .content {
    padding: 150px 10px 0;
    margin: 0 auto;
    text-align: center;
    h1 {
      font-size: 26px;
    }

    h2 {
      font-size: 16px;
      font-weight: 400;
      margin-top: 8px;
    }

    p {
      margin: 40px auto;
      max-width: 500px;
      font-size: 16px;
    }

    .heading-container {
      flex-basis: 50%;
      position: relative;
      top: -30px;
    }

    .hero-container {
      display: none;
    }

    .hero-mobile {
      margin: 0 auto;
      width: 250px;
      img {
        width: 100%;
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

  @media (min-width: 360px) {
    .content {
      h1 {
        font-size: 40px;
      }

      h2 {
        font-size: 24px;
        font-weight: 400;
      }

      p {
        margin: 40px auto 50px;
        font-size: 20px;
        max-width: 90%;
      }
    }
  }

  @media (min-width: 1024px) {
    .content {
      padding: 220px 60px 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 1200px;
      text-align: left;

      h1 {
        font-size: 60px;
      }

      h2 {
        font-size: 32px;
        font-weight: 400;
      }

      p {
        margin: 40px 0 50px;
        max-width: 500px;
        font-size: 18px;
        max-width: 90%;
      }
      .hero-container {
        display: block;
        flex-basis: 50%;
        position: relative;
        bottom: 20px;
        img {
          max-width: 100%;
        }
      }
      .hero-mobile {
        display: none;
      }
    }
    .mouse {
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      bottom: 30px;
      width: 30px;
      height: 70px;
      border: 2px solid #ffffff;
      border-radius: 60px;
      &::before {
        content: "";
        width: 8px;
        height: 8px;
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #ffffff;
        border-radius: 50%;
        opacity: 1;
        animation: wheel 2s infinite;
        -webkit-animation: wheel 2s infinite;
      }
    }
  }

  @media (min-width: 1200px) {
    .content {
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
    }
  }

  @media (min-width: 1400px) {
    .content {
      /* padding: 230px 60px 0px; */
    }
  }

  @media (min-width: 1900px) {
    .content {
      max-width: 1300px;
      padding: 260px 60px 0px;
    }
  }
`;

const Home = (props) => {
  return (
    <section className="home" id="home">
      <HomePage>
        <div className="content">
          <div className="heading-container">
            <h1>Agnieszka Ole</h1>
            <h2>Junior Front-end developer</h2>
            <p>
              Zapraszam do zapoznania się z&nbsp;moim portfolio <br /> oraz do
              współpracy.
            </p>
            <div className="hero-mobile">
              <img src={hero} alt="" />
            </div>

            <a href="#projects">
              <Button
                background="primary"
                color="primary"
                onClick={() => console.log("clicked")}
              >
                ZOBACZ PROJEKTY
              </Button>
            </a>
          </div>
          <div className="hero-container">
            <img src={hero} alt="" />
          </div>
        </div>
        <a href="#about">
          <div className="mouse"></div>
        </a>
      </HomePage>
    </section>
  );
};

export default Home;
