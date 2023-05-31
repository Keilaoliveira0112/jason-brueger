import styled from "styled-components";

export const Main = styled.main `
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
export const LogoImg = styled.img`
    height: 133.3px;
    width: 100px;
    left: 61px;
    margin-top: %;
    top: 46px;

    @media only screen and (min-width: 1024px) {
    width: 15vw;
    }
`
export const LogoImgOut = styled.img`
    height: 50px;
    width: 50px;
    left: 771px;
    margin-top: 7%;
    top: 105px;
    border-radius: 0px;

`
export const DivMenu = styled.div`
    display: flex
    justify-content: center;
    align-items:center;
    flex-direction: row;
    gap: 2rem 5rem;
       
    width: 130vw;
    height: 50vh;
    margin: 7rem;
    padding: 10rem;
 
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


export const Item = styled.li`
    padding: 8px 10px 8px 24x;
    height: 4.3rem;
    width: 37.9rem;
    margin-tp: 15px;
    left: 4.8rem;
    top: 43.7rem;
    border-radius: 0px;
    background: #FFFFFF;
    gap: 2rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    list-style: none;

    font size: 1.6rem
    line height: 18px
    line height: 100%
    align: Left
    vertical align: Top
    color: #F28705;
`
export const LogoImgAdd = styled.img`
    width: 10rem;
    height: 10rem;
`
export const OrderResume = styled.section`
background-color: #fff;
width: 40vw;
height: 53vw;
margin-top: 85px;
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

