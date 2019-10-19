import React from "react";

// import { Container } from './styles';
import Header from "../../components/Header";
import Teste from "../../assets/avatar.jpeg";
export default function VideoManager() {
  return (
    <>
      <Header avatar={Teste} />
      <div>
        <h1>Tela De Gerenciamento de Videos</h1>
      </div>
    </>
  );
}
