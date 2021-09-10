import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import Logic from "./components/logic/logic";
import './App.css'

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
}`

const AppStyle = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-top: 50px;
  padding-left: 50px;
  padding-right: 50px;
  background: #478aef;
  color: #cadbf5;
`



export default function App() {




  return (
      
    <AppStyle>
      <GlobalStyle />
        {/*<div className="game-state"> win*/}
      {/* information goes here */}
      {/*<div className="game-state"></div>*/}
      <Logic />
        {/*</div>*/}
        {/* show the computer's choice */}
    </AppStyle>
  );
}

