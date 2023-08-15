import NavDetail from "../components/NavDetail";
import Product from "../components/Product";
import Video from "../components/Video";
import Comment from "../components/Comment";
import { Theme, Grid, Container } from '@radix-ui/themes';

function VideoDetailPage() {
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
          <Product />
          <Video />
          <Comment />
        </Grid>
      </Container>
    </Theme>
  )
}

export default VideoDetailPage;