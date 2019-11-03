import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Media, Container } from "react-bootstrap";
import { Styles } from "./styles";
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
    <Styles>
      <Header notLogged={Initial} />
      <Container>
        <Row className="p-3 mt-5">
          {videos.map(video => (
            <Col md={3} xs={4}>
              <Media>
                <Link to={`videos/${video.id}`}>
                  <img
                    src={video.thumb_url}
                    width={100}
                    height={70}
                    className="mr-auto"
                    alt="thumb_video"
                  />
                </Link>
                <p>{video.description}</p>
                <p>{video.user.name}</p>
              </Media>
            </Col>
          ))}
        </Row>
      </Container>
    </Styles>
  );
}
