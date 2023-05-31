import styled from "styled-components";

export const Main = styled.main `
display: flex;
flex-direction: column;
align-items: center;
gap: 3rem;
padding: 3rem;
@media only screen and (min-width: 600px) {
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
}

`
export const SectionMenu = styled.section`
display: grid;
gap: 2rem;
@media only screen and (min-width: 1024px) {
  width: 32vw;
}
`
export const TitleMenu = styled.h3`
text-align: center;
height: 28px;
width: 66px;

background: #ffff;
font-size: 2rem;
font-family: 'Rubik Wet Paint', cursive;
background-color: trasparent;
color: #0D0A0B;
font-weight: 100;
border-radius: 0.5rem;
@media only screen and (min-width: 1024px) {
  width: 19vw;
  height: 3.5vh;
}
`
export const UlMenu = styled.ul`
display: grid;
gap: 1rem;
`
export const OrderResume = styled.section`
background-color: #fff;
width: 40vw;
height: 53vh;
`
export const Pay = styled.div `
display: flex;
flex-direction: column;
align-items:center;
background: #background: rgba(217, 217, 217, 1);
`
export const Payment = styled.div`
display: flex;
justify-content: space-arrond;
flex-direction: column;
margin-top: 28rem;
gap: 3rem;   
`

