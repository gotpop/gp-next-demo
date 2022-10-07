import { Box } from "@mui/material";
import Comment from "./comment";
import { Paper } from "@mui/material";

export default function Comments({ comments }) {
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
