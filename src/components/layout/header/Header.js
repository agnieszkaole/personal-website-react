import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import styled from "styled-components";

const Navbar = styled.nav`
  display: none;

  &.visible-menu {
    display: block;
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    z-index: 998;
    background: rgba(55, 48, 107, 0.9);
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    li {
      padding: 20px 0;
      font-size: 18px;
      text-align: center;
      overflow: hidden;
      position: relative;
      transition: 0.3s;

      &:hover {
        cursor: pointer;
        font-weight: 700;
      }

      &::before {
        transition: 0.3s;
        height: 2px;
        content: "";
        position: absolute;
        background-color: #fff;
        left: 10px;
        bottom: 10px;
        width: 0%;
      }

      &:hover::before {
        position: absolute;
        width: 60%;
        left: 50%;
        bottom: 10px;
        display: block;
        transform: translateX(-50%);
      }
      &.active::before {
        position: absolute;
        width: 60%;
        left: 50%;
        bottom: 10px;
        display: block;
        transform: translateX(-50%);
      }

      &.active {
        font-weight: 700;
      }

      /* &:hover a {
        font-weight: 700;
      } */

      /* &::before {
        height: 2px;
        content: "";
        position: absolute;
        background-color: #fff;
        left: 10px;
        bottom: 10px;
        width: 0%;
        transition: 0.3s;
        cursor: pointer;
        &:hover {
          position: absolute;
          width: 60%;
          left: 50%;
          bottom: 10px;
          display: block;
          transform: translateX(-50%);
        }
      } */

      /* &.active::before {
        position: absolute;
        width: 60%;
        left: 50%;
        bottom: 10px;
        display: block;
        transform: translateX(-50%);
      } */

      /* a {
        display: block;
        text-decoration: none;
        color: #fff;
        font-size: 18px;
        transition: 0.3s;
      } */
    }
  }

  @media (min-width: 1024px) {
    display: block;
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    z-index: 998;
    background: rgba(55, 48, 107, 0.9);
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);

    ul {
      height: unset;
      flex-direction: row;
      li {
        width: 200px;
        &:first-of-type() a {
          font-weight: 700;
        }
      }
    }
  }
`;

const HamburgerContainer = styled.div`
  border-radius: 50%;
  top: 20px;
  position: fixed;
  right: 10px;
  width: 80px;
  height: 80px;
  background: rgb(158, 71, 132);
  z-index: 999;

  .hamburger {
    position: fixed;
    top: 37px;
    right: 28px;
    width: 45px;
    height: 40px;
    background: none;
    border: none;
    appearance: none;
    cursor: pointer;
    z-index: 999;

    span {
      position: absolute;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: #fff;
      border-radius: 8px;
      transition: 0.2s;

      &:nth-of-type(1) {
        top: 0;
      }
      &:nth-of-type(2) {
        top: 20px;
      }
      &:nth-of-type(3) {
        bottom: -4px;
      }
    }

    &.active span:nth-of-type(1) {
      transform: translateY(20px) rotate(-45deg);
    }

    &.active span:nth-of-type(2) {
      opacity: 0;
    }

    &.active span:nth-of-type(3) {
      transform: translateY(-20px) rotate(45deg);
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

const Header = () => {
  const [burger_class, setBurgerClass] = useState("hamburger");
  const [menu_class, setMenuClass] = useState("");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("hamburger active");
      setMenuClass("visible-menu");
    } else {
      setBurgerClass("hamburger");
      setMenuClass("");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <header>
      <div className="wrapper">
        <HamburgerContainer>
          <div className={burger_class} onClick={updateMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </HamburgerContainer>
        <Navbar className={menu_class}>
          <ul className={isMenuClicked ? "visible-menu" : ""}>
            <li>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                STRONA GŁÓWNA
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                O MNIE
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                PROJEKTY
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                KONTAKT
              </Link>
            </li>
          </ul>
        </Navbar>
      </div>
    </header>
  );
};
export default Header;
