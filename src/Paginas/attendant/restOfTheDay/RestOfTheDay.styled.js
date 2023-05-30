import styled from "styled-components";

export const Main = styled.main`
display: flex;
padding: 4rem 2rem 1rem 5rem;
justify-content: space-between;
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
export const TitleMenu = styled.h3`
text-align: center;
justify-self: center;
background: #ffff;
width: 28vw;
height: 2.5vh;
font-size: 2rem;
font-family: 'Rubik Wet Paint', cursive;
background-color: #3A0504;
color: #fff;
font-weight: 100;
border-radius: 0.5rem;
@media only screen and (min-width: 1024px) {
  width: 19vw;
  height: 3.5vh;
}
`

export const Select = styled.select`
width: 13vw;
height: 3vh;
color: #711D17;
font-size: 1.5rem;
font-weight: bold;
border-radius: 0.4rem;
border: none;
@media only screen and (min-width: 600px) {
  width: 9vw;
  height: 2.4vh;
}
@media only screen and (min-width: 1024px) {
  width: 9vw;
  height: 2.4vh;
}
`
export const UlMenu = styled.ul`
display: grid;
gap: 1rem;
`
export const OrderResume = styled.section`
background-color: #fff;
width: 40vw;
`

