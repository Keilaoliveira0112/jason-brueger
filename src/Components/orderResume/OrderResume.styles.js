import styled from "styled-components";

export const Section = styled.section`
background-color: #D9D9D9;
width: 70vw;
padding: 1rem;
@media only screen and (min-width: 600px) {
  width: 40vw;
}
`
export const Title = styled.h1`
font-family: 'Rubik Wet Paint', cursive;
font-weight: 100;
font-size: 1.5rem;
text-align: center;
@media only screen and (min-width: 600px) {
  font-size: 2.5rem;
}
@media only screen and (min-width: 1024px) {
  font-size: 2.5rem;
}
`
export const Name = styled.h4`
font-family: 'Rubik Wet Paint', cursive;
font-weight: 100;
font-size: 1.2rem;
margin-top: 1rem;
@media only screen and (min-width: 600px) {
  font-size: 1.8rem;
}
`
export const ValueName = styled.p`
font-family: 'Asap', sans-serif;
font-size: 1.5rem;
margin-top: 1rem;
text-transform: capitalize;
@media only screen and (min-width: 600px) {
  font-size: 2rem;
}
`
export const TemplateList = styled.li`
display: grid;
font-family: 'Asap', sans-serif;
grid-template-areas: 
"name name name name name"
"price reduce quantity increase delete";
grid-template-rows: 5vh;
margin-top: 2rem;
`
export const ItemName = styled.h4`
grid-area: name;
font-size: 1.5rem;
@media only screen and (min-width: 600px) {
  font-size: 2.2rem;
}
`
export const ItemPrice = styled.h6`
grid-area: price;
font-size: 1.2rem;
color: #9C8C76;
@media only screen and (min-width: 600px) {
  font-size: 2rem;
}

`
export const BtnReduce = styled.button`
grid-area: reduce;
border-radius: 50%;
background: #F28705;
border: none;
color: #FFFFFF;
font-size: 1.6rem;
width: 5vw;
height: 2.5vh;
@media only screen and (min-width: 600px) {
  height: 3vh;
  font-size: 2.5rem;
}
@media only screen and (min-width: 1024px) {
  width: 4vw;
  height: 6vh;
  font-weight: bold;
}
`
export const ItemQuantity = styled.p`
grid-area: quantity;
font-size: 1.5rem;
@media only screen and (min-width: 600px) {
  font-size: 2.5rem;
}
@media only screen and (min-width: 1024px) {
  font-size: 2.5rem;
}
`
export const BtnIncrease = styled.button`
grid-area: increase;
border-radius: 50%;
background: #F28705;
border: none;
color: #FFFFFF;
font-size: 1.6rem;
width: 5vw;
height: 2.5vh;
@media only screen and (min-width: 600px) {
  height: 3vh;
  font-size: 2.5rem;
}
@media only screen and (min-width: 1024px) {
  width: 4vw;
  height: 6vh;
  font-weight: bold;
}
`
export const BtnDelete = styled.button`
grid-area: delete;
border: none;
background-color: transparent;
width: 7vw;
height: 5vh;
@media only screen and (min-width: 600px) {
  font-size: 2.5rem;
}
@media only screen and (min-width: 1024px) {
  font-size: 2.5rem;
}
`
export const ImgDelete = styled.img`
width: 5vw;
height: 5vh;
margin-top: -1.2rem;
@media only screen and (min-width: 600px) {
  font-size: 2.5rem;
}
@media only screen and (min-width: 1024px) {
  font-size: 2.5rem;
  margin-top: 0rem;
}
`
