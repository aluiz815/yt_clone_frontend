import React from "react";
import { Container, Videos } from "./styles";
import Teste from "../../assets/Flexbox.png";
export default function Initial() {
  return (
    <Container>
      <Videos>
        <li>
          <img src={Teste} alt="" />
          <span>Img1</span>
          <strong>Autor</strong>
        </li>
        <li>
          <img src={Teste} alt="" />
          <span>Img2</span>
          <strong>Autor</strong>
        </li>
        <li>
          <img src={Teste} alt="" />
          <span>Img3</span>
          <strong>Autor</strong>
        </li>
        <li>
          <img src={Teste} alt="" />
          <span>Img4</span>
          <strong>Autor</strong>
        </li>
        <li>
          <img src={Teste} alt="" />
          <span>Img1</span>
          <strong>Autor</strong>
        </li>
        <li>
          <img src={Teste} alt="" />
          <span>Img2</span>
          <strong>Autor</strong>
        </li>
        <li>
          <img src={Teste} alt="" />
          <span>Img3</span>
          <strong>Autor</strong>
        </li>
        <li>
          <img src={Teste} alt="" />
          <span>Img4</span>
          <strong>Autor</strong>
        </li>
      </Videos>
    </Container>
  );
}
