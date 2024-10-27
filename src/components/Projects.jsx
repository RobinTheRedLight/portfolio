/* eslint-disable react/prop-types */
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useProjectsQuery } from "../redux/features/project/projectApi";
import { motion } from "framer-motion";
import { fadeLeft } from "../Animation/constant";

const Projects = ({ projectsRef }) => {
  const navigate = useNavigate();
  const {
    data: projectsData = [],
    isLoading,
    isError,
    error,
  } = useProjectsQuery();

  const techColors = {
    React: "bg-blue-100 text-blue-800",
    "Node.js": "bg-green-100 text-green-800",
    "Tailwind CSS": "bg-teal-100 text-teal-800",
    "Express.js": "bg-green-100 text-green-800",
    MongoDB: "bg-green-100 text-green-800",
    JWT: "bg-yellow-100 text-yellow-800",
    Firebase: "bg-orange-100 text-orange-800",
    Stripe: "bg-purple-100 text-purple-800",
    Redux: "bg-purple-100 text-purple-800",
    TypeScript: "bg-blue-100 text-blue-800",
    "Next.js:": "bg-white text-black",
    Mongoose: "bg-green-100 text-green-800",
    Zod: "bg-yellow-100 text-yellow-800",
    "TanStack Query": "bg-red-100 text-red-800",
    Axios: "bg-yellow-100 text-yellow-800",
    Recharts: "bg-orange-100 text-orange-800",
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Failed to load projects: {error.message}</p>
      </div>
    );
  }

  return (
    <div className=" py-20" id="projects" ref={projectsRef}>
      <h1 className="font-[Montserrat] text-5xl font-bold text-center">
        Projects
      </h1>
      <div className="grid grid-cols-1 gap-10 pt-20 px-4">
        {projectsData.map((project, index) => (
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            key={index}
            className="bg-base-200 rounded-lg shadow-md overflow-hidden"
          >
            {/* Adjusted Container for Image and Details */}
            <div className="flex flex-col lg:flex-row">
              {/* Image Section */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 md:h-80 md:object-cover  lg:w-1/2 lg:my-auto lg:p-5"
              />
              {/* Details Section */}
              <div className="p-6 flex-1">
                <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
                <div className="flex flex-wrap items-center mb-4">
                  <a
                    href={project.liveSiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 flex items-center mr-4 mb-2"
                  >
                    <FaExternalLinkAlt className="mr-1" /> Live Site
                  </a>
                  <a
                    href={project.clientCodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:text-blue-700 flex items-center mr-4 mb-2"
                  >
                    <FaGithub className="mr-1" /> Client Code
                  </a>
                  {project.serverCodeLink && (
                    <a
                      href={project.serverCodeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" hover:text-blue-700 flex items-center mb-2"
                    >
                      <FaGithub className="mr-1" /> Server Code
                    </a>
                  )}
                </div>
                {/* Technologies Section */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Technologies Used:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`${
                          techColors[tech] || "bg-gray-200 text-gray-800"
                        } px-3 py-1 rounded-full text-sm`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => navigate(`/projects/${project._id}`)}
                  className="btn btn-outline"
                >
                  Read Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
