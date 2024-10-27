import "../src/Home.css";

import { useCallback, useRef } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import Education from "./components/Education";

const Home = () => {
  const homeRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const skillsRef = useRef();
  const blogRef = useRef();

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await container;
  }, []);
  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 0,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#FF5555",
            },
            links: {
              color: "#F8F8F2",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Navbar */}
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        skillsRef={skillsRef}
        blogRef={blogRef}
      />
      {/* Navbar */}

      {/* Hero */}
      <Hero homeRef={homeRef} />
      {/* Hero */}

      {/* About */}
      <About aboutRef={aboutRef} />
      {/* About */}

      {/* Education */}
      <Education />
      {/* Education */}

      {/* Skills */}
      <Skills skillsRef={skillsRef} />
      {/* Skills */}

      {/* Projects */}
      <Projects projectsRef={projectsRef} />
      {/* Projects */}

      {/* Blog */}
      <Blogs blogRef={blogRef} />
      {/* Blog */}

      {/* Contact */}
      <Contact contactRef={contactRef} />
      {/* Contact */}
    </div>
  );
};

export default Home;
