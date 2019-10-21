import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { MdAddAPhoto } from "react-icons/md";
import { Container, FormRegister, RegisterButton, Icon } from "./styles";
import api from "../../services/api";
import Header from "../../components/Header";
export default function Register({ history }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const preview = useMemo(() => {
    return avatar ? URL.createObjectURL(avatar) : null;
  }, [avatar]);
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const data = new FormData();
      data.append("name", name);
      data.append("username", username);
      data.append("email", email);
      data.append("password", password);
      data.append("avatar", avatar);
      await api.post("users/new", data);
      toast.success("Usuario Cadastrado Com Sucesso");
      history.push("/login");
    } catch (error) {
      toast.error("Algo esta errado com os dados, por favor verifique");
    }
  }
  return (
    <>
      <Header notLogged={Register} />
      <Container>
        <FormRegister onSubmit={handleSubmit}>
          <h1>CADASTRO</h1>
          <input
            type="text"
            required
            placeholder="Nome"
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            required
            placeholder="E-mail"
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="text"
            required
            placeholder="Usuario"
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="password"
            required
            placeholder="Senha"
            onChange={e => setPassword(e.target.value)}
          />
          <span>Foto De Perfil</span>
          <label
            id="thumbnail"
            className={avatar ? "has-thumbnail" : ""}
            style={{ backgroundImage: `url(${preview})` }}
          >
            <input
              type="file"
              className="file"
              required
              onChange={e => setAvatar(e.target.files[0])}
            />
            <Icon>
              <MdAddAPhoto />
            </Icon>
          </label>
          <RegisterButton>
            <Link to="/login">
              <button type="button">Cancelar</button>
            </Link>
            <span>ou</span>
            <button className="Login" type="submit">
              Cadastrar
            </button>
          </RegisterButton>
        </FormRegister>
      </Container>
    </>
  );
}
