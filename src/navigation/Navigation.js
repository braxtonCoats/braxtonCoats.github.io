import * as React from 'react';
import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Switch from '@mui/material/Switch';
import { Button } from '@mui/material';
import Typography from "@mui/material/Typography";
import { NavLink } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import SvgIcon from '@mui/material/SvgIcon';
import { useTheme } from '@mui/system';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import Logo from '../assets/img/Logo.png';
import { Face } from '@mui/icons-material';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}


function Navigation({handleChange}) {

  return (
    <AppBar >
      <Toolbar>
      <Tooltip title="Home">
        <IconButton href='/' >
          <Avatar alt="Remy Sharp" src={Logo} />
        </IconButton>
      </Tooltip>
        <Typography variant="h6" component="div" href='/' sx={{ flexGrow: 1 }}></Typography>
          <Button variant='outline' startIcon={<HomeIcon />} component={RouterLink} to="/">Home</Button>
          <Button variant='outline' startIcon={<Face />}ncomponent={RouterLink} to="/about-me">About Me</Button>
          {/*<Switch checked={isDarkMode} onClick={handleChange} /> */}
        {/*  <Tooltip title="Open settings">
             add: onClick={''} here 
              <IconButton  sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>*/}
            <Tooltip title="View LinkedIn Profile"color='inherit'>
            <IconButton href='https://www.linkedin.com/in/braxton-coats/' target='blank'>
              <LinkedInIcon fontSize='medium' 
                sx={{color: 'primary.onMain'}}/>
            </IconButton>
            </Tooltip>

      </Toolbar>
    </AppBar>
  );

};
      
export default Navigation
