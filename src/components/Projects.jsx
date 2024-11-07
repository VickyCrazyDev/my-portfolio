import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  padding: 50px;
  background: #f2f1ed;
  color: #000;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const ProjectCard = styled(motion.div)`
  background: #000;
  color: #f2f1ed;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: 0.3s ease;
  }
`;

const Projects = () => {
  const projects = ['SSENSE-WMS(Warehouse Management System) ', 'SSENSE- Inspection Tool(To Update the Product )', 'SSENSE- Stock Migration'];
  return (
    <ProjectsSection>
      <h2>Projects</h2>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index} whileHover={{ scale: 1.1 }}>
            {project}
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
};

export default Projects;
