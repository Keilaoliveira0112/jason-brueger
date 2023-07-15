import styled from "styled-components";

export const Li = styled.li`
  list-style-type: none;
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  padding: 0.5rem;
  gap: 3rem;
  height: 3vh;
  align-items: center;
  @media only screen and (min-width: 600px) {
    gap: 1rem;
  }
  @media only screen and (min-width: 1024px) {
    height: 4vh;
  }
`;
export const DishName = styled.p`
  font-family: Asap, sans-serif;
  font-size: 1.2rem;
  color: #F28705;
  @media only screen and (min-width: 600px) {
    font-size: 1.6rem;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 1.8rem;
  }
`;
export const Price = styled.p`
  font-family: Asap, sans-serif;
  font-size: 1.4rem;
  color: #F28705;
  @media only screen and (min-width: 600px) {
    font-size: 1.6rem;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 1.8rem;
  }
`;
export const ButtonAdd = styled.button`
  border-radius: 50%;
  width: 4vw;
  background-color: #711D17;
  border: none;
  color: #fff;
  cursor: pointer;
  @media only screen and (min-width: 600px) {
    width: 2.5vw;
    height: 2.5vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 2vw;
    height: 3vh;
    font-size: 1.6rem;
    font-weight: 600;
  }
`;
