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
export const UlMenu = styled.ul`
display: grid;
gap: 1rem;
`
