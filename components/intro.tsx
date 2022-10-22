import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

export default function Intro({ content }: any) {
  return (
    <Card>
      <CardContent>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem'
          }}>
          NextJS Demo
        </Typography>
        <Typography component="p">
          A demonstation of various different use cases and approaches.
        </Typography>
      </CardContent>
    </Card>
  )
}
