import React from "react";
import styled from "styled-components";

const FooterComponent = styled.footer`
  background-color: var(--primary-color);
  text-align: center;
  padding: 20px 10px;

  p {
    font-weight: 700;
  }
`;

const Footer = () => {
  return (
    <FooterComponent>
      <p>AGNIESZKA OLE © 2024 All Rights Reserved</p>
    </FooterComponent>
  );
};

export default Footer;
