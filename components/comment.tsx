import { Box } from "@mui/material";

// TODO: Import types
interface Comment {
  comment: {
    name: string;
    email: string;
    body: string;
  };
};

export default function Comment({ comment }: Comment) {
  return (
    // TODO: Improve theming use vars etc..
    // Use MUI typography
    <Box mb={4} p={2} sx={{ background: "#f9f9f9", borderRadius: "16px" }}>
      <h3>{comment.name}</h3>
      <p>{comment.email}</p>
      <p>{comment.body}</p>
    </Box>
  );
};
