import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

export let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#353537",
    },
  },
  typography: {
    fontFamily: "'Oswald', sans-serif",
  },
});

theme = responsiveFontSizes(theme);
