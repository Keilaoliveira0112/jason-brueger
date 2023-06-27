import styled from 'styled-components';

export const Form = styled.form`
display: grid;
justify-items: center;
gap: 2rem;
width: 90vw;
border: 1rem #fffff;
padding: 1rem;
border-radius: 1rem;
`

export const GroupButtons = styled.section`
  display: flex;
  gap: 1rem;
  @media only screen and (min-width: 1024px) {
    margin-top: 1.5rem;
  }
`