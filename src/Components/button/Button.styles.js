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
     width: 22rem; 
     height: 4.3rem;
     margin-top: 7%;
     background-color: #711D17;
     padding: 10px 20px;
     color: #F28705;
     border: none;
     border-radius: 5px;
     font-size: 5px;
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
