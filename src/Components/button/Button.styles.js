import styled, { css } from "styled-components";

const ButtonContainer = styled.button`
  font-weight: bold;
  font-family: "Asap";
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
    width: auto;
    padding: 0.5rem;
    height: 5vh;
    border: none;
    justify-self: end;
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
      width: 10vw;
      height: 5vh;
      font-size: 2rem;
    }
  `}
     
  ${({ variant }) => variant === "quinary" && css`
    height: 3.5vh;
    border: none;
  `}

  ${({ variant }) => variant === "senary" && css`
    width: auto;
    height: auto;
    padding: 0.5rem;
    font-size: 1.3rem;
    background-color: #0B2F05;
    color: #FFF;
    border-radius: 0.5rem;
    border: none;
    justify-self: center;
    grid-area: paragraph;
    @media only screen and (min-width: 600px) {
      border-radius: 1rem;
    }
  `}

  ${({ variant }) => variant === "septenary" && css`
    width: 18vw;
    height: 3.5vh;
    font-size: 1.3rem;
    background-color: #959E8D;
    color: #FFF;
    border-radius: 0.5rem;
    border: none;
    @media only screen and (min-width: 600px) {
      width: 15vw;
      border-radius: 1rem;
    }
    @media only screen and (min-width: 1024px) {
      width: 9vw;
    }
  `}

  ${({ variant }) => variant === "octonary" && css`
    background: #0D0A0B;
    border-color: #0D0A0B;
    height: auto;
    border-radius: 0.8rem;
    padding: 0.3rem;
    width: auto;
    @media only screen and(min-width: 600px) {
      border-radius: 1rem;
    }
    @media only screen and (min-width: 1024px) {
      width: auto;
      height: 6vh;
      border-width: thick;
    }
    
    &:hover{
      border-color: #D9D9D9;
    }
    
    &:active,
    &:focus{
      border-color: #D9D9D9;
      transform: scale(0.97);
      transition-duration: 0.05s;
    }
  `}

  ${({ variant }) => variant === "nonary" && css`
    background-color: #0B2F05;
    color: #FFFFFF;
    font-size: 1.6rem;
    width: auto;
    padding: 0.5rem;
    height: 5vh;
    border: none;
    @media only screen and(min-width: 600px) {
      font-size: 2.5rem;
    }
    @media only screen and(min-width: 1024px) {
      height: 5vh;
    }
  `}
`;

export default ButtonContainer;
