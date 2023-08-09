import React from "react";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const theme = createTheme({
  status: {
    pureWhite: "hsla(0, 0%, 100%, 1)",
    lightGrey: "hsla(274, 100%, 99%, 1)",
    midBlueGrey: "hsla(271, 12%, 34%, 1)",
    darkPurple: "hsla(273, 85%, 13%, 1)",
    lime: "hsla(150, 100%, 63%, 1)",
  },
  palette: {
    // primary: {
    // light: "hsla(215, 31%, 21%, 1)",
    //  main: "hsla(0, 0,100%, 1)",
    //  },
  },
  typography: {
    fontFamily: ["Fraunces", "serif"].join(","),
    h1: {
      fontSize: "5rem",
    },
  },
});

theme.typography.h1 = {
  fontSize: "4rem",
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
