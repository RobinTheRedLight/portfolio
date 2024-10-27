/* eslint-disable react/prop-types */

import { fadeLeft, fadeRight } from "../Animation/constant";
import { useSkillsQuery } from "../redux/features/skill/skillApi";
import { motion } from "framer-motion";

const Skills = ({ skillsRef }) => {
  const { data: skillsData = [], isLoading } = useSkillsQuery();
  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  if (skillsData.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">No skills available.</p>
      </div>
    );
  }

  const frontendAndBackendData = skillsData.filter(
    (skill) => skill.category === "Frontend and Backend"
  );

  const languagesData = skillsData.filter(
    (skill) => skill.category === "Languages and Tools"
  );

  if (frontendAndBackendData.length === 0 || languagesData.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">No skills available.</p>
      </div>
    );
  }

  return (
    <div
      className=" py-20 px-4 sm:px-6 md:px-8 lg:px-20 overflow-hidden"
      ref={skillsRef}
      id="skills"
    >
      <h1 className="font-[Montserrat] text-3xl md:text-5xl font-bold text-start">
        SKILLS
      </h1>
      <div className="pt-5 flex flex-col lg:flex-row w-full gap-10 lg:gap-20">
        <div className="flex-1">
          <h1 className="font-[Montserrat] text-xl md:text-3xl font-bold text-start">
            Frontend and Backend
          </h1>
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 md:gap-4 pt-5 md:pt-10"
          >
            {frontendAndBackendData.map((skill) => (
              <p
                key={skill._id}
                className="px-4 py-1 rounded-full text-sm md:text-lg bg-neutral"
              >
                {skill.skillName}
              </p>
            ))}
          </motion.div>
        </div>

        <div className="flex-1">
          <h1 className="font-[Montserrat] text-xl md:text-3xl font-bold text-start">
            Languages and Tools
          </h1>
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 md:gap-4 pt-5 md:pt-10"
          >
            {languagesData.map((skill) => (
              <p
                key={skill._id}
                className="px-4 py-1 rounded-full text-sm md:text-lg bg-neutral"
              >
                {skill.skillName}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
