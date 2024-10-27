import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./dashboard/Dashboard";
import Login from "./auth/Login";
import PrivateRoute from "./PrivateRoute";
import AddSkill from "./dashboard/AddSkill";
import AddProject from "./dashboard/AddProject";
import SingleProject from "./components/SingleProject";
import AddBlog from "./dashboard/AddBlog";
import SingleBlog from "./components/SingleBlog";
import AllBlogs from "./components/AllBlogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },

  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/projects/:id",
    element: <SingleProject></SingleProject>,
  },
  {
    path: "blogs/:id",
    element: <SingleBlog></SingleBlog>,
  },
  {
    path: "allblogs",
    element: <AllBlogs></AllBlogs>,
  },

  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),

    children: [
      {
        path: "skills",
        element: <AddSkill></AddSkill>,
      },
      {
        path: "projects",
        element: <AddProject></AddProject>,
      },
      {
        path: "blogs",
        element: <AddBlog></AddBlog>,
      },
    ],
  },
]);
