import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #007bff;
  color: #fff;
  text-align: center;
  padding: 1rem 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return <FooterContainer>Developed by Dragos Ungureanu</FooterContainer>;
};

export default Footer;
