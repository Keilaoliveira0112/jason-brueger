import styled from "styled-components";

export const CardSection = styled.ul`
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
export const Container = styled.li`
  background-color: #D9D9D9;
  width: auto;
  height: auto;
  padding: 1rem;
  list-style-type: none;
`;
export const Topic = styled.section`
  display: flex;
  gap: 0.3rem;
  font-size: 1.5rem;
  @media only screen and (min-width: 600px) {
    font-size: 2.5rem;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 2.2rem;
  }
`;
export const Value = styled.p`
  font-family: "Asap", sans-serif;
  font-size: 1rem;
  text-transform: capitalize;
  @media only screen and (min-width: 600px) {
    font-size: 1.6rem;
  }
`;
export const GroupButtons = styled.section`
  display: flex;
  justify-content: center;
  gap: 1rem;
  @media only screen and (min-width: 1024px) {
    margin-top: 1.5rem;
  }
`;
export const Buttons = styled.button`
  border: none;
  background-color: transparent;
  width: 7vw;
  height: 5vh;
  cursor: pointer;
  @media only screen and (min-width: 600px) {
    font-size: 2.5rem;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;
export const ImgEdit = styled.img`
  width: 5vw;
  height: 5vh;
  @media only screen and (min-width: 600px) {
    width: 4vw;
    height: 4vh;
  }
`;
export const ImgDelete = styled.img`
  width: 4.5vw;
  height: 5vh;
  @media only screen and (min-width: 600px) {
    width: 3.5vw;
    height: 3vh;
  }
`;
