import React, { useState, useEffect } from 'react';
import NavDetail from "../components/NavDetail";
import Product from "../components/Product";
import Video from "../components/Video";
import Comment from "../components/Comment";
import { Theme, Grid, Container } from '@radix-ui/themes';
import { useParams } from 'react-router-dom';
import axios from "axios";

function VideoDetailPage() {

  const { videoId } = useParams();
  const [products, setProducts] = useState([]);
  const [videos, setVideos] = useState([]);
  const [comments, setComments] = useState([]);

  const url_products = "https://odd-erin-whale-boot.cyclic.cloud/products/";
  const url_videos = "https://odd-erin-whale-boot.cyclic.cloud/videos/";
  const url_comments = "https://odd-erin-whale-boot.cyclic.cloud/comments/";

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const responseProducts = await axios.get(url_products);
      setProducts(responseProducts.data);

      const responseVideos = await axios.get(url_videos);
      console.log(responseVideos);
      setVideos(responseVideos.data);

      const responseComments = await axios.get(url_comments);
      setComments(responseComments.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Theme>
      <Container size="4">
        <NavDetail />
        <Grid columns="3"
          gap="3"
          width="auto"
          style={{
            gridTemplateColumns: '21% 56% 21%',
            maxWidth: '100%',
            height: '70vh'
          }}>
          <Product products={products} />
          <Video videos={videos} />
          <Comment comments={comments} />
        </Grid>
      </Container>
    </Theme>
  )
}

export default VideoDetailPage;