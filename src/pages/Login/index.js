import React, { useState } from "react";
import { Container, FormLogin, LoginButton } from "./styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInRequest } from "../../store/modules/auth/actions";
import Header from "../../components/Header";
export default function Login() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(signInRequest(email, password));
  }
  return (
    <>
      <Header notLogged={Login} />
      <Container>
        <FormLogin onSubmit={handleSubmit}>
          <h1>KAKAKA</h1>
          <p>Efetue o login ou cadastre-se</p>
          <input
            type="email"
            required
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            required
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <LoginButton>
            <Link to="/register">
              <button type="button">Cadastrar</button>
            </Link>
            <span>ou</span>
            <button className="Login" type="submit">
              {loading ? "Carregando" : "Logar"}
            </button>
          </LoginButton>
        </FormLogin>
      </Container>
    </>
  );
}
