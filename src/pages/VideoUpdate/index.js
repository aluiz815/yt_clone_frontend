import React, { useState, useEffect, useMemo } from "react";
import { Container, ButtonGroup, Button, Form } from "react-bootstrap";
import api from "../../services/api";
import { toast } from "react-toastify";
import jwt from "jwt-decode";
import { Link } from "react-router-dom";
import { MdAddAPhoto, MdVideocam } from "react-icons/md";
import {
  FormRegister,
  RegisterButton,
  Icon,
  VideoIcon,
  Styles
} from "./styles";
import Header from "../../components/Header";
export default function Upload({ history, match }) {
  const [avatar, setAvatar] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const id = match.params.id;
  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);
  useEffect(() => {
    async function getUser() {
      const token = localStorage.getItem("userToken");
      const { uid } = jwt(token);
      const { data } = await api.get(`users/getuser/${uid}`);
      setAvatar(data.url);
    }
    getUser();
    async function getVideo() {
      const response = await api.get(`videos/getvideo/${id}`);
      setTitle(response.data.video.title);
      setDescription(response.data.video.title);
    }
    getVideo();
  }, []);
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const token = localStorage.getItem("userToken");
      const data = new FormData();
      data.append("title", title);
      data.append("description", description);
      data.append("thumb", thumbnail);
      await api.put(`videos/getvideo/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      toast.success("Video Atualizado Com Sucesso");
      history.push("/manager");
    } catch (error) {
      toast.error("Algo esta errado com os dados, por favor verifique");
      console.error(error);
    }
  }
  return (
    <Styles>
      <Header avatar={avatar} />
      <Container>
        <Form onSubmit={handleSubmit} className="form-user p-2 mt-2">
          <h1>UPDATE</h1>
          <div className="form-group">
            <label>Titulo</label>
            <input
              className="form-control"
              type="text"
              required
              placeholder="Titulo"
              onChange={e => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="form-group">
            <label>Descricao</label>
            <input
              type="text"
              className="form-control"
              placeholder="Descricao"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <span>Thumbnail Do Video</span>
            <label
              id="thumbnail"
              className={thumbnail ? "has-thumbnail" : ""}
              style={{ backgroundImage: `url(${preview})` }}
            >
              <input
                type="file"
                className="file"
                onChange={e => setThumbnail(e.target.files[0])}
              />
              <Icon>
                <MdAddAPhoto />
              </Icon>
            </label>
          </div>

          <ButtonGroup className="p-2 d-flex">
            <Button href="/" variant="danger" className="mr-5" type="button">
              Cancelar
            </Button>
            <Button variant="success" type="submit">
              Alterar
            </Button>
          </ButtonGroup>
        </Form>
      </Container>
    </Styles>
  );
}
