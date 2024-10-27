import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useSingleProjectQuery } from "../redux/features/project/projectApi";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";

const SingleProject = () => {
  const { id } = useParams();
  const {
    data: project,
    isLoading,
    isError,
    error,
  } = useSingleProjectQuery(id);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await container;
  }, []);

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
        <p className="text-red-500">Failed to load project: {error.message}</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Project not found.</p>
      </div>
    );
  }

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
      <div className="min-h-screen px-4">
        {/* Main Container */}
        <div className="max-w-5xl mx-auto  shadow-lg rounded-lg overflow-hidden">
          {/* Content Section */}
          <div className="p-8">
            {/* Project Name */}
            <h1 className="text-4xl font-bold mb-6 text-center">
              {project.name}
            </h1>

            {/* Links */}
            <div className="flex flex-col sm:flex-row justify-center items-center mb-8 space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href={project.liveSiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded inline-flex items-center"
              >
                <FaExternalLinkAlt className="mr-2" /> Live Site
              </a>
              <a
                href={project.clientCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex items-center"
              >
                <FaGithub className="mr-2" /> Client Code
              </a>
              {project.serverCodeLink && (
                <a
                  href={project.serverCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-flex items-center"
                >
                  <FaGithub className="mr-2" /> Server Code
                </a>
              )}
            </div>

            {/* Image Section */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full object-scale-down lg:h-96 mb-6"
            />

            {/* Technologies Used */}
            <div className="mb-8 lg:max-w-3xl lg:mx-auto">
              <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`${
                      techColors[tech] || "bg-gray-200 text-gray-800"
                    } px-3 py-1 rounded-full text-sm font-medium`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            {project.description && project.description.length > 0 && (
              <div className="mb-8 lg:max-w-3xl lg:mx-auto">
                <h2 className="text-2xl font-semibold mb-4">
                  Project Highlights
                </h2>
                <ul className="space-y-3 list-disc list-inside ">
                  {project.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Back Button */}
            <div className="text-center">
              <button
                onClick={() => window.history.back()}
                className="btn btn-outline"
              >
                Back to Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
