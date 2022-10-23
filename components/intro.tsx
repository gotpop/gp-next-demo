import * as React from 'react'
import Typography from '@mui/material/Typography'
import { IIntroProps } from 'types/index'
import { Box } from '@mui/material'
import { grey } from '@mui/material/colors'

export default function Intro({ content }: IIntroProps) {
  const { title, text } = content

  return (
    <Box mt={6} mb={4}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        borderBottom={1}
        borderColor={grey[200]}
        fontWeight={700}
        paddingBottom={1}>
        {title}
      </Typography>
      <Typography component="p" fontStyle="italic">
        {text}
      </Typography>
    </Box>
  )
}
