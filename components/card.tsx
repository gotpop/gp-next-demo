import * as React from 'react'
import Typography from '@mui/material/Typography'
import NextLink from 'next/link'
import { IPageProps } from 'types/index'
import Link from '@mui/material/Link'
import { Paper } from '@mui/material'

export default function BasicCard({ page }: IPageProps) {
  const { name, href, description } = page

  return (
    <Paper variant="outlined" sx={{ p: 3, height: '100%' }}>
      <Typography variant="h5" component="h3" gutterBottom>
        {name}
      </Typography>
      <Typography paragraph>{description}</Typography>
      <NextLink href={href} passHref>
        <Link variant="button">View {name}</Link>
      </NextLink>
    </Paper>
  )
}
