import React from "react";
import { Link } from "react-router-dom";
import { MdAddAPhoto } from "react-icons/md";
import { Container, FormRegister, RegisterButton, Icon } from "./styles";
import Header from "../../components/Header";
export default function Register() {
  return (
    <>
      <Header notLogged={Register} />
      <Container>
        <FormRegister>
          <h1>CADASTRO</h1>
          <input type="text" required placeholder="Nome" />
          <input type="email" required placeholder="E-mail" />
          <input type="text" required placeholder="Usuario" />
          <input type="password" required placeholder="Senha" />
          <span>Foto De Perfil</span>
          <label id="thumbnail">
            <input type="file" className="file" required />
            <Icon>
              <MdAddAPhoto />
            </Icon>
          </label>
          <RegisterButton>
            <Link to="/login">
              <button type="button">Cancelar</button>
            </Link>
            <span>ou</span>
            <button className="Login" type="button">
              Cadastrar
            </button>
          </RegisterButton>
        </FormRegister>
      </Container>
    </>
  );
}
