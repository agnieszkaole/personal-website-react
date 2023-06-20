import React from "react";
import styled from "styled-components";

const ButtonComponent = styled.button`
  font-weight: 700;
  border-radius: 8px;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 14px;
  font-family: "Montserrat", Arial, sans-serif;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
  user-select: none;
  margin: 15px 0;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 200px;
  height: 50px;
  background-color: ${(props) =>
    props.background === "primary" ? "#9e4784" : "link" ? "#fff" : "#fff"};
  color: ${(props) =>
    props.color === "primary" ? "#fff" : "link" ? "#9e4784" : "#fff"};

  @media (min-width: 1024px) {
    width: 230px;
    height: 65px;
    font-size: 16px;
  }

  &:hover {
    background-color: ${(props) =>
      props.background === "primary" ? "#ad5492" : "#9e4784"};
    color: ${(props) =>
      props.color === "primary" ? "#fff" : " link" ? "#fff" : "#9e4784"};
  }

  a {
    text-decoration: none;
  }
`;

const Button = ({ type, background, className, color, onClick, children }) => {
  return (
    <ButtonComponent
      type={type ? type : "button"}
      background={background}
      className={className ? `btn ${className}` : "btn"}
      onClick={onClick}
      color={color}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;
