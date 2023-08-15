import {
  Button,
  Grid
} from '@radix-ui/themes';

function NavHome() {
  return (
    <Grid columns="9" gap="2" mt="5" mb="5">
      <Button radius="full" variant="soft" color="grass" size="2">
        Live
      </Button>
      <Button radius="full" variant="soft" color="grass" size="2">
        Explore
      </Button>
      <Button radius="full" variant="soft" color="grass" size="2">
        New
      </Button>
      <Button radius="full" variant="soft" color="grass" size="2">
        Upcoming
      </Button>
    </Grid>
  )
}

export default NavHome;