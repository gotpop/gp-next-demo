import { Paper, Typography } from '@mui/material'
import { ICommentProps } from 'types/index'
import { grey } from '@mui/material/colors'

export default function Comment({ comment }: ICommentProps) {
  return (
    <Paper elevation={0} variant="outlined" sx={{ p: 2, mb: 2 }}>
      <Typography component="h3" variant="h5" gutterBottom>
        {comment.name}
      </Typography>
      <Typography component="p" gutterBottom>
        {comment.email}
      </Typography>
      <Typography component="p" color={grey[600]}>
        {comment.body}
      </Typography>
    </Paper>
  )
}
