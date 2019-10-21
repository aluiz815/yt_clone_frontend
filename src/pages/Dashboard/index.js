import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Videos } from "./styles";
import Header from "../../components/Header";
import jwt_decode from "jwt-decode";
import api from "../../services/api";
export default function Dashboard() {
  const [videos, setVideos] = useState([]);
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    async function getVideo() {
      try {
        const user = localStorage.getItem("userToken");
        const { uid } = jwt_decode(user);
        const { data } = await api.get(`users/getuser/${uid}`);
        const subs = data.subscribers;
        subs.map(sub => {
          async function setVideo() {
            const id = sub.like_user_id;
            const idparse = parseInt(id);
            const response = await api.get(`users/getuser/${idparse}`);
            setVideos(response.data.videos);
          }
          setVideo();
        });
      } catch (error) {}
    }

    async function avatar_url() {
      try {
        const token = localStorage.getItem("userToken");
        const bearer = token.replace("Bearer", "");
        const { uid } = jwt_decode(bearer);
        const response = await api.get(`users/getuser/${uid}`);
        setAvatar(response.data.url);
      } catch (error) {}
    }
    avatar_url();
    getVideo();
  }, []);

  return (
    <>
      <Header avatar={avatar} />
      <Container>
        <Videos>
          {videos.map(video => (
            <li key={video.id}>
              <Link to={`videos/${video.id}`}>
                <img src={video.thumb_url} alt="thumb_video" />
              </Link>
              <span>{video.description}</span>
            </li>
          ))}
        </Videos>
      </Container>
    </>
  );
}
