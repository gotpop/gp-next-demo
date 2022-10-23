import { useState } from 'react'
import useSWR from 'swr'
import { Paper, Typography } from '@mui/material'
import Comments from './comments'
import LoadingButton from '@mui/lab/LoadingButton'
import CommentIcon from '@mui/icons-material/Comment'
import { IPostProps } from 'types/index'
import { grey } from '@mui/material/colors'

export default function PostSingle({ post }: IPostProps) {
  const [showComments, setShowComments] = useState(false)
  const triggerToggle = () => setShowComments(!showComments)
  const url = `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`

  const fetcher = (url: string) => fetch(url).then(res => res.json())
  const { data: comments, error } = useSWR(url, fetcher)

  return (
    <Paper elevation={24} sx={{ p: 4, mb: 4 }}>
      <Typography
        variant="h5"
        component="h3"
        gutterBottom
        fontWeight={700}
        sx={{ textTransform: 'capitalize' }}>
        {post.title}
      </Typography>
      <Typography variant="body1" gutterBottom color={grey[600]}>
        {post.body}
      </Typography>
      <LoadingButton
        sx={{ mt: 2 }}
        onClick={triggerToggle}
        loading={!comments}
        loadingPosition="end"
        endIcon={<CommentIcon />}
        variant="outlined">
        {comments?.length} Comments
      </LoadingButton>
      {showComments && <Comments comments={comments} />}
    </Paper>
  )
}
