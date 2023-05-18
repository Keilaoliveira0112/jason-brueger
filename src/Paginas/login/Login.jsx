import { Link } from "react-router-dom";
import Form from '../../Components/Forms/Form';
import Logo from '../../assets/Logo.svg'
import { Section, H1 } from "./Login.styled";

import React from 'react'

export default function Login() {
  return (
    <Section>
      <img src={Logo} alt='logo jason brueger' />
      <H1>Login</H1>
      <Form />
    </Section> 
  )
}