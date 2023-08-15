import PropTypes from 'prop-types';
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

function Comment({ comments }) {
  return (
    <AspectRatio ratio={1 / 1}>
      <Flex direction="column" gap="3">
        <ScrollArea.Root className="ScrollAreaRoot">
          <ScrollArea.Viewport className="ScrollAreaViewport">
            <div className="CommentContainer">
              <div className="CommentList">
                {comments.map(comment => (
                  <div key={comment._id}>
                    <Text size="2" color="grass"><span style={{ fontWeight: 'bold' }}>{comment.username}</span><span style={{ color: 'black' }}> {comment.comment}</span></Text> <br />
                    <Text size="1">{comment.timestamp}</Text> <br />
                  </div>
                ))}
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

Comment.propTypes = {
  comments: PropTypes.array.isRequired
};

export default Comment;