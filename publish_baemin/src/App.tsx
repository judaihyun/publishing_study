import React from 'react';
import Main from 'views/Main';
import './App.css';
import {
  RecoilRoot,
} from 'recoil';

function App() {
  return (
  <RecoilRoot>
    <Main/>
  </RecoilRoot>)
}

export default App;
