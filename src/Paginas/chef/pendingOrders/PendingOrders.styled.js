import styled from "styled-components";

export const Main = styled.main`
display: flex;
flex-direction: column;
align-items: center;
gap: 3rem;
padding: 3rem;
@media only screen and (min-width: 600px) {
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
}
`

export const Section = styled.section`
background-color: #D9D9D9;
font-family: 'Asap', sans-serif;
width: 60vw;
height: 40vh;
display: grid;
grid-template-areas:
'title title'
'star hour'
'pit number'
'client name'
'attendant username'
'table table'
'button button';
padding: 0.5rem;
grid-template-columns: 20vw 40vw;
grid-template-rows: 10vh 3vh 3vh 3vh 5vh 10vh;
border-radius: 8rem 8rem 0 0;
@media only screen and (min-width: 600px) {
    width: 40vw;
    height: auto;
    grid-template-columns: 11vw 29vw;
    border-radius: 12rem 12rem 0 0;
    grid-template-rows: 6vh 3vh 3vh 3vh 5vh 10vh;
}
@media only screen and (min-width: 1024px) {
    grid-template-rows: 12vh 3.5vh 3.5vh 3.5vh 4vh 10vh;
    grid-template-columns: 10vw 16vw;
    width: 26vw;
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
  font-size: 2.5rem;
}
`
export const InitialDate = styled.img`
grid-area: star;
justify-self: end;
width: 3vw;
@media only screen and (min-width: 600px) {
    align-self: center;
}
@media only screen and (min-width: 1024px) {
    width: 2vw;
}
`
export const Hour = styled.p`
grid-area: hour;
font-size: 1rem;
@media only screen and (min-width: 600px) {
    font-size: 1.6rem;
    align-self: center;
}
@media only screen and (min-width: 1024px) {
}
`
export const Pit = styled.h4`
grid-area: pit;
font-family: 'Rubik Wet Paint', cursive;
font-weight: 100;
font-size: 1rem;
@media only screen and (min-width: 600px) {
    font-size: 1.5rem;
}
@media only screen and (min-width: 1024px) {
}
`
export const Number = styled.p`
grid-area: number;
font-size: 1.1rem;
@media only screen and (min-width: 600px) {
    font-size: 1.6rem;
}
@media only screen and (min-width: 1024px) {
}
`
export const Client = styled.h4`
grid-area: client;
font-family: 'Rubik Wet Paint', cursive;
font-weight: 100;
font-size: 1rem;
@media only screen and (min-width: 600px) {
    font-size: 1.5rem;
}
@media only screen and (min-width: 1024px) {
}
`
export const Name = styled.p`
grid-area: name;
font-size: 1.1rem;
@media only screen and (min-width: 600px) {
    font-size: 1.6rem;
}
@media only screen and (min-width: 1024px) {
}
`
export const Attendant = styled.h4`
grid-area: attendant;
font-family: 'Rubik Wet Paint', cursive;
font-weight: 100;
font-size: 1rem;
@media only screen and (min-width: 600px) {
    font-size: 1.5rem;
}
@media only screen and (min-width: 1024px) {
}
`
export const Username = styled.p`
grid-area: username;
font-size: 1.1rem;
@media only screen and (min-width: 600px) {
    font-size: 1.6rem;
}
@media only screen and (min-width: 1024px) {
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