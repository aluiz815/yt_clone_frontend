import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { Container, Searchbar, Icon, Login, Avatar } from "./styles";

export default class Header extends Component {
  render() {
    const screen = this.props.notLogged;
    return (
      <>
        {screen ? (
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
            <Login>
              <Link to="/">
                <button type="button">LOGIN</button>
              </Link>
            </Login>
          </Container>
        ) : (
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
            <Avatar>
              <Link to="/">
                <img src={this.props.avatar} alt="" />
              </Link>
            </Avatar>
          </Container>
        )}
      </>
    );
  }
}
