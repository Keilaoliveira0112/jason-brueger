import styled from "styled-components";

const TextField = styled.input`
  background-color: #FFFFFF;
  border: none;
  color: #000000;
  width: 70vw;
  height: 6vh;
  cursor: text;
  padding: 1rem;
  @media only screen and (min-width: 600px) {
    font-size: 2rem;
    width: 55vw;
  }    
  @media only screen and (min-width: 1024px) {
    width: 30vw;
  }
`;

export default TextField;
