import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Videos } from "./styles";
import Header from "../../components/Header";
import api from "../../services/api";
export default function Initial() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function getVideo() {
      const response = await api.get("videos");
      setVideos(response.data.video.data);
    }
    getVideo();
  }, []);
  return (
    <>
      <Header notLogged={Initial} />
      <Container>
        <Videos>
          {videos.map(video => (
            <li key={video.id}>
              <Link to={`videos/${video.id}`}>
                <img src={video.thumb_url} alt="thumb_video" />
              </Link>
              <span>{video.description}</span>
              <strong>{video.user.name}</strong>
            </li>
          ))}
        </Videos>
      </Container>
    </>
  );
}
