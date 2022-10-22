import { useState } from 'react'
import Image from 'next/image'
import type { NextPage } from 'next'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid'
import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import Layout from '@layouts/layout'
import { myLoaderLarge, myLoaderSmall } from '@utils/loaders'
import { IPhoto, IPhotoProps } from 'types/index'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 1
}

const Vault: NextPage<IPhotoProps> = ({ photos }) => {
  const [open, setOpen] = useState(false)
  const [url, setUrl] = useState('')
  const handleClose = () => setOpen(false)
  const handleOpen = (url: string, e: React.MouseEvent<HTMLImageElement>) => {
    setOpen(true)
    setUrl(url)
  }

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        sx={{ display: 'flex' }}
        BackdropProps={{
          timeout: 500
        }}>
        <Fade in={open} mountOnEnter unmountOnExit>
          <Box sx={style}>
            <Image
              loader={myLoaderLarge}
              src={url}
              alt="img"
              width={1000}
              height={1000}
            />
          </Box>
        </Fade>
      </Modal>
      <Layout>
        <Box py={8}>
          <Typography
            variant="h2"
            component="h1"
            mt={0}
            gutterBottom
            sx={{ fontWeight: '700', color: 'rgb(36, 37, 41)' }}>
            Vault
          </Typography>
        </Box>
        <Grid container>
          {photos.slice(0, 30).map((photo: IPhoto, index: number) => (
            <Grid
              key={index}
              item
              xs={6}
              md={4}
              lg={3}
              sx={{ display: 'flex' }}>
              <Image
                onClick={handleOpen.bind(null, photo.url)}
                loader={myLoaderSmall}
                src={photo.thumbnailUrl}
                alt={photo.title}
                width={600}
                height={600}
              />
            </Grid>
          ))}
        </Grid>
      </Layout>
    </>
  )
}

export default Vault

export async function getStaticProps() {
  const url = 'https://jsonplaceholder.typicode.com/photos'

  const res = await fetch(url)
  const photos = await res.json()

  return {
    props: {
      photos: photos
    }
  }
}
