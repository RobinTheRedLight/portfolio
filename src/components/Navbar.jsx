/* eslint-disable react/prop-types */
const Navbar = ({
  homeRef,
  aboutRef,
  projectsRef,
  contactRef,
  skillsRef,
  blogRef,
}) => {
  return (
    <div className="navbar fixed max-w-screen-xl z-10 ">
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
                  skillsRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Skills
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
                  blogRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Blogs
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
                skillsRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Skills
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
                blogRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Blogs
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
  );
};

export default Navbar;
