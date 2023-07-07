import styled from "styled-components";

const Main = styled.main`
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
export default Main;
