import { createTheme } from "@mui/material/styles";

const primary = "#494446";
const secondary = "#F67020";
const background = "#241E20";

const theme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    body: {
      main: "#E9EBEA",
    },
    extra: {
      main: "#C4C4C4",
    },
    background: {
      main: background,
    },
  },
});

theme.typography.nav = {};
theme.typography.header = {};
theme.typography.headerBold = {};
theme.typography.content = {};
theme.typography.contentBold = {};
theme.typography.modalHeader = {};
theme.typography.modalContent = {};

export default theme;
