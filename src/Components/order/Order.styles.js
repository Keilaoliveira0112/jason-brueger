import styled, { css } from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 3rem;
  @media only screen and (min-width: 600px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5rem;
  }
`;
export const Section = styled.section`
  background-color: #D9D9D9;
  font-family: "Asap", sans-serif;
  width: auto;
  height: auto;
  display: grid;
  grid-template-areas:
    "title title"
    "initialDate finalDate"
    "pit pit"
    "clientName clientName"
    "attendantName attendantName"
    "table table"
    "paragraph paragraph";
  padding: 0.5rem;
  grid-template-columns: 30vw 30vw;
  grid-template-rows: auto 4vh 3vh 3vh 3vh auto 4vh;
  border-radius: 8rem 8rem 0 0;
  @media only screen and (min-width: 600px) {
    grid-template-columns: 19vw 19vw;
    border-radius: 12rem 12rem 0 0;
    grid-template-rows: auto 4vh 2vh 2vh 2vh auto 4vh;
  }
  @media only screen and (min-width: 1024px) {
    grid-template-rows: auto 4vh 3.5vh 3.5vh 4vh auto 7vh;
    grid-template-columns: 10vw 10vw;
    border-radius: 10rem 10rem 0 0;
  }
  ${({ variant }) => variant === "OneColumn" && css`
    grid-template-areas:
      "title"
      "initialDate"
      "pit"
      "clientName"
      "attendantName"
      "table"
      "paragraph";
    grid-template-columns: 60vw 0vw;
    @media only screen and (min-width: 600px) {
      grid-template-columns: 40vw 0vw;
    }
    @media only screen and (min-width: 1024px) {
      grid-template-columns: 20vw 0vw;
    }
  `}
`;
export const Title = styled.h1`
  grid-area: title;
  font-family: "Rubik Wet Paint", cursive;
  font-weight: 100;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 2rem;
  @media only screen and (min-width: 600px) {
    font-size: 1.9rem;
    margin-top: 3rem;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 2.2rem;
  }
`;
export const InitialDate = styled.section`
  grid-area: initialDate;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImgDate = styled.img`
  width: 3vw;
  @media only screen and (min-width: 1024px) {
    width: 1.2vw;
  }
`;
export const ValueOrder = styled.p`
  font-size: 1.1rem;
  text-transform: capitalize;
  @media only screen and (min-width: 600px) {
    font-size: 1.6rem;
  }
`;
export const FinalDate = styled.section`
  grid-area: finalDate;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Topic = styled.h4`
  font-family: "Rubik Wet Paint", cursive;
  font-weight: 100;
  font-size: 1rem;
  @media only screen and (min-width: 600px) {
    font-size: 1.5rem;
  }
`;
export const PitNumber = styled.section`
  grid-area: pit;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  @media only screen and (min-width: 1024px) {
    padding: 2rem;
  }
`;
export const ClientName = styled.section`
  grid-area: clientName;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  @media only screen and (min-width: 1024px) {
    padding: 2rem;
  }
`;
export const AttendantName = styled.section`
  grid-area: attendantName;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  @media only screen and (min-width: 1024px) {
    padding: 2rem;
  }
`;
export const Paragraph = styled.p`
  grid-area: paragraph;
  justify-self: center;
  color: #0D0A0B;
  font-weight: bold;
  font-size: 1.1rem;
  @media only screen and (min-width: 600px) {
    font-size: 1.6rem;
  }
`;
