import * as React from "react";
import { useEffect, useState } from "react";
//import AppBar from '@mui/material/AppBar';
import AppBar from "../components/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Switch from "@mui/material/Switch";
import Button from "../components/NavButton";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import SvgIcon from "@mui/material/SvgIcon";
import { useTheme } from "@mui/material/styles";
import { Face, LinkedIn, GitHub } from "@mui/icons-material";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Grid } from "@mui/material";

function ElevationScroll(props) {
  const { children } = props;
  const theme = useTheme();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    ...(trigger
      ? {
          elevation: 4,
        }
      : {
          elevation: 0,
        }),
  });
}

//function Navigation ({handleChange}) {
function Navigation(props) {
  const theme = useTheme();
  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar
          position="sticky"
          sx={{ bgcolor: "${theme.palette.primary.container}" }}
        >
          <Toolbar>
            <Grid container>
              <Grid pr={2}>
              <Tooltip title="Home">
                <IconButton href="/">
                  <Avatar alt="Logo" src={Logo} />
                </IconButton>
              </Tooltip>
              </Grid>
              <Button
                startIcon={<Face fontSize="large" />}
                component={RouterLink}
                to="/about-me"
              >
                About Me
              </Button>
              potentially case studys
            </Grid>

            {/*<Switch checked={isDarkMode} onClick={handleChange} /> */}
            {/*  <Tooltip title="Open settings">
             add: onClick={''} here 
              <IconButton  sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>*/}
            <Grid container justifyContent="right">
              <Tooltip title="View LinkedIn Profile" color="inherit">
                <IconButton
                  sx={{ color: theme.palette.primary.onContainer }}
                  href="https://www.linkedin.com/in/braxton-coats/"
                  target="blank"
                >
                  <LinkedIn fontSize="large" />
                </IconButton>
              </Tooltip>

              <Tooltip title="View Github">
                <IconButton
                  sx={{ color: theme.palette.primary.onContainer }}
                  href="https://github.com/braxtonCoats"
                  target="blank"
                >
                  <GitHub fontSize="large" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}

export default Navigation;
