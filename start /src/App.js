import React, {useEffect, useState} from 'react';
import Rock from './icons/Rock';
import Paper from './icons/Paper';
import Scissors from './icons/Scissors';
import './App.css';
import styled, { createGlobalStyle } from 'styled-components'
export default function App() {
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState('computer-choice')
  const [userScore, setUserScore] = useState(null)
  const [computerScore, setComputerScore] = useState(null)

                        ///Styled Components///
const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
}`

const App = styled.div`
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

const H2 = styled.h2`
  font-family: 'Varela Round', sans-serif;
`

const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 50px;
  ${H2}{
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 0;
    text-align: center;
  }
`

const WinsLosses = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-family: 'Varela Round', sans-serif;
    font-size: 16px;
    text-align: center;
    line-height: 1;
  `

  const Number = styled.span`
    font-size: 52px;
    margin-right: 5px;
  `

  const Wins = styled.div`
  margin-right: 30px;
  display: flex;
  align-items: center;
  ${Number}{
    color: #5dc674;
  }
`

const Losses = styled.div`
  display: flex;
  align-items: center;
  ${Number}{
    color: #da516f;
  }
`

const Choices = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  grid-gap: 20px;
  font-family: 'Varela Round', sans-serif;
  font-size: 18px;
  color: #5f99f0;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  button {
    cursor: pointer;
    font-size: 50px;
    margin-bottom: 20px;
    padding: 20px;
    background: #fff;
    outline: none;
    border: none;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    transition: 0.1s ease all;
  }
  button:hover {
    transform: scale(1.07);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);}
    .rock{
      background: #f7941a;
    }
    .rock path {
      fill: #815116;
    }
    .paper {
      background: #8dc351;
    }

    .paper path {
      fill: #3f5e1b;
    }

    .scissors {
      background: #7c79ea;
    }

    .scissors path {
      fill: #2f2c8f;
    }
    .computer-choice {
      background: #333;
      color: #bbb;
    }
    .computer-choice path {
      fill: #bbb;
  }
`

const Vs = styled.div`
  width: 100px;
  font-size: 100px;
  opacity: 0.25;
  transform: rotate(-0.1turn);
  pointer-events: none;
`

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
    <App>
      <GlobalStyle />
      {/* information goes here */}
      <Info>
        <H2>Rock. Paper. Scissors</H2>

        {/* wins vs losses stats */}
        <WinsLosses>
          <Wins>
            <Number>{userScore}</Number>
            <span>Wins</span>
          </Wins>

          <Losses>
            <Number>{computerScore}</Number>
            <span>Losses</span>
          </Losses>
        </WinsLosses>
      </Info>

      {/* the popup to show win/loss/draw */}
      {/* <div className="game-state"></div> */}

      <Choices>
        {/* choices captions */}
        <div>You {userChoice}</div>
        <div />
        <div>Computer {computerChoice}</div>

        {/* buttons for my choice */}
        <div>
          <button className="rock" onClick={() => handleClick('rock')}>
            <Rock />
          </button>
          <button className="paper" onClick={() => handleClick('paper')}>
            <Paper />
          </button>
          <button className="scissors" onClick={() => handleClick('scissors')}>
            <Scissors />
          </button>
        </div>

        <Vs>vs</Vs>

        {/* show the computer's choice */}
        <div>
          <button className={computerChoice}>{computerComponent()}</button>
        </div>
      </Choices>
    </App>
  );
}

