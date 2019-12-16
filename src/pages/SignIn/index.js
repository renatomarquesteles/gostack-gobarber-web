import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} width="90" height="70" alt="GoBarber" />

      <form>
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha" />
        <button type="submit">ACESSAR</button>
        <Link to="/register">Criar uma nova conta</Link>
      </form>
    </>
  );
}
