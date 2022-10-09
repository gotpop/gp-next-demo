import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import { Container, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

interface Loader {
  src: string;
  width: number;
}

interface Props {
  photos: [PhotoInterface];
}

interface PhotoInterface {
  thumbnailUrl: string;
  title: string;
  url: string;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 1,
};

// TODO: combine into single loader
// Due to time contraints and using JSONplaceholder I used 2 different loaders
// Also using string.replace is a bit of a hack.. we wouln't need to do this with a proper API
const myLoaderSmall = ({ src, width }: Loader) => {
  const imgId = src.replace("https://via.placeholder.com/150/", "");
  const image = `https://via.placeholder.com/${width}/${imgId}`;

  return image;
};

const myLoaderLarge = ({ src, width }: Loader) => {
  const imgId = src.replace("https://via.placeholder.com/600/", "");
  const image = `https://via.placeholder.com/${width}/${imgId}`;

  return image;
};

const Vault: NextPage<Props> = ({ photos }) => {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");
  const handleClose = () => setOpen(false);
  const handleOpen = (url: string, e: React.MouseEvent<HTMLImageElement>) => {
    setOpen(true);
    setUrl(url);
  };

  return (
    <>
      <Head>
        <title>Vault</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        sx={{ display: "flex" }}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open} mountOnEnter unmountOnExit>
          <Box sx={style}>
            <Image loader={myLoaderLarge} src={url} alt="img" width={1000} height={1000} />
          </Box>
        </Fade>
      </Modal>
      <Container maxWidth="md">
        <Box py={8}>
          <Typography variant="h2" component="h1" mt={0} gutterBottom sx={{ fontWeight: "700", color: "rgb(36, 37, 41)" }}>
            Vault
          </Typography>
        </Box>
        <Grid container>
          {photos.slice(0, 30).map((photo: PhotoInterface, index: number) => (
            // Whilst this is responsive it only uses 2 image sizes, which works well enough for the purposes of this demo
            // But would be more sophisticated in a polished product
            <Grid key={index} item xs={6} md={4} lg={3} sx={{ display: "flex" }}>
              <Image onClick={handleOpen.bind(null, photo.url)} loader={myLoaderSmall} src={photo.thumbnailUrl} alt={photo.title} width={600} height={600} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Vault;

export async function getStaticProps() {
  const url = "https://jsonplaceholder.typicode.com/photos";

  const res = await fetch(url);
  const photos = await res.json();

  return {
    props: {
      photos: photos,
    },
  };
}
