/* eslint-disable react/prop-types */
import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import project4 from "../assets/project-4.jpg";
import project5 from "../assets/project-5.jpg";
import project6 from "../assets/project-6.png";

const Projects = ({ projectsRef }) => {
  return (
    <div className=" min-h-screen pt-20" id="projects" ref={projectsRef}>
      <h1 className="font-[Montserrat] text-5xl font-bold text-center">
        Projects
      </h1>
      <div className=" grid grid-col-1 pt-20 md:grid-cols-3 gap-10 ">
        <div className="card w-96 bg-base-100 shadow-xl mx-auto md:mx-0">
          <figure className="h-56">
            <img src={project3} alt="project" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Project 01:
              <div className="badge badge-secondary p-5">Ride & Roll</div>
            </h2>

            <div className="card-actions justify-center pt-5">
              <a
                href="https://rideandroll.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="badge badge-outline p-4"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mx-auto md:mx-0">
          <figure className="h-56">
            <img src={project4} alt="project" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Project 02:
              <div className="badge badge-secondary p-5">Pet Tales</div>
            </h2>

            <div className="card-actions justify-center pt-5">
              <a
                href="https://grand-khapse-06c64b.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="badge badge-outline p-4"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mx-auto md:mx-0">
          <figure className="h-56">
            <img src={project1} alt="project" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Project 03:
              <div className="badge badge-secondary p-5">Amici Italiano</div>
            </h2>

            <div className="card-actions justify-center pt-5">
              <a
                href="https://restaurant-59678.web.app/"
                target="_blank"
                rel="noreferrer"
                className="badge badge-outline p-4"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mx-auto md:mx-0 pt-10 md:pt-0">
          <figure className="h-56">
            <img src={project2} alt="project" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Project 04:
              <div className="badge badge-secondary p-5">Doctors Portal</div>
            </h2>

            <div className="card-actions justify-center pt-5">
              <a
                href="https://doctors-portal-5471b.web.app/"
                target="_blank"
                rel="noreferrer"
                className="badge badge-outline p-4"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mx-auto md:mx-0 pt-10 md:pt-0">
          <figure className="h-56">
            <img src={project5} alt="project" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Project 05:
              <div className="badge badge-secondary p-5">Sport Spot</div>
            </h2>

            <div className="card-actions justify-center pt-5">
              <a
                href="https://curious-pudding-47513a.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="badge badge-outline p-4"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mx-auto md:mx-0 pt-10 md:pt-0">
          <figure className="h-56">
            <img src={project6} alt="project" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Project 06:
              <div className="badge badge-secondary p-5">Quiz-Appraisal</div>
            </h2>

            <div className="card-actions justify-center pt-5">
              <a
                href="https://quizappraisal.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="badge badge-outline p-4"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
