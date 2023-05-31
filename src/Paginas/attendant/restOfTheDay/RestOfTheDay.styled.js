import styled from "styled-components";

export const Main = styled.main`
display: flex;
flex-direction: column;
align-items: center;
gap: 3rem;
@media only screen and (min-width: 600px) {
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
}
`

export const SectionMenu = styled.section`
display: grid;
gap: 2rem;
@media only screen and (min-width: 1024px) {
  width: 32vw;
}
`
export const ContainerButtons = styled.div`
display: flex;
gap: 3rem;
`
export const Select = styled.select`
width: 18vw;
height: 4vh;
color: #711D17;
font-size: 1.3rem;
font-weight: bold;
border-radius: 0.4rem;
border: none;
@media only screen and (min-width: 600px) {
  width: 10vw;
  font-size: 1.8rem;
}
@media only screen and (min-width: 1024px) {
  width: 8vw;
}
`
export const TitleMenu = styled.h3`
text-align: center;
justify-self: center;
background: #ffff;
width: 40vw;
height: 3vh;
font-size: 1.3rem;
font-family: 'Rubik Wet Paint', cursive;
background-color: #3A0504;
color: #fff;
font-weight: 100;
border-radius: 0.5rem;
@media only screen and (min-width: 600px) {
  font-size: 1.8rem;
  width: 28vw;
  height: 3.5vh;
}
@media only screen and (min-width: 1024px) {
  width: 18vw;
  height: 3.5vh;
}
`

export const UlMenu = styled.ul`
display: grid;
gap: 1rem;
`

export const OrderResume = styled.section`
background-color: #D9D9D9;
width: 70vw;
@media only screen and (min-width: 600px) {
  width: 40vw;
}
@media only screen and (min-width: 1024px) {
  width: 5vw;
}

`
