import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minHeight: '100vh'
        },
        main: {
          minHeight: '80vh'
        },
      }
    }
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontSize: 12,
  },
  palette: {
    mode: "light",
    primary: {
      main: 'rgb(249, 79, 100)',
    },
  },
});

export default lightTheme;


