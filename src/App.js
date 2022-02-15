import React from "react";

//Dependencies
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Components/theme";
import Login from "./Pages/Login";
import PageRoute from "./Components/PageRoute";

// //Components

// import PageRoute from "./pages/PageRoute";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageRoute />
    </ThemeProvider>
  );
};

export default App;
