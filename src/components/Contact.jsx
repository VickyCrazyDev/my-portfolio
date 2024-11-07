import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 50px;
  background: #f2f1ed;
  color: #000;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const Contact = () => {
  return (
    <ContactSection>
      <SocialLinks>
        <a href="https://linkedin.com/in/vigneshwaran-viswanathan-3933861a1" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} color="#000" /></a>
        <a href="https://github.com/vigneshwaranviswa" target="_blank" rel="noopener noreferrer"><FaGithub size={30} color="#000" /></a>
        <a href="mailto:vigneshviswa5360@gmail.com"><FaEnvelope size={30} color="#000" /></a>
      </SocialLinks>
    </ContactSection>
  );
};

export default Contact;
