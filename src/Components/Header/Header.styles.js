import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  align-items: center;
`;
export const ImgLogo = styled.img`
  width: 12vw;
  @media only screen and (min-width: 1024px) {
    width: 7vw;
  }
`;
export const ImgLogout = styled.img`
  width: 8vw;
  cursor: pointer;
  @media only screen and (min-width: 1024px) {
    width: 4vw;
  }
`;
