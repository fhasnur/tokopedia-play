import PropTypes from 'prop-types';
import { AspectRatio } from '@radix-ui/themes';
import ReactPlayer from 'react-player/youtube';

function Video({ videos }) {
  return (
    <AspectRatio ratio={16 / 9} key={videos._id}>
      <ReactPlayer
        url={videos.linkVideo}
        width="420"
        height="345"
        alt={videos.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          boxSizing: 'border-box',
          borderRadius: 'var(--radius-2)',
        }}
      />
    </AspectRatio>
  )
}

Video.propTypes = {
  videos: PropTypes.array.isRequired
};

export default Video;