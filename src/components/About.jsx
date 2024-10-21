/* eslint-disable react/prop-types */
import Robin from "../assets/Robin.jpg";

const About = ({ aboutRef }) => {
  return (
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
  );
};

export default About;
