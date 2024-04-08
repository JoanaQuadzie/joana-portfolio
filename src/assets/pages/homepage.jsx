import React from 'react';
import Navbar from '../../components/navbar';
import Hero from '../../components/hero';
import About from '../../components/about';
import Achievements from '../../components/achievements';
import Projects from '../../components/projects';
import Contact from '../../components/contact';
import Footer from '../../components/footer';

export default function homepage() {
  return (
   <> 
    <Navbar/>
    < Hero id="hero" />
    < About id="about"/>
    < Achievements id="achievements"/>
    < Projects id="projects"/>
    < Contact id="contact"/>
    < Footer id="footer"/>
    </>
  )
}
