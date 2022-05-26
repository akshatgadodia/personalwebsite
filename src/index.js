import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FrontPage from './FrontPage';
import AboutMePage from './AboutMePage'
import Contact from './Contact'
import Education from './Education'
import Projects from './Projects'
import Abilities from './Abilities'
import NavigationBar from './NavigationBar'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <FrontPage/>
    <NavigationBar/>
    <AboutMePage/>
    <Education/>
    <Abilities/>
    <Projects/>
    <Contact/>
  </>
);

