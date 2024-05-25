import React from "react";
// import Navbar from "../../components/navbar.jsx";
import Hero from "../../components/hero.jsx";
import About from "../../components/about.jsx";
import Skills from "../../components/skills.jsx";
import Projects from "../../components/projects.jsx";
import Resume from "../../components/resume.jsx";
import Testimonials from "../../components/testimonials.jsx";
import Blog from "../../components/blog.jsx";
import Contact from "../../components/contact.jsx";
import Footer from "../../components/footer.jsx";

export default function homepage() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer id="footer" />
    </>
  );
}
