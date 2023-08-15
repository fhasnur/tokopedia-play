import {
  Grid,
  Flex,
  IconButton
} from '@radix-ui/themes';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';

function NavHome() {
  return (
    <Grid columns="3" gap="2" mt="5" mb="5">
      <Flex direction="row">
        <a href={`https://www.tokopedia.com/`}>
          <IconButton color="grass" variant="ghost" radius="full">
            <ArrowLeftIcon width="25" height="25" />
          </IconButton>
        </a>
      </Flex>
    </Grid >
  )
}

export default NavHome;