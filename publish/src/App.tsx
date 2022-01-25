import Footer from 'components/Footer';
import Header from 'components/Header/Header';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Main from 'views/Main/Main';
import theme from './style/theme';

const Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`;

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header/>
        <Main/>
        <Footer/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
