import React from "react";
import styled from "styled-components";
import photo from "../../assets/img/aryan-dhiman-iGLLtLINSkw-unsplash.jpg";

const ContactPage = styled.div`
  padding: 70px 20px 120px;
  position: relative;
  min-height: 95vh;
  /* background: rgb(102, 52, 127); */
  /* background: linear-gradient(
    0deg,
    rgb(55, 48, 107) 0%,
    rgba(158, 71, 132, 1) 90%
  ); */
  background: url(${photo});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: linear-gradient(
      90deg,
      rgba(87, 79, 151, 0.5) 0%,
      rgba(158, 71, 132, 0.5) 50%
    );
  }

  .title {
    font-size: 24px;
  }

  h3 {
    font-size: 16px;
  }
  .content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 95%;
    margin: 0 auto;
    /* color: rgb(55, 48, 107); */
    background: rgba(255, 255, 255, 0.3);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 50px 20px;
    font-size: 20px;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.9);

    @media (min-width: 640px) {
      width: 600px;
    }

    @media (min-width: 1024px) {
      padding: 40px 100px;
      width: 800px;
      margin: 0 auto;

      .data-container {
        position: relative;
        z-index: 1;
      }

      .title {
        font-size: 35px;
        margin-bottom: 30px;
        text-transform: none;
      }

      h3 {
        margin: 30px 0;
        font-size: 24px;
      }



  }


    }
    a {
      color: #fff;
      text-decoration: none;
    }
    hr {
      height: 4px;
      width: 100%;
      border: none;
      border-radius: 10px;
      background: #fff;
      margin: 30px auto;
    }
  }
`;

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <ContactPage>
        <div className="content">
          <div className="data-container">
            <h2 className="title">Skontaktuj się ze mną poprzez:</h2>
            <div>
              <h3>
                E-mail: <br />
                <a href="mailto: agnieszka1ole@gmail.com">
                  agnieszka1ole@gmail.com
                </a>
              </h3>
              <h3>
                LinkedIn:
                <br />{" "}
                <a
                  href="https://www.linkedin.com/in/agnieszka-ole/"
                  target="_blank"
                >
                  linkedin.com/in/agnieszka-ole/
                </a>
              </h3>
              <hr></hr>
              <h2 className="title">Kod do pobrania:</h2>
              <h3>
                GitHub:
                <br />
                <a href="https://www.github.com/agnieszkaole" target="_blank">
                  github.com/agnieszkaole
                </a>
              </h3>
            </div>
          </div>
        </div>
      </ContactPage>
    </section>
  );
};

export default Contact;
