import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
  font-weight: bold;
  font-family: 'Asap';
  width: 25vw;
  font-size: 1rem;
  height: 3.8vh;
  border-color: #F2E8D9;
  background-color: #4D0815;
  color: rgb(242, 135, 5);
  border-radius: 0.3rem;
  cursor: pointer;
  border-style: solid;
  border-width: 0.25;
  @media only screen and (min-width: 600px) {
    font-size: 2rem;
    border-width: 0.5rem;
  }
  @media only screen and (min-width: 1024px) {
    width: 15vw;
    height: 6vh;
    border-width: thick;
  }
    
  ${({ variant }) => variant === "primary" && css`
    background-color: #711D17;
    color: #FFFFFF;
    font-size: 1.6rem;
    width: 18vw;
    height: 5vh;
    border: none;
    @media only screen and(min-width: 600px) {
    font-size: 2.5rem;
    }
    @media only screen and(min-width: 1024px) {
    width: 10vw;
    height: 5vh;
    }
   `}

  ${({ variant }) => variant === "secondary" && css`
    background: #0D0A0B;
    border-color: #711D17;
    height: 5vh;
    border-radius: 0.8rem;
    @media only screen and(min-width: 600px) {
      border-radius: 1rem;
    }
  `} 

  ${({ variant }) => variant === "tertiary" && css`
    background: #FFFFFF;
    color: #AC5D05;
    height: 5vh;
    border-radius: 0.8rem;
    border: none;
  `} 

  ${({ variant }) => variant === "quaternary" && css`
    width: 12vw;
    height: 5vh;
    background-color: #711D17;
    color: #FFFFFF;
    border: none;
    border-radius: 0.7rem;
    font-size: 1.3rem;
    justify-self: center;
    grid-area: btn;
    @media only screen and (min-width: 600px) {
      font-size: 2.2rem;
    }
    @media only screen and (min-width: 1024px) {
      width: 13vw;
      height: 8vh;
      font-size: 3rem;
    }
  `}
     
  ${({ variant }) => variant === "quinary" && css`
    height: 3.5vh;
    border: none;
  `}

  ${({ variant }) => variant === "senary" && css`
    width: 18vw;
    height: 3.5vh;
    font-size: 1.3rem;
    background-color: #0B2F05;
    color: #FFF;
    border-radius: 0.5rem;
    border: none;
    @media only screen and (min-width: 600px) {
      width: 15vw;
      border-radius: 1rem;
    }
    @media only screen and (min-width: 1024px) {
      width: 7vw;
    }
  `}
`
