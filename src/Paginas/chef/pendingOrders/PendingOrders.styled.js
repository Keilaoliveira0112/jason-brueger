import styled from "styled-components";

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
`
export const Section = styled.section`
background-color: #D9D9D9;
font-family: 'Asap', sans-serif;
width: 60vw;
height: auto;
display: grid;
grid-template-areas:
'title'
'initialDate'
'pit'
'clientName'
'attendantName'
'table'
'button';
padding: 0.5rem;
grid-template-rows: 8vh 4vh 3vh 3vh 3vh auto 4vh;
border-radius: 8rem 8rem 0 0;
@media only screen and (min-width: 600px) {
  width: 40vw;
  border-radius: 12rem 12rem 0 0;
  grid-template-rows: 8vh 4vh 2vh 2vh 2vh auto 4vh;
}
@media only screen and (min-width: 1024px) {
  grid-template-rows: 10vh 4vh 3.5vh 3.5vh 4vh auto 7vh;
  border-radius: 10rem 10rem 0 0;
  width: 20vw;
}
`
export const Title = styled.h1`
grid-area: title;
font-family: 'Rubik Wet Paint', cursive;
font-weight: 100;
font-size: 1.5rem;
text-align: center;
margin-top: 2rem;
@media only screen and (min-width: 600px) {
  font-size: 2.5rem;
  margin-top: 3rem;
}
@media only screen and (min-width: 1024px) {
  font-size: 2.2rem;
}
`
export const InitialDate = styled.section`
grid-area: initialDate;
display: flex;
justify-content: center;
align-items: center;
margin-right: 12rem;
`
export const StarImg = styled.img`
width: 3vw;
@media only screen and (min-width: 1024px) {
  width: 1.2vw;
}
`
export const ValueOrder = styled.p`
font-size: 1.1rem;
text-transform: capitalize;
@media only screen and (min-width: 600px) {
  font-size: 1.6rem;
}
`
export const PitNumber = styled.section`
grid-area: pit;
display: flex;
justify-content: flex-start;
align-items: center;
padding: 1rem;
@media only screen and (min-width: 1024px) {
  padding: 2rem;
}
`
export const Topic = styled.h4`
font-family: 'Rubik Wet Paint', cursive;
font-weight: 100;
font-size: 1rem;
@media only screen and (min-width: 600px) {
    font-size: 1.5rem;
}
@media only screen and (min-width: 1024px) {
}
`
export const ClientName = styled.section`
grid-area: clientName;
display: flex;
justify-content: flex-start;
align-items: center;
padding: 1rem;
@media only screen and (min-width: 1024px) {
  padding: 2rem;
}
`
export const AttendantName = styled.section`
grid-area: attendantName;
display: flex;
justify-content: flex-start;
align-items: center;
padding: 1rem;
@media only screen and (min-width: 1024px) {
  padding: 2rem;
}
`
export const Table = styled.table`
grid-area: table;
font-size: 1rem;
border: none;
padding: 0.5rem;
@media only screen and (min-width: 600px) {
  font-size: 1.6rem;
}
@media only screen and (min-width: 1024px) {
  padding: 2rem;
}
`
export const Thead  = styled.thead`
text-align: justify;
@media only screen and (min-width: 600px) {
}
@media only screen and (min-width: 1024px) {
}
`
export const Tbody  = styled.tbody`
color: #831717;
font-weight: 500;
@media only screen and (min-width: 600px) {
}
@media only screen and (min-width: 1024px) {
}
`
export const TableRow = styled.tr`
  &:nth-child(2n + 1) {
    background-color: #f2f2f2;
  }
`
export const Td = styled.td`
text-align: center;
`