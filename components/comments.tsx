import { Box } from "@mui/material";
import Comment from "./comment";

interface Props {
  comments: [object];
}

export default function Comments({ comments }: Props) {
  if (!comments) return (
    <><p>Loading...</p></>
  );

  return (
    <Box mt={4}>
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </Box>
  );
}
