import React from "react";
import styled from "styled-components";

const FooterComponent = styled.footer`
  background-color: #37306b;
  text-align: center;
  padding: 40px 10px;
`;

const Footer = () => {
  return (
    <FooterComponent>
      <p>AGNIESZKA OLE © 2023 WSZELKIE PRAWA ZASTRZEŻONE.</p>
    </FooterComponent>
  );
};

export default Footer;
