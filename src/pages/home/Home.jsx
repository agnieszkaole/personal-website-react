import React from "react";

import { Link } from "react-scroll";
import Button from "../../components/ui/button/Button";
import "../../styles/variables.css";
import styled from "styled-components";
import photo from "../../assets/img/AgnieszkaOleLegitymacjaWeb-removebg-preview_hag.png";
import { useEffect, useState } from "react";
import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles-slim";

const HomePage = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: var(--primary-color);
  .content {
    padding: 100px 10px 0;
    margin: 0 auto;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 90%;
    max-width: 558px;
    h1 {
      font-size: 2.5rem;
      text-align: center;
    }

    h2 {
      font-size: 20px;
      font-weight: 400;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 0.5rem;
      font-size: 1.2rem;
      text-align: center;
      width: 120px;
      color: var(--main-color);
      margin: 30px auto 5px;
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 20px;
        height: 2px;
        background: white;
      }
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        width: 20px;
        height: 2px;
        background: white;
      }
    }

    p {
      margin: 40px auto;
      /* max-width: 500px; */
      font-size: 16px;
      text-align: center;
      line-height: 1.5;
    }

    .heading-container {
      position: relative;
      top: -30px;
    }

    .heading-photo-container {
      width: 200px;
      height: 200px;
      /* border: 1px solid var(--secondary-color); */
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto;
      background-color: var(--secondary-color);
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

  @media (min-width: 360px) {
    .content {
      /* h1 {
        font-size: 40px;
      }

      h2 {
        font-size: 24px;
        font-weight: 400;
      } */

      p {
        margin: 40px auto 50px;
        font-size: 20px;
        /* max-width: 90%; */
      }
    }
  }

  @media (min-width: 1024px) {
    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      /* max-width: 1200px; */
      text-align: left;

      /* h1 {
        font-size: 60px;
      } */

      /* h2 {
        font-size: 32px;
        font-weight: 400;
      } */

      p {
        margin: 20px 0 50px;
        /* max-width: 500px; */
        font-size: 18px;
        /* max-width: 90%; */
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

const Home = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticlesEngine = async (initFunction) => {
      const { loadSlim } = await import("tsparticles");
      await initFunction(loadSlim);
    };

    initParticlesEngine(async (engine) => {
      await engine.loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <section className="home" id="home">
      <>
        return (
        {init && (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: "#0d47a1",
                },
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 6,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />
        )}
        ) ;
        <HomePage>
          <div className="content">
            <div className="heading-container">
              <div className="heading-photo-container">
                <img src={photo} alt="" />
              </div>

              <h2>Hello</h2>
              <h1>I'm Agnieszka</h1>

              <p>
                I'm a Front-end developer with a&nbsp;passion for creating
                engaging and user-friendly web&nbsp;experiences.
              </p>

              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              ></Link>
            </div>
          </div>
          <a href="#about">
            <div className="mouse"></div>
          </a>
        </HomePage>{" "}
      </>
    </section>
  );
};

export default Home;
