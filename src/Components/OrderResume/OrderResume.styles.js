import styled from "styled-components";

export const Section = styled.section`
  background-color: #D9D9D9;
  font-family: "Asap", sans-serif;
  width: 70vw;
  padding: 1rem;
  display: grid;
  grid-template-areas:
    "title title"
    "pit pit"
    "clientName clientName"
    "list list"
    "totalName totalValue"
    "btn btn";
  grid-template-rows: 3vh;
  grid-template-columns: 15vw;
  @media only screen and (min-width: 600px) {
    width: 40vw;
    grid-template-columns: 10vw;
    grid-template-rows: 5vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 30vw;
    grid-template-columns: 6vw;
  }
`;
export const Title = styled.h1`
  grid-area: title;
  font-family: "Rubik Wet Paint", cursive;
  font-weight: 100;
  font-size: 1.5rem;
  text-align: center;
  @media only screen and (min-width: 600px) {
    font-size: 2rem;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

export const Topic = styled.h4`
  font-family: "Rubik Wet Paint", cursive;
  font-weight: 100;
  font-size: 1.4rem;
  @media only screen and (min-width: 600px) {
    font-size: 1.9rem;
  }
`;

export const Value = styled.p`
  font-size: 1.5rem;
  text-transform: capitalize;
  @media only screen and (min-width: 600px) {
    font-size: 2rem;
  }
`;

export const PitNumber = styled.section`
  grid-area: pit;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  gap: 0.5rem;
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
  gap: 0.5rem;
  @media only screen and (min-width: 1024px) {
    padding: 2rem;
  }
`;
export const Ul = styled.ul`
  grid-area: list;
  @media only screen and (min-width: 1024px) {
    padding: 2rem;
  }
`;
export const TemplateList = styled.li`
  display: grid;
  font-family: "Asap", sans-serif;
  grid-template-areas: 
    "name name name name name"
    "price reduce quantity increase delete";
  grid-template-rows: 5vh;
  margin-top: 2rem;
  align-items: center;
`;
export const ItemName = styled.h4`
  grid-area: name;
  font-size: 1.5rem;
  @media only screen and (min-width: 600px) {
    font-size: 2rem;
  }
`;
export const ItemPrice = styled.h6`
  grid-area: price;
  font-size: 1.2rem;
  color: #9C8C76;
  justify-self: center;
  @media only screen and (min-width: 600px) {
    font-size: 2rem;
  }
`;
export const BtnReduce = styled.button`
  grid-area: reduce;
  border-radius: 50%;
  background: #F28705;
  border: none;
  color: #FFFFFF;
  font-size: 1.6rem;
  width: 5vw;
  height: 2.5vh;
  cursor: pointer;
  @media only screen and (min-width: 600px) {
    height: 3vh;
    font-size: 2.5rem;
  }
  @media only screen and (min-width: 1024px) {
    width: 3vw;
    height: 5vh;
    font-weight: bold;
    justify-self: end;
  }
`;
export const ItemQuantity = styled.p`
  grid-area: quantity;
  font-size: 1.5rem;
  @media only screen and (min-width: 600px) {
    font-size: 2rem;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 2.5rem;
    justify-self: center;
  }
`;
export const BtnIncrease = styled.button`
  grid-area: increase;
  border-radius: 50%;
  background: #F28705;
  border: none;
  color: #FFFFFF;
  font-size: 1.6rem;
  width: 5vw;
  height: 2.5vh;
  cursor: pointer;
  @media only screen and (min-width: 600px) {
    height: 3vh;
    font-size: 2.5rem;
  }
  @media only screen and (min-width: 1024px) {
    width: 3vw;
    height: 5vh;
    font-weight: bold;
  }
`;
export const BtnDelete = styled.button`
  grid-area: delete;
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
export const ImgDelete = styled.img`
  width: 5vw;
  height: 5vh;
  @media only screen and (min-width: 600px) {
    width: 4vw;
    height: 4vh;
  }
  @media only screen and (min-width: 1024px) {
    margin-top: 0rem;
  }
`;
export const TotalName = styled.h3`
  grid-area: totalName;
  padding: 2rem;
  font-family: "Rubik Wet Paint", cursive;
  font-weight: 100;
  @media only screen and (min-width: 600px) {
    font-size: 2.5rem;
  }
  @media only screen and (min-width: 1024px) {
    padding: 4rem;
    font-size: 3rem;
  }
`;
export const TotalValue = styled.h3`
  grid-area: totalValue;
  justify-self: end;
  padding: 2rem;
  @media only screen and (min-width: 600px) {
    font-size: 2.5rem;
  }
  @media only screen and (min-width: 1024px) {
    padding: 4rem;
    font-size: 3rem;
  }
`;
