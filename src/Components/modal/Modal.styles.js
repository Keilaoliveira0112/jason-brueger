import styled from "styled-components";

export const Background = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  background-color: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalSection = styled.section`
  width: 60vw;
  height: 20vh;
  background-color: #fff;
  border-radius: 2rem;
  color: #000;
  display: grid;
  @media only screen and (min-width: 600px) {
    width: 50vw;
    height: 20vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 30vw;
    height: 30vh;
  }
`;
export const BtnClose = styled.button`
  background-color: transparent;
  outline: none;
  width: 3vw;
  height: 3vh;
  cursor: pointer;
  border: none;
  justify-self: end;
  margin-right: 2rem;

  &:before,
  &:after{
    content: " ";
    position: absolute;
    width: 0.7vw;
    height: 2.4vh;
    background-color: #000;
  }
  &:before{
    transform: rotate(45deg);
  }
  &:after{
    transform: rotate(-45deg);
  }

  @media only screen and (min-width: 600px) {
    &:before,
    &:after{
      width: 0.6vw;
    }
  }
  @media only screen and (min-width: 1024px) {
    &:before,
    &:after{
      width: 0.3vw;
      height: 3.4vh;
    }
  }
`;
export const Check = styled.img`
  width: 10vw;
  justify-self: center;
  @media only screen and (min-width: 1024px) {
    width: 5vw;
  }
`;
export const Message = styled.p`
  font-family: "Asap", sans-serif;
  font-size: 1.3rem;
  justify-self: center;
  text-align: center;
  @media only screen and (min-width: 600px) {
    font-size: 2.2rem;
  }
`;
