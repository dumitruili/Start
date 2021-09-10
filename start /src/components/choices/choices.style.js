import styled from 'styled-components'

    const ChoicesStyled = styled.div`
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
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
      }

      .rock {
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


export {ChoicesStyled, Vs}