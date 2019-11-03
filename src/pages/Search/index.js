import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import api from "../../services/api";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Container, Videos, Body } from "./styles";

export default function Video({ match }) {
  const [videos, setVideo] = useState([]);
  const [avatar, setAvatar] = useState("");
  const page = match.params.page;
  const videoParams = match.params.video;
  useEffect(() => {
    async function getVideo() {
      const response = await api.get(`search?${page}&${videoParams}`);
      setVideo(response.data.videos.data);
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
  }, [videoParams, page]);
  return (
    <>
      {avatar ? <Header avatar={avatar} /> : <Header notLogged={Video} />}
      <Body>
        <Container>
          <Videos>
            {videos.length > 0 ? (
              videos.map(video => (
                <li key={video.id}>
                  <Link to={`/videos/${video.id}`}>
                    <img
                      src={`http://127.0.0.1:3333/files/videos/${video.user_id}/${video.thumb}`}
                      alt="thumb_video"
                    />
                  </Link>
                  <span>{video.description}</span>
                </li>
              ))
            ) : (
              <h1>Nao Tem Video</h1>
            )}
          </Videos>
        </Container>
      </Body>
    </>
  );
}
