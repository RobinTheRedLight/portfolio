import "../src/Home.css";
import { TypeAnimation } from "react-type-animation";
import { useCallback, useRef } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Robin from "../src/assets/Robin.jpg";
import project1 from "../src/assets/project-1.jpg";
import project2 from "../src/assets/project-2.png";

const Home = () => {
  const homeRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
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
                quantity: 4,
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
      <div className="navbar fixed max-w-screen-xl z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a
                  onClick={() => {
                    homeRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    aboutRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    projectsRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    contactRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost hover:bg-base-100 text-xl hidden md:block">
            <svg xmlns="http://www.w3.org/2000/svg" width="300" height="100">
              <rect
                x="5"
                y="5"
                width="43%"
                height="45%"
                rx="10"
                ry="10"
                fill="#282A36"
                stroke="#F8F8F2"
                strokeWidth="4"
              />

              <text
                x="22%"
                y="30%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontFamily=""
                fontSize="24"
                fill="#F8F8F2"
              >
                @robin&gt;_
              </text>
            </svg>
          </a>
        </div>
        <div className="navbar-end hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li>
              <a
                onClick={() => {
                  homeRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  aboutRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  projectsRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  contactRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Navbar */}

      {/* Homepage */}
      <div
        ref={homeRef}
        className="hero min-h-screen text-[#F8F8F2] "
        id="home"
      >
        <div className="hero-content">
          <div>
            <h1 className="font-[Montserrat] text-3xl">
              Hello there<span className="wave">👋</span>{" "}
            </h1>
            <p className="font-[Montserrat] text-[5em]">I'm Robin Mitra</p>
            <div>
              <TypeAnimation
                sequence={[
                  "Full-Stack Developer",
                  1000,
                  "Problem Solver",
                  1000,
                  "Tech Enthusiast",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
            <div className="pt-8">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1b_jjq4u0t5pT9PbOAOMABRHC4pdTF-aT/view?usp=drive_link"
                className="btn btn-primary"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Homepage */}

      {/* About */}
      <div className="hero min-h-screen" ref={aboutRef} id="about">
        <div className="hero-content flex-col lg:flex-row-reverse text-center md:text-start">
          <div className="avatar">
            <div className="w-80 rounded-full">
              <img src={Robin} />
            </div>
          </div>
          <div className="md:w-1/2">
            <h1 className="font-[Montserrat] pt-10 md:pt-0  text-5xl font-bold">
              About Me
            </h1>
            <p className="py-6 font-[Montserrat] text-2xl">
              I have developed several projects utilizing the MERN stack
              technology. My projects include building responsive websites,
              developing single-page applications, and integrating third-party
              APIs. I have also implemented various features such as
              authentication, and authorization. My experience in developing
              complex web applications and my passion for learning new
              technologies makes me an asset to any team.
            </p>
          </div>
        </div>
      </div>
      {/* About */}

      {/* Projects */}
      <div className=" min-h-screen pt-20" id="projects" ref={projectsRef}>
        <h1 className="font-[Montserrat] text-5xl font-bold text-center">
          Projects
        </h1>
        <div className=" md:flex pt-20 md:justify-evenly ">
          <div className="card w-96 bg-base-100 shadow-xl mx-auto md:mx-0">
            <figure>
              <img src={project1} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Project 01:
                <div className="badge badge-secondary p-5">Amici Italiano</div>
              </h2>

              <div className="card-actions justify-center pt-5">
                <a
                  href="https://restaurant-59678.web.app/"
                  target="_blank"
                  className="badge badge-outline p-4"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl mx-auto md:mx-0 pt-10 md:pt-0">
            <figure>
              <img src={project2} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Project 02:
                <div className="badge badge-secondary p-5">Doctors Portal</div>
              </h2>

              <div className="card-actions justify-center pt-5">
                <a
                  href="https://doctors-portal-5471b.web.app/"
                  target="_blank"
                  className="badge badge-outline p-4"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}

      {/* Contact */}
      <div className="pb-10 pt-20" id="contract" ref={contactRef}>
        <h1 className="font-[Montserrat] text-5xl font-bold text-center">
          Contact Me
        </h1>
        <div className="pt-20">
          <footer className="footer p-20 bg-base-300 text-neutral-content">
            <aside>
              <p className="font-[Montserrat]">
                <span className="font-bold">Email:</span>{" "}
                robinmitra789@gmail.com
              </p>
              <p className="font-[Montserrat]">
                <span className="font-bold">Phone:</span>{" "}
                <span>+8801910832449</span>
              </p>
            </aside>
            <nav>
              <h6 className="footer-title">Social</h6>
              <div className="grid grid-flow-col gap-4">
                <a href="https://github.com/RobinTheRedLight" target="_blank">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <title>github [#142]</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-140.000000, -7559.000000)"
                        fill="#000000"
                      >
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          <path
                            d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                            id="github-[#142]"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/robin-mitra-9129809b/"
                  target="_blank"
                >
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                  >
                    <path
                      fill="#0A66C2"
                      d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
                    />
                  </svg>
                </a>
              </div>
            </nav>
          </footer>
        </div>
      </div>
      {/* Contact */}
    </div>
  );
};

export default Home;
