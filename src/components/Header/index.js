import React from "react";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { Container, Searchbar, Icon } from "./styles";

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <h1>KAKAKA</h1>
      </Link>
      <Searchbar>
        <input type="text" placeholder="Pesquisar" />
        <Link to="#">
          <Icon>
            <MdSearch />
          </Icon>
        </Link>
      </Searchbar>
    </Container>
  );
}
