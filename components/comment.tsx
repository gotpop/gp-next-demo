import { Box } from "@mui/material";

export default function Comment({ comment }) {
  return (
    <Box mb={4} p={2} sx={{background: '#f9f9f9', borderRadius: '16px'}}>
      <h3>{comment.name}</h3>
      <p>{comment.email}</p>
      <p>{comment.body}</p>
    </Box>
  );
}
