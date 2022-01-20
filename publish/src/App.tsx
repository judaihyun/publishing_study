import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
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
        Learn React!
      </Container>
    </ThemeProvider>
  );
}

export default App;
