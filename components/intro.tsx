import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { IIntroProps } from 'types/index'

export default function Intro({ content }: IIntroProps) {
  const { title, text } = content

  return (
    <Card>
      <CardContent>
        <Typography variant="h2" component="h1">
          {title}
        </Typography>
        <Typography component="p">{text}</Typography>
      </CardContent>
    </Card>
  )
}
