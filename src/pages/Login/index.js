import React, { useState } from "react";
import { Container, ButtonGroup, Button, Form } from "react-bootstrap";
import { Styles } from "./styles";
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
    <Styles>
      <Header notLogged={Login} />
      <Container>
        <Form onSubmit={handleSubmit} className="form-user p-2 mt-2">
          <h1>KAKAKA</h1>
          <p>Efetue o login ou cadastre-se</p>
          <div className="form-group">
            <input
              type="email"
              required
              className="form-control"
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="password"
              required
              className="form-control mt-2"
              placeholder="Senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <ButtonGroup className="p-2 d-flex">
            <Button
              variant="primary"
              href="/register"
              type="button"
              className="mr-5"
            >
              Registrar
            </Button>
            <Button variant="success" type="submit">
              {loading ? "Carregando" : "Logar"}
            </Button>
          </ButtonGroup>
        </Form>
      </Container>
    </Styles>
  );
}
