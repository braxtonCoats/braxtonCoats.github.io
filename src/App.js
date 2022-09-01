import * as React from "react";
import { useSelector } from "react-redux";

import dittodata from "./ditto";
import DittoProvider from "ditto-react";
import {
  ThemeProvider,
  CssBaseline,
  StyledEngineProvider,
} from "@mui/material";
import { CustomTheme } from "./theme/CustomTheme";
import ScrollTop from "./components/ScrollTop";
import Routes from './routes';
import themes from './themes';
import NavigationScroll from './layout/MainLayout'

export default function App() {
  const customization = useSelector((state) => state.customization);
    //<ThemeProvider theme={CustomTheme(customization)}>

  return (
    <StyledEngineProvider injectFirst>

    <ThemeProvider theme={themes(customization)}>
      <DittoProvider
        source={dittodata}
        projectId="project_62f05a6f45f99efffd0ab277"
      >
        <CssBaseline />
        {/** 
        <NavigationScroll>
          <Routes />
        </NavigationScroll>*/}
        <Routes />
      </DittoProvider>
    </ThemeProvider>
    </StyledEngineProvider>
  );
}
