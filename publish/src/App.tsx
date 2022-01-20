import React from 'react';
import styled from 'styled-components';
import Header from './components/header/Header';

const Container = styled.div`
  display:flex;
  flex-direction: column;
`;

function App(): JSX.Element {
  return (
    <Container>
      <Header/>
      Learn React!
    </Container>
  );
}

export default App;
