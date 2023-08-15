import {
  Button,
  AspectRatio,
  Text,
  TextField,
  TextArea,
  Flex,
} from '@radix-ui/themes';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { CaretRightIcon } from '@radix-ui/react-icons';

function Comment() {
  return (
    <AspectRatio ratio={1 / 1}>
      <Flex direction="column" gap="3">
        <ScrollArea.Root className="ScrollAreaRoot">
          <ScrollArea.Viewport className="ScrollAreaViewport">
            <div className="CommentContainer">
              <div className="CommentList">
                <Text size="2" color="grass"><span style={{ fontWeight: 'bold' }}>fhasnur</span><span style={{ color: 'black' }}> Spill etalase 1 bang</span></Text> <br />
                <Text size="1">13-08-2023 7:46 PM</Text> <br />
                <Text size="2" color="grass"><span style={{ fontWeight: 'bold' }}>atom</span><span style={{ color: 'black' }}> Bang etalase 2 bisa upgrade ram sm ssd gk?</span></Text> <br />
                <Text size="1">13-08-2023 7:48 PM</Text> <br />
                <Text size="2" color="grass"><span style={{ fontWeight: 'bold' }}>fhasnur</span><span style={{ color: 'black' }}> Spill etalase 1 bang</span></Text> <br />
                <Text size="1">13-08-2023 7:46 PM</Text> <br />
                <Text size="2" color="grass"><span style={{ fontWeight: 'bold' }}>atom</span><span style={{ color: 'black' }}> Bang etalase 2 bisa upgrade ram sm ssd gk?</span></Text> <br />
                <Text size="1">13-08-2023 7:48 PM</Text> <br />
                <Text size="2" color="grass"><span style={{ fontWeight: 'bold' }}>fhasnur</span><span style={{ color: 'black' }}> Spill etalase 1 bang</span></Text> <br />
                <Text size="1">13-08-2023 7:46 PM</Text> <br />
                <Text size="2" color="grass"><span style={{ fontWeight: 'bold' }}>atom</span><span style={{ color: 'black' }}> Bang etalase 2 bisa upgrade ram sm ssd gk?</span></Text> <br />
                <Text size="1">13-08-2023 7:48 PM</Text> <br />
              </div>
            </div>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
            <ScrollArea.Thumb className="ScrollAreaThumb" />
          </ScrollArea.Scrollbar>
          <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="horizontal">
            <ScrollArea.Thumb className="ScrollAreaThumb" />
          </ScrollArea.Scrollbar>
          <ScrollArea.Corner className="ScrollAreaCorner" />
        </ScrollArea.Root>
        <div className="CommentInput">
          <TextField.Root>
            <TextField.Input className="UsernameTextarea" size="1" color="grass" placeholder="username…" />
          </TextField.Root>
          <TextArea size="1" color="grass" className="CommentTextarea" placeholder="comment…" />
          <Button size="1" color="grass" variant="solid" radius="full">
            Add <CaretRightIcon />
          </Button>
        </div>
      </Flex>
    </AspectRatio >
  )
}

export default Comment;