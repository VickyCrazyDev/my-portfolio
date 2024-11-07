import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 50px;
  background: #000;
  color: #f2f1ed;
  text-align: center;
`;

const Skills = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
`;

const Skill = styled(motion.div)`
  background: #f2f1ed;
  color: #000;
  padding: 10px 20px;
  border-radius: 20px;
  font-weight: bold;
`;

const About = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'React', 'NodeJS', 'AWS', 'Python', 'MYSQL'];
  return (
    <AboutSection>
      <h2>About Me</h2>
      <p>JavaScript Full Stack Developer with 2+ years of experience in developing scalable applications.</p>
      <Skills>
        {skills.map((skill, index) => (
          <Skill key={index} whileHover={{ scale: 1.1 }}>{skill}</Skill>
        ))}
      </Skills>
    </AboutSection>
  );
};

export default About;
