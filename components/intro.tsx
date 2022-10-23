import * as React from 'react'
import Typography from '@mui/material/Typography'
import { IIntroProps } from 'types/index'
import { Box } from '@mui/material'

export default function Intro({ content }: IIntroProps) {
  const { title, text } = content

  return (
    <Box mt={6} mb={4}>
      <Typography variant="h3" component="h1" gutterBottom>
        {title}
      </Typography>
      <Typography component="p">{text}</Typography>
    </Box>
  )
}
