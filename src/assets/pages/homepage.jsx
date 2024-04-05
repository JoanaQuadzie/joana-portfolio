import React from 'react';
import Navbar from '../../components/navbar';
import Hero from '../../components/hero';
import About from '../../components/about';
import Achievements from '../../components/achievements';
import Projects from '../../components/projects';
import Footer from '../../components/footer';

export default function homepage() {
  return (
   <> 
    <Navbar/>
    < Hero id="hero" />
    < About id="about"/>
    < Achievements id="achievements"/>
    < Projects id="projects"/>
    < Footer id="footer"/>
    </>
  )
}
