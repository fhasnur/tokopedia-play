import { useState, useEffect } from 'react';
import NavDetail from "../components/NavDetail";
import Product from "../components/Product";
import Video from "../components/Video";
import Comment from "../components/Comment";
import { Theme, Grid, Container } from '@radix-ui/themes';
import useAxios from '../hooks/useAxios';

function VideoDetailPage() {

  const [products, setProducts] = useState([]);
  const [videos, setVideos] = useState([]);
  const [comments, setComments] = useState([]);
  const { axiosInstance } = useAxios();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const responseProducts = await axiosInstance.get('/products');
      setProducts(responseProducts.data);

      const responseVideos = await axiosInstance.get('/videos');
      console.log(responseVideos);
      setVideos(responseVideos.data);

      const responseComments = await axiosInstance.get('/comments');
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