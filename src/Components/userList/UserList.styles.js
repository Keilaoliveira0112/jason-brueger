import styled from "styled-components";

export const Section = styled.section`
background-color: #D9D9D9;
font-family: 'Asap', sans-serif;
width: 70vw;
padding: 1rem;
display: grid;
grid-template-areas:
'list list'
'name'
'value select'
'email value';
'office value'

grid-template-rows: 3vh;
grid-template-columns: 15vw;
@media only screen and (min-width: 600px) {
  width: 40vw;
  grid-template-columns: 1vw;
  grid-template-rows: 5vh;
}
@media only screen and (min-width: 1024px) {
  width: 30vw;
  grid-template-columns: 6vw;
}
`
export const Ul = styled.ul`
grid-area: list;
@media only screen and (min-width: 1024px) {
  padding: 2rem;
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
align-items: center;
`
export const ClientName = styled.h4`
ggrid-area: name;
font-family: 'Rubik Wet Paint', cursive;
font-weight: 100;
font-size: 1.2rem;
margin-top: -8rem;
@media only screen and (min-width: 600px) {
  font-size: 1.8rem;
}
`
export const ValueSelect = styled.p`
grid-area: value;
font-size: 1.5rem;
margin-top: -15rem;
text-transform: capitalize;
@media only screen and (min-width: 600px) {
  font-size: 2rem;
}
`
export const Email = styled.h4`
grid-area: name;
font-family: 'Rubik Wet Paint', cursive;
font-weight: 100;
font-size: 1.2rem;
margin-top: -3rem;
@media only screen and (min-width: 600px) {
  font-size: 1.8rem;
}
`
export const ValueEmail = styled.p`
grid-area: value;
font-size: 1.5rem;
margin-top: -10rem;
text-transform: capitalize;
@media only screen and (min-width: 600px) {
  font-size: 2rem;
}
`

export const Office = styled.h4`
grid-area: name;
font-family: 'Rubik Wet Paint', cursive;
font-weight: 100;
font-size: 1.2rem;
margin-top: 2rem;
@media only screen and (min-width: 600px) {
  font-size: 1.8rem;
}
`
export const ValueOffice = styled.p`
grid-area: value;
font-size: 1.5rem;
margin-top: 1rem;
text-transform: capitalize;
@media only screen and (min-width: 600px) {
  font-size: 2rem;
}
`
export const BtnEdit = styled.button`
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
`
export const ImgEdit = styled.img`
width: 5vw;
height: 5vh;
@media only screen and (min-width: 600px) {
  width: 4vw;
  height: 4vh;
}
@media only screen and (min-width: 1024px) {
  margin-top: 0rem;
}
`