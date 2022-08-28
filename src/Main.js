import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe.js';
import Project1 from './pages/Project1.js';
import Project2 from './pages/Project2.js';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"


const Main = () => (
  <Grid sx={{ flexGrow: 1 }}>
  <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about-me' element={<AboutMe />} />
      <Route path='/project-1' element={<Project1 />}/>
      <Route path='/project-2' element={<Project2 />}/>
    </Routes>
    </Grid>
)

export default Main