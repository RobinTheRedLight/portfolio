/* eslint-disable react/prop-types */
import { FaReact, FaNodeJs, FaPython, FaStripeS } from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiCplusplus,
  SiZod,
  SiC,
  SiFirebase,
  SiReactquery,
  SiAxios,
  SiJsonwebtokens,
} from "react-icons/si";
const Skills = ({ skillsRef }) => {
  return (
    <div className="min-h-screen pt-20 " ref={skillsRef} id="skills">
      <h1 className="font-[Montserrat] text-5xl font-bold text-center">
        Skills
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-8 pt-20 text-center">
        {/* Frontend Skills */}
        <div>
          <SiJavascript className="text-6xl mx-auto text-[#F7DF1E]" />
          <p>JavaScript</p>
        </div>
        <div>
          <FaReact className="text-6xl mx-auto text-[#61DAFB]" />
          <p>React</p>
        </div>
        <div>
          <SiTypescript className="text-6xl mx-auto text-[#3178C6]" />
          <p>TypeScript</p>
        </div>
        <div>
          <SiRedux className="text-6xl mx-auto text-[#764ABC]" />
          <p>Redux</p>
        </div>
        <div>
          <SiNextdotjs className="text-6xl mx-auto text-[#000000]" />
          <p>Next.js</p>
        </div>

        <div>
          <SiReactquery className="text-6xl mx-auto text-[#FF4154]" />
          <p>TanStack Query</p>
        </div>
        <div>
          <SiAxios className="text-6xl mx-auto text-[#5A29E4]" />
          <p>Axios</p>
        </div>
        <div>
          <SiTailwindcss className="text-6xl mx-auto text-[#38B2AC]" />
          <p>Tailwind CSS</p>
        </div>

        {/* Backend Skills */}
        <div>
          <FaNodeJs className="text-6xl mx-auto text-[#339933]" />
          <p>NodeJS</p>
        </div>
        <div>
          <SiExpress className="text-6xl mx-auto text-[#000000]" />
          <p>Express.js</p>
        </div>
        <div>
          <SiMongodb className="text-6xl mx-auto text-[#47A248]" />
          <p>MongoDB</p>
        </div>
        <div>
          <SiZod className="text-6xl mx-auto text-[#000000]" />
          <p>Zod</p>
        </div>

        {/* Additional Skills */}
        <div>
          <FaStripeS className="text-6xl mx-auto text-[#008CDD]" />
          <p>Stripe</p>
        </div>
        <div>
          <SiFirebase className="text-6xl mx-auto text-[#FFCA28]" />
          <p>Firebase</p>
        </div>

        <div>
          <SiJsonwebtokens className="text-6xl mx-auto text-[#000000]" />
          <p>JWT</p>
        </div>

        {/* Programming Languages */}
        <div>
          <SiC className="text-6xl mx-auto text-[#A8B9CC]" />
          <p>C</p>
        </div>
        <div>
          <SiCplusplus className="text-6xl mx-auto text-[#00599C]" />
          <p>C++</p>
        </div>
        <div>
          <FaPython className="text-6xl mx-auto text-[#306998]" />
          <p>Python</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
