import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Navbar, Nav, Form, FormControl, Button, Image } from "react-bootstrap";
import { signOut } from "../../store/modules/auth/actions";
import { MdSearch, MdCloudUpload } from "react-icons/md";
import { Container } from "./styles";
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
          <Navbar expand="lg">
            <Navbar.Brand href="/">YOUSMILE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Form
                inline
                className="ml-auto justify-content-center w-100 mt-1"
              >
                <FormControl
                  type="text"
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Buscar Video"
                  className="w-75"
                />
                <Button>
                  <Link to={`/search/page=1/video=${search}`}>
                    <MdSearch />
                  </Link>
                </Button>
              </Form>
              <Nav className="mt-2 ml-auto ">
                <Nav.Link href="/login" className="mb-1">
                  LOGIN
                </Nav.Link>
                <Nav.Link href="/register" className="mb-1">
                  REGISTER
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      ) : (
        <Container>
          <Navbar expand="lg">
            <Navbar.Brand href="/">YOUSMILE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Form
                inline
                className="ml-auto justify-content-center w-100 mt-1"
              >
                <FormControl
                  type="text"
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Buscar Video"
                  className="w-75"
                />
                <Button>
                  <Link to={`/search/page=1/video=${search}`}>
                    <MdSearch />
                  </Link>
                </Button>
              </Form>
              <Nav className="mt-2 ml-auto ">
                <Link to="/upload">
                  <MdCloudUpload className="upload" />
                </Link>
                <Link to="/manager">
                  <Image
                    src={avatar}
                    className="ml-5 mr-5 mb-1 "
                    width={50}
                    height={50}
                    roundedCircle
                  />
                </Link>
                <Button type="button" variant="danger" onClick={() => logout()}>
                  LOGOUT
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      )}
    </>
  );
}
