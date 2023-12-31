import {
  AspectRatio,
  Badge,
  Heading,
  Text,
  Box,
  Grid
} from '@radix-ui/themes';
import { Link } from 'react-router-dom';

function Thumbnail({ videos }) {
  return (
    <Grid columns="5" gap="2" mb="5">
      {videos.map(video => (
        <AspectRatio key={video._id} ratio={2 / 3}>
          <Link
            to={`/${videos._id}`}
          >
            <Badge variant="solid" color="red" ml="2" mt="2" style={{ zIndex: 5, position: 'absolute' }}>
              LIVE
            </Badge>
            <img
              src={video.thumbnail}
              alt={video.title}
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                borderRadius: 'var(--radius-2)',
                position: 'relative'
              }}
            />
            <Box columns="2" gap="2" ml="2" style={{ color: 'white', zIndex: 5, marginTop: '-4.5rem', position: 'absolute' }}>
              <Heading size="2">{video.title}</Heading>
              <Text size="1">{video.owner}</Text>
            </Box>
          </Link>

        </AspectRatio>
      ))}
    </Grid>
  )
}

export default Thumbnail;