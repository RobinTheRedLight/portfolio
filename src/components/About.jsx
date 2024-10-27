/* eslint-disable react/prop-types */
import { fadeLeft, fadeRight } from "../Animation/constant";
import Robin from "../assets/Robin.jpg";
import { motion } from "framer-motion";

const About = ({ aboutRef }) => {
  return (
    <div className="hero overflow-hidden" ref={aboutRef} id="about">
      <div className="hero-content flex-col lg:flex-row-reverse text-center md:text-start">
        <motion.div
          className="avatar"
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="w-80 rounded-full">
            <img src={Robin} />
          </div>
        </motion.div>
        <div className="md:w-1/2">
          <h1 className="font-[Montserrat] pt-10 md:pt-0  text-5xl font-bold">
            About Me
          </h1>
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="py-6 font-[Montserrat] text-2xl"
          >
            I have developed several projects utilizing the MERN stack
            technology. My projects include building responsive websites,
            developing single-page applications, and integrating third-party
            APIs. I have also implemented various features such as
            authentication, and authorization. My experience in developing
            complex web applications and my passion for learning new
            technologies makes me an asset to any team.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
