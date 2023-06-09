import styled from 'styled-components';

export const Background = styled.section`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgb(0, 0, 0, 0.7);
z-index: 1000;

@media only screen and (min-width: 600px) {
  
}
@media only screen and (min-width: 1024px) {
  
}
`
export const ModalSection = styled.section`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
padding: 15rem;
background-color: #fff;
border-radius: 1rem;
@media only screen and (min-width: 600px) {
  
}
@media only screen and (min-width: 1024px) {
  
}
`