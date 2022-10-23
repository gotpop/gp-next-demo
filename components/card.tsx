import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { IPageProps } from 'types/index'

export default function BasicCard({ page }: IPageProps) {
  const { name, href, description } = page

  return (
    <Card>
      <CardContent>
        <Typography component="h2" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Link href={href}>View</Link>
      </CardActions>
    </Card>
  )
}
