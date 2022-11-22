import * as React from "react";
import { useSelector } from "react-redux";

import dittodata from "./ditto";
import DittoProvider from "ditto-react";
import {
  ThemeProvider,
  CssBaseline,
  StyledEngineProvider,
  createTheme,
} from "@mui/material";
import { CustomTheme } from "./theme/CustomTheme";
import ScrollTop from "./components/ScrollTop";
import Routes from './routes';
import DemoRoutes from "./routes/DemoRoutes";
import themes from './themes';
import NavigationScroll from './layout/DSLayout'

/** Figuring out how to handle theme 
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function ToggleColorMode() {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');
    const colorMode = React.useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      [],
    );
}
 */

export default function App() {
  const customization = useSelector((state) => state.customization);
    //<ThemeProvider theme={CustomTheme(customization)}>

  return (
    <StyledEngineProvider injectFirst>

    {/** <ThemeProvider theme={themes(customization)}> */}
    <ThemeProvider theme={themes(customization)}>
      <DittoProvider
        source={dittodata}
        projectId="project_62f05a6f45f99efffd0ab277"
      >
        <CssBaseline /> 
        {/** 
        <NavigationScroll>
          <Routes />
        </NavigationScroll> */}
         <Routes /> 
      </DittoProvider>
    </ThemeProvider>
    </StyledEngineProvider>
  );
}
