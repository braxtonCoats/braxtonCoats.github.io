import * as React from "react";
import dittodata from "./ditto";
import DittoProvider from "ditto-react";
import Navigation from "./components/Navigation";
import Main from "./pages/Main";
import Footer from "./pages/Footer";
import { ThemeProvider } from "@mui/material";
import { CustomTheme } from "./theme/CustomTheme";

export default function App() {
  return (
    <DittoProvider
      source={dittodata}
      projectId="project_62f05a6f45f99efffd0ab277"
    >
      <ThemeProvider theme={CustomTheme}>
        <Navigation />
        <Main />
        <Footer />
      </ThemeProvider>
    </DittoProvider>
  );
}
