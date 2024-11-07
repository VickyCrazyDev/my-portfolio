import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 50px;
  background: #f2f1ed;
  color: #000;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 500px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #000;
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #000;
  resize: none;
  height: 100px;
`;

const SubmitButton = styled(motion.button)`
  padding: 10px;
  font-size: 1rem;
  background: #000;
  color: #f2f1ed;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: #f2f1ed;
    color: #000;
    transition: 0.3s ease;
  }
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
