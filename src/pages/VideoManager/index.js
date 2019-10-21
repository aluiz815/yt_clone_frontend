import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdModeEdit, MdDelete } from "react-icons/md";
import api from "../../services/api";
import jwt from "jwt-decode";
import { toast } from "react-toastify";
import { Container, Videos, Icon, IconEdit, IconDelete, Data } from "./styles";
import Header from "../../components/Header";
export default function VideoManager() {
  const [videos, setVideos] = useState([]);
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    async function getUser() {
      const token = localStorage.getItem("userToken");
      const { uid } = jwt(token);
      const { data } = await api.get(`users/getuser/${uid}`);
      setAvatar(data.url);
    }
    getUser();
    async function getVideo() {
      const token = localStorage.getItem("userToken");
      const { uid } = jwt(token);
      const response = await api.get(`users/getuser/${uid}`);
      setVideos(response.data.videos);
    }
    getVideo();
  }, []);
  async function destroyVideo(id) {
    try {
      const token = localStorage.getItem("userToken");
      await api.delete(`videos/getvideo/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      toast.success("Video Deletado com sucesso");
      window.location.reload();
    } catch (error) {
      toast.error(
        "Ocorreu um error ao deletar o Video, Por Favor, tente mais tarde"
      );
    }
  }
  return (
    <>
      <Header avatar={avatar} />
      <Container>
        <Videos>
          <h1>Gerenciador de Uploads</h1>
          {videos.map(video => (
            <li>
              <img src={video.thumb_url} alt="" />
              <Data>
                <h2 className="Title">{video.title}</h2>
                <h2 className="Description">{video.description}</h2>
              </Data>
              <Icon>
                <Link to={`/update/${video.id}`}>
                  <IconEdit>
                    <MdModeEdit />
                  </IconEdit>
                </Link>
                <Link onClick={() => destroyVideo(video.id)}>
                  <IconDelete>
                    <MdDelete />
                  </IconDelete>
                </Link>
              </Icon>
            </li>
          ))}
        </Videos>
      </Container>
    </>
  );
}
