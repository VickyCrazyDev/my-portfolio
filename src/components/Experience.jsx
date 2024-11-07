import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceSection = styled.section`
  padding: 50px;
  background: #000;
  color: #f2f1ed;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Job = styled(motion.div)`
  background: #f2f1ed;
  color: #000;
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #000;
`;

const Experience = () => {
    const experiences = [
        { role: "Software Developer", company: "Iresponsive Solutions", period: "MAY-2022 - Present" },
        { role: "Cloud Analyst", company: "Novastrid Information Technology Pvt Ltd", period: "September 2021 - January 2022" },
        { role: "Data Analyst", company: "SBL Knowledge And Services Pvt Ltd", period: "August 2020 – February 2021" },
    ];

    return (
        <ExperienceSection>
            <h2>Experience</h2>
            <Timeline>
                {experiences.map((exp, index) => (
                    <Job key={index} whileHover={{ scale: 1.05 }}>
                        <h3>{exp.role}</h3>
                        <p>{exp.company}</p>
                        <small>{exp.period}</small>
                    </Job>
                ))}
            </Timeline>
        </ExperienceSection>
    );
};

export default Experience;
