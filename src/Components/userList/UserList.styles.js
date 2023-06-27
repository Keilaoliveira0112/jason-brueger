import styled from "styled-components";

export const Ul = styled.ul`
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

export const TemplateList = styled.li`
 background-color: #D9D9D9;
  width: 60vw;
  height: auto;
  padding: 1rem;
  list-style-type: none;
  @media only screen and (min-width: 600px) {
    width: 40vw;
  }
  @media only screen and (min-width: 1024px) {
    width: 30vw;
  }
  @media only screen and (min-width: 1200px){
    width: 25vw;
  }
`
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
`
export const ClientName = styled.h4`
ggrid-area: name;
font-family: 'Rubik Wet Paint', cursive;
font-weight: 100;
font-size: 1.2rem;
margin-top: 1rem;
@media only screen and (min-width: 600px) {
  font-size: 1.8rem;
}
`
export const ValueSelect = styled.p`
 font-family: 'Asap', sans-serif;
  font-size: 1rem;
  margin-top: -4rem;
  padding: 19px;
  text-transform: capitalize;
  @media only screen and (min-width: 600px) {
    font-size: 1.6rem;
  }
`
export const Email = styled.h4`
grid-area: name;
font-family: 'Rubik Wet Paint', cursive;
font-weight: 100;
font-size: 1.2rem;
margin-top: 2rem;
@media only screen and (min-width: 600px) {
  font-size: 1.8rem;
}
`
export const ValueEmail = styled.p`
 font-family: 'Asap', sans-serif;
  font-size: 1rem;
  margin-top: 1rem;
  padding: 17px
  text-transform: capitalize;
  @media only screen and (min-width: 600px) {
    font-size: 1.6rem;
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
 font-family: 'Asap', sans-serif;
  font-size: 1rem;
  margin-top: 1rem;
  text-transform: capitalize;
  @media only screen and (min-width: 600px) {
    font-size: 1.6rem;
  }

`
export const GroupButtons = styled.section`
  display: flex;
  justify-content: center;
  gap: 1rem;
  @media only screen and (min-width: 1024px) {
    margin-top: 1.5rem;
  }
`
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
`
export const ImgEdit = styled.img`
width: 5vw;
height: 5vh;
@media only screen and (min-width: 600px) {
  width: 4vw;
  height: 4vh;
}
@media only screen and (min-width: 1024px) {
  height: 5vh;
}
`
export const ImgDelete = styled.img`
width: 4.5vw;
height: 5vh;
@media only screen and (min-width: 600px) {
  width: 3.5vw;
  height: 4vh;
}
@media only screen and (min-width: 1024px) {
}
`