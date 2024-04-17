import React from 'react';
import Navbar from '../../components/navbar.jsx';
import Hero from '../../components/hero.jsx';
import About from '../../components/about.jsx';
import Achievements from '../../components/achievements.jsx';
import Projects from '../../components/projects.jsx';
import Contact from '../../components/contact.jsx';
import Footer from '../../components/footer.jsx';

export default function homepage() {
  return (
   <> 
    <Navbar/>
    < Hero />
    < About/>
    < Achievements/>
    < Projects/>
    < Contact/>
    < Footer id="footer"/>
    </>
  )
}
