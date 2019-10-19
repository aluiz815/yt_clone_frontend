import React from "react";
import { Container, FormLogin, LoginButton } from "./styles";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
export default function Login() {
  return (
    <>
      <Header notLogged={Login} />
      <Container>
        <FormLogin>
          <h1>KAKAKA</h1>
          <p>Efetue o login ou cadastre-se</p>
          <input type="email" required placeholder="E-mail" />
          <input type="password" required placeholder="Senha" />
          <LoginButton>
            <Link to="/register">
              <button type="button">Cadastrar</button>
            </Link>
            <span>ou</span>
            <button className="Login" type="button">
              Logar
            </button>
          </LoginButton>
        </FormLogin>
      </Container>
    </>
  );
}
