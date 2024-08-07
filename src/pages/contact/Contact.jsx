import React from "react";
import styled from "styled-components";
import { LinearGradient } from "react-text-gradients";
import photo from "../../assets/img/aryan-dhiman-iGLLtLINSkw-unsplash.jpg";

const ContactPage = styled.div`
  padding: 35px 5px;
  position: relative;
  text-align: center;
  /* background-color: rgba(13, 15, 38, 0.8); */
  background: linear-gradient(0deg, rgb(0, 2, 22), rgb(14, 2, 47) 20%);
  .content {
    margin: 0 auto;
    color: #fff;
    width: 100%;
    h2 {
      font-size: 1.6rem;
      color: #fff;
      margin: 10px auto;
    }
    p {
      font-size: 1rem;
    }

    ul {
      list-style: none;
    }

    li {
      margin: 20px auto;
      /* font-weight: 700; */
      font-size: 1rem;
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

  .title-container {
    position: relative;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    /* border: 1px solid rgba(255, 255, 255, 0.15); */
    padding: 30px 5px;
    font-size: 20px;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
    width: 90%;
    max-width: 800px;
    background: url(/static/media/aryan-dhiman-iGLLtLINSkw-unsplash.7076d01a29d8abf815dd.jpg);
    background-size: auto;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 25px auto;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      background-color: rgba(64, 2, 125, 0.8);
    }
  }

  .data-container {
    /* background: rgba(0, 0, 0, 0.2); */
    position: relative;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 2px solid rgb(64, 2, 125);
    padding: 15px 10px;
    font-size: 20px;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
    width: 90%;
    max-width: 800px;
    margin: 25px auto;
  }

  @media (min-width: 640px) {
    .content {
      padding: 20px;
      width: 700px;
      margin: 0 auto;
      li,
      p {
        font-size: 1.2rem;
      }
    }
  }
  @media (min-width: 1200px) {
    .content {
      width: 800px;
      margin: 0 auto;
      h2 {
        font-size: 1.8rem;
      }
      li,
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <ContactPage>
        <div className="content">
          <div className="title-container">
            <h2>GET IN TOUCH</h2>
            <p>Please feel free to reach me at:</p>
          </div>
          <div className="data-container">
            <div>
              <ul>
                <li>
                  <a href="mailto: agnieszka1ole@gmail.com">
                    agnieszka1ole@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/agnieszka-ole/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/agnieszka-ole/
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.github.com/agnieszkaole"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/agnieszkaole
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ContactPage>
    </section>
  );
};

export default Contact;
