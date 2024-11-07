import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProfilePics from '../assets/ProfilePic.jpg'; // Adjust path if needed

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #000, #f2f1ed);
  color: #fff;
`;

const ProfileImage = styled(motion.img)`
  border-radius: 15%;
  width: 300px;
  height: 350px;
  margin-top: 20px;
  border: 4px solid #f2f1ed;
`;

const IntroText = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 20px 0;
`;

const Button = styled(motion.button)`
  background: #f2f1ed;
  color: #000;
  border: none;
  padding: 12px 20px;
  margin: 10px;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
  &:hover {
    background: #000;
    color: #f2f1ed;
    transition: 0.3s ease;
  }
`;

const ContactInfo = styled.div`
  margin-top: 20px;
  font-size: 1.1rem;
  color: #f2f1ed;
`;

const Hero = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <HeroSection>
      <ProfileImage
        src={ProfilePics}
        alt="Profile"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <IntroText initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 1 }}>
        Hi, I'm Vigneshwaran
      </IntroText>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
        <Button
          as="a"
          href="/Vigneshwaran_Developer.pdf"
          download
          whileHover={{ scale: 1.1 }}
        >
          Download Resume
        </Button>
        <Button onClick={() => setShowContact(!showContact)} whileHover={{ scale: 1.1 }}>
          Contact Me
        </Button>
      </motion.div>
      {showContact && (
        <ContactInfo>
          <p>Email: vigneshviswa5360@gmail.com</p>
          <p>Phone: +91-9994168003</p>
        </ContactInfo>
      )}
    </HeroSection>
  );
};

export default Hero;
