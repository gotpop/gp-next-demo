import { Box } from "@mui/material";
import Comment from "./comment";

// TODO: Import types
interface Props {
  comments: [Comment];
}

interface Comment {
  name: string;
  email: string;
  body: string;
}

export default function Comments({ comments }: Props) {
  if (!comments) return (
    <><p>Loading...</p></>
  );

  return (
    <Box mt={4}>
      {comments.map((comment: Comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </Box>
  );
};
