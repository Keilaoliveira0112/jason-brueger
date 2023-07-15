import styled from "styled-components";

export const Section = styled.section`
  grid-template-rows: 40vh 18vh 30vh;
  min-height: 100vh;
  display:grid;
  place-items: center;
  @media only screen and (min-width: 600px) {
    grid-template-rows: 48vh 18vh 30vh;
  }
`;
export const H1 = styled.h1`
  font-size: 6rem;
  color: #711D17;
  font-family: "Rubik Wet Paint", cursive;
  @media only screen and (min-width: 600px) {
    font-size: 9rem;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 9rem;
  }
`;
export const LogoImg = styled.img`
  width: 40vw;
  @media only screen and (min-width: 1024px) {
    width: 15vw;
  }
`;
export const CreateForm = styled.form`
  display: grid;
  justify-items: end;
  gap: 2.5rem;
`;
export const ParagraphError = styled.p`
  justify-self: center;
  color: #ffe000;
  @media only screen and (min-width: 600px) {
    font-size: 2rem;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;
