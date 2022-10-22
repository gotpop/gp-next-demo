import type { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline } from '@mui/material'
import lightTheme from '../themes/lightTheme'

function GotPopNextDemo({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default GotPopNextDemo
