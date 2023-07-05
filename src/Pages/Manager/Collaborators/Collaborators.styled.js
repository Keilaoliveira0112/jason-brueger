import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  justify-items: center;
  gap: 4rem;
`;

export const Filter = styled.section`
  display: flex;
  gap: 1rem;
`;

export const FilterTitle = styled.h2`
  color: #FFFFFF;
  align-self: center;
  font-family: "Asap", sans-serif;
  font-size: 1.5rem;
  @media only screen and (min-width: 600px) {
    font-size: 2rem;
  }
`;
