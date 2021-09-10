import React, { useState, useEffect } from 'react';
import Scissors from "../../icons/Scissors";
import Rock from "../../icons/Rock";
import Paper from "../../icons/Paper";
import Info from "../info/info";
import Choices from "../choices/choices";

const Logic = () => {
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
        <div>
            <Info userScore={userScore} 
                  computerScore={computerScore}/>
            {/* the popup to show win/loss/draw */}
            <Choices userChoice={userChoice}
                     computerChoice={computerChoice}
                     computerComponent={computerComponent}
                     handleClick={handleClick}/>
        </div>
    )
}

export default Logic