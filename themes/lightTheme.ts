import { createTheme } from "@mui/material/styles";
import { purple } from '@mui/material/colors';

const lightTheme = createTheme({
  shape: {
    borderRadius: 16,
  },
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
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


