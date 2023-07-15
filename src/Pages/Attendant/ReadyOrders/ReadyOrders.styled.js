import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 3rem;
`;

export const SectionOrder = styled.section`
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  @media only screen and (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5rem;
  }
`;
