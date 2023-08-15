import PropTypes from 'prop-types';
import {
  AspectRatio,
  Badge,
  Heading,
  Text,
  Box,
  Card,
} from '@radix-ui/themes';
import * as ScrollArea from '@radix-ui/react-scroll-area';

function Product({ products }) {
  const number = 0;

  return (
    <AspectRatio ratio={16 / 9}>
      <ScrollArea.Root className="ScrollAreaRoot">
        <ScrollArea.Viewport className="ScrollAreaViewport">
          <Box>

            {products.map((product, index) => (
              <Card mt="3" mx="3" key={product._id}>
                <Badge variant="solid" color="amber" ml="2" mt="2" style={{ zIndex: 5, position: 'absolute' }}>
                  {index + 1}
                </Badge>
                <a href="" style={{ textDecoration: 'none' }}>
                  <img
                    src={product.linkProduct}
                    alt={product.title}
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
                    <Heading size="2" color="grass">{product.title}</Heading>
                    <Text size="1" color="grass">Rp.{product.price}</Text>
                  </Box>
                </a>
              </Card>
            ))}
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

Product.propTypes = {
  products: PropTypes.array.isRequired
};

export default Product;