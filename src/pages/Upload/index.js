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
export default function Upload({ history }) {
  const [avatar, setAvatar] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [video, setVideo] = useState(null);
  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);
  const previewVideo = useMemo(() => {
    return video ? URL.createObjectURL(video) : null;
  }, [video]);
  useEffect(() => {
    async function getUser() {
      const token = localStorage.getItem("userToken");
      const { uid } = jwt(token);
      const { data } = await api.get(`users/getuser/${uid}`);
      setAvatar(data.url);
    }
    getUser();
  }, []);
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const token = localStorage.getItem("userToken");
      const data = new FormData();
      data.append("title", title);
      data.append("description", description);
      data.append("thumb", thumbnail);
      data.append("video", video);
      await api.post("videos/new", data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      toast.success("Video Enviado Com Sucesso");
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
          <h1>UPLOAD</h1>
          <input
            type="text"
            required
            placeholder="Titulo"
            onChange={e => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Descricao"
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
              required
              onChange={e => setThumbnail(e.target.files[0])}
            />
            <Icon>
              <MdAddAPhoto />
            </Icon>
          </label>
          <span> VIDEO</span>
          <label
            id="thumbnail"
            className={video ? "has-thumbnail" : ""}
            style={{ backgroundImage: `url(${previewVideo})` }}
          >
            <input
              type="file"
              className="videoFile"
              required
              onChange={e => setVideo(e.target.files[0])}
            />
            <VideoIcon>
              <MdVideocam />
            </VideoIcon>
          </label>
          <RegisterButton>
            <Link to="/dashboard">
              <button type="button">Cancelar</button>
            </Link>
            <span>ou</span>
            <button className="Login" type="submit">
              Enviar
            </button>
          </RegisterButton>
        </FormRegister>
      </Container>
    </>
  );
}
