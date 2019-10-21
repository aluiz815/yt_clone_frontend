import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import api from "../../services/api";
import jwt from "jwt-decode";
import { toast } from "react-toastify";
import { Container, Videos, Body } from "./styles";

export default function Video({ match }) {
  const [video, setVideo] = useState("");
  const [user, setUser] = useState("");
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    async function getVideo() {
      const id = match.params.id;
      const response = await api.get(`videos/getvideo/${id}`);
      setVideo(response.data.video);
      setUser(response.data.video.user);
    }
    async function getUser() {
      try {
        const token = localStorage.getItem("userToken");
        const { uid } = jwt(token);
        const { data } = await api.get(`users/getuser/${uid}`);
        setAvatar(data.url);
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
    getVideo();
  }, []);
  async function handleSubmit() {
    try {
      const id = video.user_id;
      const token = localStorage.getItem("userToken");
      await api.post(`users/${id}/like`, null, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      toast.success("Voce Se inscreveu com sucesso");
    } catch (error) {
      toast.error("Algo Deu Errado, Por Favor Tente Mais Tarde");
    }
  }
  return (
    <>
      {avatar ? <Header avatar={avatar} /> : <Header notLogged={Video} />}
      <Body>
        <Container>
          <Videos>
            <li>
              <video src={video.video_url} autoPlay controls></video>
              <span>{video.description}</span>
              <strong>{user.name}</strong>
              <button type="button" onClick={() => handleSubmit()}>
                INSCREVER-SE
              </button>
            </li>
          </Videos>
        </Container>
      </Body>
    </>
  );
}
