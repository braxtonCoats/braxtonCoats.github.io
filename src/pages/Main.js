import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe.js';
import Project1 from './Project1.js';
import Project2 from './Project2.js';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about-me' element={<AboutMe />} />
      <Route path='/project-1' element={<Project1 />}/>
      <Route path='/project-2' element={<Project2 />}/>
    </Routes>
  </main>
)

export default Main