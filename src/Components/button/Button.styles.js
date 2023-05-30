import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button `
  background-color: #711D17;
  color: #FFFFFF;
  border: none;
  font-size: 1.6rem;
  width: 18vw;
  height: 5vh;
  font-weight: bold;
  cursor: pointer;
  @media only screen and (min-width: 600px) {
    font-size: 2.5rem;
  }
  @media only screen and (min-width: 1024px) {
    width: 10vw;
    height: 5vh;
  }

  ${({variant}) => variant === "primary" && css `
    font-weight: bold;
    font-family: 'Asap';
    width: 22vw;
    font-size: 1rem;
    height: 2rem;
    border-color: #FFFFFF;
    background-color: rgb(113, 29, 23);
    color: rgb(242, 135, 5);
    border-radius: 0.3rem;
    cursor: pointer;
    @media only screen and (min-width: 600px) {
      font-size: 1.5rem;
    }
    @media only screen and (min-width: 1024px) {
      width: 20vw;
      height: 10vh;
     
      &::after {
        content: '',
      } 
    }
    `}

  ${({ variant }) => variant === "secundary" && css`
        background: #0D0A0B;
        height: 5.9rem;
        width: 16.3rem;
        left: 4.6rem;
        top: 25.3rem;
        border-radius: 1rem;
    `} 

      ${({ variant }) => variant === "terciary" && css`
        background: #FFFFFF;
        color: #AC5D05;
        height: 5.9rem;
        width: 15rem;
        margin-top: 1%;
        left: 22.6rem;
        top: 25.3rem;
        border-radius: 1rem;

    `} 
     
`
