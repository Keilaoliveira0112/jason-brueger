import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
  font-weight: bold;
  font-family: 'Asap';
  width: 25vw;
  font-size: 1rem;
  height: 3.5vh;
  border-color: #F2E8D9;
  background-color: #4D0815;
  color: rgb(242, 135, 5);
  border-radius: 0.3rem;
  cursor: pointer;
  border-style: solid;
  border-width: medium;
  @media only screen and (min-width: 600px) {
    font-size: 2.5rem;
  }
  @media only screen and (min-width: 1024px) {
    width: 15vw;
    height: 6vh;
    border-width: thick;
  
    &::after {
      content: '',
    } 
  }
    
  ${({ variant }) => variant === "primary" && css`
    background - color: #711D17;
    color: #FFFFFF;
    font-size: 1.6rem;
    width: 18vw;
    height: 5vh;
    font-weight: bold;
    cursor: pointer;
    border: none;
    justify-self: center;
    grid-area: btn;
    @media only screen and(min-width: 600px) {
    font-size: 2.5rem;
    }
    @media only screen and(min-width: 1024px) {
    width: 10vw;
    height: 5vh;
    }
    `}

  ${({ variant }) => variant === "secundary" && css`
    background: #0D0A0B;
    border-color: #711D17;
    height: 5vh;
    border-radius: 0.8rem;
    @media only screen and(min-width: 600px) {
      border-radius: 1rem;
    }
  `} 

  ${({ variant }) => variant === "terciary" && css`
    background: #FFFFFF;
    color: #AC5D05;
    height: 5vh;
    border-radius: 0.8rem;
    border: none;
  `} 

  ${({ variant }) => variant === "quartenary" && css`
    width: 12vw;
    height: 5vh;
    background- color: #711D17;
    color: #FFFFFF;
    border: none;
    border-radius: 0.7rem;
    font-size: 1.3rem;
    @media only screen and (min-width: 600px) {
      font-size: 2.2rem;
    }
    @media only screen and (min-width: 1024px) {
      width: 13vw;
      height: 8vh;
      font-size: 3rem;

      &::after {
        content: '',
      } 
    }
  `}
     
  ${({ variant }) => variant === "quintenary" && css`
    font-weight: bold;
    font-family: 'Asap';
    width: 25vw;
    font-size: 1rem;
    height: 3.5vh;
    background-color: #4D0815;
    color: rgb(242, 135, 5);
    border-radius: 0.3rem;
    cursor: pointer;
    border: none;
    @media only screen and (min-width: 600px) {
      font-size: 2.5rem;
    }
    @media only screen and (min-width: 1024px) {
      width: 15vw;
      height: 6vh;
     
      &::after {
        content: '',
      } 
    }
  `}
`
