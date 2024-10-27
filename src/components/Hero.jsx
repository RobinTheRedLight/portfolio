/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeUp } from "../Animation/constant";

const Hero = ({ homeRef }) => {
  const handleDownload = () => {
    window.location.href =
      "https://drive.google.com/uc?export=download&id=1b_jjq4u0t5pT9PbOAOMABRHC4pdTF-aT";
  };

  return (
    <div ref={homeRef} className="hero min-h-screen text-[#F8F8F2]" id="home">
      <div className="hero-content">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h1 className="font-[Montserrat] text-3xl">
            Hello there<span className="wave">👋</span>
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
            <button onClick={handleDownload} className="btn btn-secondary">
              View Resume
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
