import { Box, Typography } from '@mui/material'
import { IComment, ICommentsProps } from 'types/index'
import Comment from './comment'

export default function Comments({ comments }: ICommentsProps) {
  if (!comments) return <Typography component="p">Loading...</Typography>

  return (
    <Box mt={4}>
      {comments.map((comment: IComment, index: number) => (
        <Comment key={index} comment={comment} />
      ))}
    </Box>
  )
}
