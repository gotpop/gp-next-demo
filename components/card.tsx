import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { IPageProps } from 'types/index'

export default function BasicCard({ page }: IPageProps) {
  const { name, href } = page

  return (
    <Box mb={4}>
      <Card>
        <CardContent>
          <Typography component="h2" gutterBottom>
            {name}
          </Typography>
          <Typography variant="body2">Well meaning and kindly.</Typography>
        </CardContent>
        <CardActions>
          <Link href={href}>View</Link>
        </CardActions>
      </Card>
    </Box>
  )
}
