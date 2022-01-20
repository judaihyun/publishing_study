import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Main from 'views/Main/Main';
import Header from './components/header/Header';
import theme from './style/theme';

const Container = styled.div`
  display:flex;
  flex-direction: column;
`;

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header/>
        <Main/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
