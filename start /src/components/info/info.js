import React from 'react'
import { H2, InfoStyle, WinsLosses, Number, Wins, Losses } from './info.style'

const Info = (props) => {
    return (
        <InfoStyle>
            <div>
            <H2>Rock. Paper. Scissors</H2>

            {/* wins vs losses stats */}

            <WinsLosses>
                <Wins>
                    <Number>{props.userScore}</Number>
                    <span>Wins</span>
                </Wins>

                <Losses>
                    <Number>{props.computerScore}</Number>
                    <span>Losses</span>
                </Losses>
            </WinsLosses>
            </div>
        </InfoStyle>
    )
}
export default Info