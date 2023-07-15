import styled from "styled-components";

export const Background = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalSection = styled.section`
  width: auto;
  height: auto;
  background-color: #5F9EA0;
  padding: 1rem;
  border: solid;
  border-color: #fff;
  border-radius: 2rem;
  color: #000;
  display: grid;
`;
