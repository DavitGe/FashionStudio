import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/Svgs/star_white_48dp.svg';

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 5rem auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 10vw;
    height: auto;
  }

  h3 {
    font-size: ${(props) => props.theme.fontxl};
    font-family: 'Kaushan Script';
  }
`;

const FooterComponent = styled.footer`
  width: 80vw;

  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};
  }

  li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontlg};
    cursor: pointer;
    transition: all 0.3 ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Bottom = styled.div`
  padding: 0.5rem 0;
  margin: 0 4rem;
  font-size: ${(props) => props.theme.fontlg};

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <Section>
      <LogoContainer>
        <img src={Logo} alt="Wibe Studio" />
        <h3>Wibe studio</h3>
      </LogoContainer>
      <FooterComponent>
        <ul>
          <li>home</li>
          <li>about</li>
          <li>shop</li>
          <li>new arrival</li>
          <li>
            <a href="http://google.com" target="_blank" rel="noreferrer">
              look book
            </a>
          </li>
          <li>
            <a href="http://google.com" target="_blank" rel="noreferrer">
              reviews
            </a>
          </li>
        </ul>
        <Bottom>
          {/* <span>&copy; 2023. All Rights Reserved.</span> */}
          {/* <span>Made with &hearts;</span> */}
        </Bottom>
      </FooterComponent>
    </Section>
  );
};

export default Footer;
