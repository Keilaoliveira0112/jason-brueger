import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 3rem;
  @media only screen and (min-width: 600px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: baseline;
  }
`;
export const SectionMenu = styled.section`
  display: grid;
  gap: 2rem;
  @media only screen and (min-width: 1024px) {
    width: 32vw;
  }
`;
export const TitleMenu = styled.h3`
  text-align: center;
  justify-self: center;
  background: #ffff;
  width: 40vw;
  height: auto;
  font-size: 1.3rem;
  font-family: "Rubik Wet Paint", cursive;
  background-color: #3A0504;
  color: #fff;
  font-weight: 100;
  border-radius: 0.5rem;
  @media only screen and (min-width: 600px) {
    font-size: 1.8rem;
    width: 28vw;
    padding: 0.5rem;
  }
  @media only screen and (min-width: 1024px) {
    width: 18vw;
  }
`;
export const UlMenu = styled.ul`
  display: grid;
  gap: 1rem;
`;
