import React from "react";
// import Navbar from "../../components/navbar.jsx";
import Hero from "../components/hero.jsx";
import About from "../components/about.jsx";
import Skills from "../components/skills.jsx";
import Projects from "../components/projects.jsx";
import Resume from "../components/resume.jsx";
import Testimonials from "../components/testimonials.jsx";
import Blog from "../components/blog.jsx";
import Contact from "../components/contact.jsx";
import Footer from "../components/footer.jsx";
import { projectList } from "../data.js";
import { Link } from "react-router-dom";
import Button from "../components/button.jsx";

export default function homepage() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Skills />
      <div>
        <Projects projectList={projectList.slice(0, 3)} />
        <div className="flex justify-center mt-10">
          <Link to="/projects">
            <Button>VIEW MORE</Button>
          </Link>
        </div>
      </div>
      <Resume />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
