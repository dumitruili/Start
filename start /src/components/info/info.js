import React from 'react'
import styled from 'styled-components'

const H2 = styled.h2`
  font-family: 'Varela Round', sans-serif;
`

const InfoStyle = styled.div`
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