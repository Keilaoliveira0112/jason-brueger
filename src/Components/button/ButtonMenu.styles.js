import styled from 'styled-components';

export const Menu = styled.button`
  background-color: #711D17;
  color: #F28705;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 5px;
  cursor: pointer;
  @media only screen and (min-width: 600px) {
    font-size: 2.5rem;
  }
  @media only screen and (min-width: 1024px) {
    width: 10vw;
    height: 5vh;
  }
`