import { Box, Paper, Typography } from "@mui/material";
import useSWR from "swr";
import Comments from "./comments";

import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import CommentIcon from "@mui/icons-material/Comment";
import Stack from "@mui/material/Stack";
import { useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Post({ post }) {
  const [showComments, setShowComments] = useState(false);
  const { data: comments, error } = useSWR(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`, fetcher);

  if (error) return "An error has occurred.";

  const triggerToggle = () => {
    setShowComments(!showComments);
  };

  return (
    <Box
      //   m={8}
      //   mb={8}
      sx={{
        // border: "1px solid",

        // For color related properties, lookup from `theme.vars.palette`
        color: "neutral.800", // 'var(--joy-palette-neutral-800)'
        borderColor: "neutral.400", // 'var(--joy-palette-neutral-400)'

        // lookup from `theme.vars.shadow`
        shadow: "lg", // 'var(--joy-shadow-sm)'

        // lookup from `theme.vars.fontSize`
        fontSize: "sm", // 'var(--joy-fontSize-sm)'
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
        <Typography variant="h5" component="h3" mt={0} gutterBottom sx={{
        textTransform: "capitalize",
        fontWeight: '700',
        color: 'rgb(36, 37, 41)'
      }}>
          {post.title}
        </Typography>
        <Typography variant="body1" gutterBottom sx={{
            color: '#242529'
        }}>
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
