import {
  Grid,
  Flex,
  IconButton
} from '@radix-ui/themes';
import { HomeIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';

function NavDetail() {
  return (
    <Grid columns="3" gap="2" mt="5" mb="5">
      <Flex direction="row">
        <Link to={`/`}>
          <IconButton color="grass" variant="ghost" radius="full">
            <HomeIcon width="25" height="25" />
          </IconButton>
        </Link>
      </Flex>
    </Grid >
  )
}

export default NavDetail;