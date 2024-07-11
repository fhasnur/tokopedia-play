import { useState, useEffect } from 'react';
import NavHome from "../components/NavHome";
import Thumbnail from "../components/Thumbnail";
import { Theme, Container } from '@radix-ui/themes';
import useAxios from '../hooks/useAxios';

function HomePage() {
  const [videos, setVideos] = useState([]);
  const { axiosInstance } = useAxios();

  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await axiosInstance.get('/videos');
        setVideos(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getVideos();
  }, []);

  return (
    <Theme>
      <Container size="4">
        <NavHome />
        <Thumbnail videos={videos} />
      </Container>
    </Theme>
  )
}

export default HomePage;