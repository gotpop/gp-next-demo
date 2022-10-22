import { Box, Typography } from '@mui/material'
import { ICommentProps } from 'types/index'

export default function Comment({ comment }: ICommentProps) {
  return (
    <Box mb={4} p={2} sx={{ background: '#f9f9f9', borderRadius: '16px' }}>
      <Typography component="h3">{comment.name}</Typography>
      <Typography component="p">{comment.email}</Typography>
      <Typography component="p">{comment.body}</Typography>
    </Box>
  )
}
