import React, {useEffect, useState} from 'react';
import './App.css';
import styled, { createGlobalStyle } from 'styled-components'
import Info from './components/info/info'
import Choices from './components/choices/choices'
import Rock from './icons/Rock'
import Paper from './icons/Paper';
import Scissors from './icons/Scissors';

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
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState('computer-choice')
  const [userScore, setUserScore] = useState(null)
  const [computerScore, setComputerScore] = useState(null)

                        ///Styled Components///


                                  ///Logic///
  const computerComponent = () => {
    switch (computerChoice) {
      case 'scissors':
        return <Scissors/>

      case 'rock':
        return <Rock/>

      case 'paper':
        return <Paper/>

      default:
        return '?'
    }

  }

  const win = () => {
    setUserScore(prevCount => prevCount + 1)
  }
  const lose = () => {
    setComputerScore(prevCount => prevCount + 1)
  }
  const tie = () => {

  }

  const handleClick = (value) => {
    setUserChoice(value);
    getComputerChoice()

  }

  const getComputerChoice = () => {
    const choiceList = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random()*3);
    setComputerChoice(choiceList[randomNumber]);
    computerComponent(choiceList[randomNumber])
    console.log(randomNumber)
  };

  useEffect(() =>{
    switch (userChoice + computerChoice) {
      case "paperrock":
      case "rockscissors":
      case "scissorspaper":
        win();
        break;

      case "rockpaper":
      case "scissorsrock":
      case "paperscissors":
        lose();
        break;

      case "rockrock":
      case "paperpaper":
      case "scissorsscissors":
        tie();
        break;
      default:
    }
  },[userChoice, computerChoice] )



  return (
      
    <AppStyle>
      <GlobalStyle />
      {/* information goes here */}
      <Info userScore = {userScore} computerScore = {computerScore}/>
      
      {/* the popup to show win/loss/draw */}
      {/*<div className="game-state"></div>*/}
      <Choices userChoice = {userChoice} computerChoice = {computerChoice} computerComponent = {computerComponent} handleClick = {handleClick}/>

        {/* show the computer's choice */}

    </AppStyle>
  );
}

