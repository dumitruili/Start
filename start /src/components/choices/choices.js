import React from 'react'

import Rock from '../../icons/Rock';
import Paper from '../../icons/Paper';
import Scissors from '../../icons/Scissors';
import {ChoicesStyled, Vs} from './choices.style'





const Choices = (props) => {
    return (
        <ChoicesStyled>
            {/* choices captions */}
            <div>You <span>{props.userChoice}</span></div>
            <div />
            <div>Computer <span>{props.computerChoice}</span></div>

            {/* buttons for my choice */}
            <div>
                <button className="rock" onClick={() => props.handleClick('rock')}>
                    <Rock />
                </button>
                <button className="paper" onClick={() => props.handleClick('paper')}>
                    <Paper />
                </button>
                <button className="scissors" onClick={() => props.handleClick('scissors')}>
                    <Scissors />
                </button>
            </div>

            <Vs>vs</Vs>

            <div>
                <button className={props.computerChoice}>{props.computerComponent()}</button>
            </div>
        </ChoicesStyled>
    )
        }

        export default Choices
