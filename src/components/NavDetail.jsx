import {
  Grid,
  Flex,
  IconButton
} from '@radix-ui/themes';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

function NavDetail() {
  return (
    <Grid columns="3" gap="2" mt="5" mb="5">
      <Flex direction="row">
        <IconButton color="grass" variant="ghost" radius="full">
          <ArrowLeftIcon width="25" height="25" />
        </IconButton>
      </Flex>
    </Grid >
  )
}

export default NavDetail;