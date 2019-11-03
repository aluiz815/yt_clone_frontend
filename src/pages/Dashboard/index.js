import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Styles } from "./styles";
import { Row, Col, Media, Container } from "react-bootstrap";
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
    <Styles>
      <Header avatar={avatar} />
      <Container>
        <Row className="p-3 mt-5">
          {videos.map(video => (
            <Col Col md={3} xs={4}>
              <Media>
                <Link to={`videos/${video.id}`}>
                  <img
                    src={video.thumb_url}
                    alt="thumb_video"
                    width={150}
                    height={100}
                    className="mr-auto"
                  />
                </Link>
                <p>{video.description}</p>
              </Media>
            </Col>
          ))}
        </Row>
      </Container>
    </Styles>
  );
}
