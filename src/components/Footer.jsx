import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  background: #000;
  color: #f2f1ed;
  text-align: center;
  padding: 20px;
`;

const Footer = () => {
    return (
        <FooterSection>
            <p>© {new Date().getFullYear()} Vigneshwaran Viswanathan. All rights reserved.</p>
        </FooterSection>
    );
};

export default Footer;
