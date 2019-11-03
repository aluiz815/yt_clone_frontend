import React, { useState, useEffect, useMemo } from "react";
import { Container, Form, ButtonGroup, Button } from "react-bootstrap";
import api from "../../services/api";
import { toast } from "react-toastify";
import jwt from "jwt-decode";
import { Link } from "react-router-dom";
import { MdAddAPhoto, MdVideocam } from "react-icons/md";
import { Icon, VideoIcon, Styles, RegisterButton } from "./styles";
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
    }
  }
  return (
    <Styles>
      <Header avatar={avatar} />
      <Container>
        <Form onSubmit={handleSubmit} className="form-user p-2 mt-2">
          <h1>UPLOAD</h1>
          <div className="form-group">
            <label>Titulo</label>
            <input
              className="form-control"
              type="text"
              required
              placeholder="Titulo"
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Descricao</label>
            <input
              className="form-control"
              type="text"
              placeholder="Descricao"
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
                required
                onChange={e => setThumbnail(e.target.files[0])}
              />
              <Icon>
                <MdAddAPhoto />
              </Icon>
            </label>
          </div>
          <div className="form-group">
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
          </div>

          <div className="d-flex p-2 btn-group ">
            <Link to="/dashboard">
              <Button variant="danger" type="button" className="mr-5">
                Cancelar
              </Button>
            </Link>
            <Button variant="success" type="submit">
              Enviar
            </Button>
          </div>
        </Form>
      </Container>
    </Styles>
  );
}
