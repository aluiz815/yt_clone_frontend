import React from "react";
import { Link } from "react-router-dom";
import { MdAddAPhoto, MdVideocam } from "react-icons/md";
import {
  Container,
  FormRegister,
  RegisterButton,
  Icon,
  VideoIcon
} from "./styles";
import Teste from "../../assets/avatar.jpeg";
import Header from "../../components/Header";
export default function Upload() {
  return (
    <>
      <Header avatar={Teste} />
      <Container>
        <FormRegister>
          <h1>UPLOAD</h1>
          <input type="text" required placeholder="Titulo" />
          <input type="text" required placeholder="Descricao" />
          <span>Thumbnail Do Video</span>
          <label id="thumbnail">
            <input type="file" className="file" required />
            <Icon>
              <MdAddAPhoto />
            </Icon>
          </label>
          <span> VIDEO</span>
          <label id="thumbnail">
            <input type="file" className="videoFile" required />
            <VideoIcon>
              <MdVideocam />
            </VideoIcon>
          </label>
          <RegisterButton>
            <Link to="/login">
              <button type="button">Cancelar</button>
            </Link>
            <span>ou</span>
            <button className="Login" type="button">
              Enviar
            </button>
          </RegisterButton>
        </FormRegister>
      </Container>
    </>
  );
}
