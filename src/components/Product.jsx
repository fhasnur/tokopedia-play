import {
  AspectRatio,
  Badge,
  Heading,
  Text,
  Box,
  Card,
} from '@radix-ui/themes';
import * as ScrollArea from '@radix-ui/react-scroll-area';

function Product() {
  return (
    <AspectRatio ratio={16 / 9}>
      <ScrollArea.Root className="ScrollAreaRoot">
        <ScrollArea.Viewport className="ScrollAreaViewport">
          <Box>
            <Card mt="3" mx="3">
              <Badge variant="solid" color="amber" ml="2" mt="2" style={{ zIndex: 5, position: 'absolute' }}>
                1
              </Badge>
              <a href="" style={{ textDecoration: 'none' }}>
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=820&q=80"
                  alt="A house in a forest"
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                    maxHeight: '120px',
                    borderRadius: 'var(--radius-2)',
                    position: 'relative'
                  }}
                />
                <Box columns="2" gap="2" width="auto" ml="2">
                  <Heading size="2" color="grass">Asus TUF Gaming</Heading>
                  <Text size="1" color="grass">Rp. 15.000.000</Text>
                </Box>
              </a>
            </Card>
            <Card mt="3" mx="3">
              <Badge variant="solid" color="amber" ml="2" mt="2" style={{ zIndex: 5, position: 'absolute' }}>
                2
              </Badge>
              <a href="" style={{ textDecoration: 'none' }}>
                <img
                  src="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
                  alt="A house in a forest"
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                    maxHeight: '120px',
                    borderRadius: 'var(--radius-2)',
                    position: 'relative'
                  }}
                />
                <Box columns="2" gap="2" width="auto" ml="2">
                  <Heading size="2" color="grass">Asus Zenbook 5 Pro</Heading>
                  <Text size="1" color="grass">Rp. 11.000.000</Text>
                </Box>
              </a>
            </Card>
            <Card mt="3" mx="3">
              <Badge variant="solid" color="amber" ml="2" mt="2" style={{ zIndex: 5, position: 'absolute' }}>
                3
              </Badge>
              <a href="" style={{ textDecoration: 'none' }}>
                <img
                  src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80"
                  alt="A house in a forest"
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                    maxHeight: '120px',
                    borderRadius: 'var(--radius-2)',
                    position: 'relative'
                  }}
                />
                <Box columns="2" gap="2" width="auto" ml="2">
                  <Heading size="2" color="grass">Acer Zepirus 4</Heading>
                  <Text size="1" color="grass">Rp. 9.000.000</Text>
                </Box>
              </a>
            </Card>
          </Box>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
          <ScrollArea.Thumb className="ScrollAreaThumb" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="horizontal">
          <ScrollArea.Thumb className="ScrollAreaThumb" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner className="ScrollAreaCorner" />
      </ScrollArea.Root>
    </AspectRatio>
  )
}

export default Product;