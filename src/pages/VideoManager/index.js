import React from "react";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { Container, Videos, Icon, IconEdit, IconDelete, Data } from "./styles";
import Header from "../../components/Header";
import Teste from "../../assets/avatar.jpeg";
export default function VideoManager() {
  return (
    <>
      <Header avatar={Teste} />
      <Container>
        <Videos>
          <h1>Gerenciador de Uploads</h1>
          <li>
            <img src={Teste} alt="" />
            <Data>
              <h2 className="Title">Titulo</h2>
              <h2 className="Description">Descricao</h2>
            </Data>
            <Icon>
              <IconEdit>
                <MdModeEdit />
              </IconEdit>
              <IconDelete>
                <MdDelete />
              </IconDelete>
            </Icon>
          </li>
        </Videos>
      </Container>
    </>
  );
}
