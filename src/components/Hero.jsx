/* eslint-disable react/prop-types */
import { TypeAnimation } from "react-type-animation";
const Hero = ({ homeRef }) => {
  return (
    <div ref={homeRef} className="hero min-h-screen text-[#F8F8F2] " id="home">
      <div className="hero-content">
        <div>
          <h1 className="font-[Montserrat] text-3xl">
            Hello there<span className="wave">👋</span>{" "}
          </h1>
          <p className="font-[Montserrat] text-[5em]">I&apos;m Robin Mitra</p>
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
              rel="noreferrer"
              href="https://drive.google.com/file/d/1b_jjq4u0t5pT9PbOAOMABRHC4pdTF-aT/view?usp=drive_link"
              className="btn btn-primary"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
