import { Box, Paper, Typography } from "@mui/material";
import useSWR from "swr";
import Comments from "./comments";

import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import CommentIcon from "@mui/icons-material/Comment";
import Stack from "@mui/material/Stack";
import { useState } from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface Posty {
  post: {
    id: string;
    title: string;
    body: string;
  }
}

export default function PostSingle({ post }: Posty) {
  const [showComments, setShowComments] = useState(false);
  const triggerToggle = () => {
    setShowComments(!showComments);
  };

  const { data: comments, error } = useSWR(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`, fetcher);
  
  if (error) return "An error has occurred.";

  return (
    <Box
      sx={{
        color: "neutral.800",
        borderColor: "neutral.400",
        shadow: "lg",
        fontSize: "sm",
        marginBottom: "16px",
      }}
    >
      <Paper
        style={{
          padding: 20,
        }}
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.08) 1px 1px 9px",
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          mt={0}
          gutterBottom
          sx={{
            textTransform: "capitalize",
            fontWeight: "700",
            color: "rgb(36, 37, 41)",
          }}
        >
          {post.title}
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            color: "#242529",
          }}
        >
          {post.body}
        </Typography>
        <LoadingButton onClick={triggerToggle} loading={!comments} loadingPosition="end" endIcon={<CommentIcon />} variant="outlined">
          {comments && comments.length} Comments
        </LoadingButton>
        {showComments && <Comments comments={comments} />}
      </Paper>
    </Box>
  );
}
