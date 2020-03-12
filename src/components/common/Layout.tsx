import React, { ReactElement } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';

const Layout: React.FC = ({ children }): ReactElement => {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Wrapper>
        <Header>My React Template</Header>
        <Body>{children}</Body>
      </Wrapper>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  color: #fff;
  background-color: #09d3ac;
  font-size: 20px;
  font-weight: bold;
  padding: 0 20px;
`;

const Body = styled.div`
  height: calc(100vh - 60px);
`;

export default Layout;
