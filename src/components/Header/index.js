import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../../store/modules/auth/actions";
import { MdSearch, MdCloudUpload } from "react-icons/md";
import { Container, Searchbar, Icon, Login, Avatar, IconUp } from "./styles";
export default function Header(props) {
  const screen = props.notLogged;
  const avatar = props.avatar;
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  function logout() {
    dispatch(signOut());
  }
  return (
    <>
      {screen ? (
        <Container>
          <Link to="/">
            <h1>KAKAKA</h1>
          </Link>
          <Searchbar>
            <input
              type="text"
              placeholder="Pesquisar"
              onChange={e => setSearch(e.target.value)}
            />
            <Link to={`/search/page=1/video=${search}`}>
              <Icon>
                <MdSearch />
              </Icon>
            </Link>
            <IconUp>
              <Link to="/upload">
                <MdCloudUpload />
              </Link>
            </IconUp>
          </Searchbar>
          <Login>
            <Link to="/login">
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
            <input
              type="text"
              placeholder="Pesquisar"
              onChange={e => setSearch(e.target.value)}
            />
            <Link to={`/search/page=1/video=${search}`}>
              <Icon>
                <MdSearch />
              </Icon>
            </Link>
            <IconUp>
              <Link to="/upload">
                <MdCloudUpload />
              </Link>
            </IconUp>
          </Searchbar>
          <Avatar>
            <Link to="/manager">
              <img src={avatar} />
            </Link>
            <button type="button" onClick={() => logout()}>
              LOGOUT
            </button>
          </Avatar>
        </Container>
      )}
    </>
  );
}
