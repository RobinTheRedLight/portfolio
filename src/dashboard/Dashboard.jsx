import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { logout, selectCurrentUser } from "../redux/features/auth/authSlice";
import { FaHome } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";

const Dashboard = () => {
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  const closeDrawer = () => {
    const drawerCheckbox = document.getElementById("my-drawer-2");
    if (drawerCheckbox.checked) {
      drawerCheckbox.checked = false;
    }
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="flex btn btn-outline mt-5 drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side  border border-gray-500 p-5 ">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay "
        ></label>
        <ul className="menu p-4 w-80 min-h-full backdrop-blur-lg ">
          {user && (
            <>
              <li>
                <NavLink onClick={closeDrawer} to="/dashboard/skills">
                  <FaHome></FaHome>Add Skill
                </NavLink>
              </li>
              <li>
                <NavLink onClick={closeDrawer} to="/dashboard/projects">
                  <FaHome></FaHome>Add Project
                </NavLink>
              </li>
              <li>
                <NavLink onClick={closeDrawer} to="/dashboard/blogs">
                  <FaHome></FaHome>Add Blog
                </NavLink>
              </li>
              <li>
                <NavLink className="" to="/" onClick={handleLogOut}>
                  {" "}
                  <TbLogout2 />
                  Logout
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
