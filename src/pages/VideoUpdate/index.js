import React, { useState, useEffect, useMemo } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import jwt from "jwt-decode";
import { Link } from "react-router-dom";
import { MdAddAPhoto, MdVideocam } from "react-icons/md";
import {
  Container,
  FormRegister,
  RegisterButton,
  Icon,
  VideoIcon
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
    <>
      <Header avatar={avatar} />
      <Container>
        <FormRegister onSubmit={handleSubmit}>
          <h1>UPDATE</h1>
          <input
            type="text"
            required
            placeholder="Titulo"
            onChange={e => setTitle(e.target.value)}
            value={title}
          />
          <input
            type="text"
            placeholder="Descricao"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
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
          <RegisterButton>
            <Link to="/dashboard">
              <button type="button">Cancelar</button>
            </Link>
            <span>ou</span>
            <button className="Login" type="submit">
              Alterar
            </button>
          </RegisterButton>
        </FormRegister>
      </Container>
    </>
  );
}
