import React, {useEffect, useState} from 'react';
import Rock from './icons/Rock';
import Paper from './icons/Paper';
import Scissors from './icons/Scissors';
import './App.css';


export default function App() {
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState('computer-choice')
  const [userScore, setUserScore] = useState(null)
  const [computerScore, setComputerScore] = useState(null)

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
    <div className="app">
      {/* information goes here */}
      <div className="info">
        <h2>Rock. Paper. Scissors</h2>

        {/* wins vs losses stats */}
        <div className="wins-losses">
          <div className="wins">
            <span className="number">{userScore}</span>
            <span className="text">Wins</span>
          </div>

          <div className="losses">
            <span className="number">{computerScore}</span>
            <span className="text">Losses</span>
          </div>
        </div>
      </div>

      {/* the popup to show win/loss/draw */}
      {/* <div className="game-state"></div> */}

      <div className="choices">
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

        <div className="vs">vs</div>

        {/* show the computer's choice */}
        <div>
          <button className={computerChoice}>{computerComponent()}</button>
        </div>
      </div>
    </div>
  );
}

