import { CiViewList } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

export const publicRoutes = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Login",
    path: "/login",
  },
  {
    name: "Register",
    path: "/register",
  },
];

export const privateRoutes = [
  {
    name: "Tasks",
    path: "/tasks",
    icon: <CiViewList className="text-white w-5 h-5" />
  },
  {
    name: "Add",
    path: "/tasks/new",
    icon: <IoIosAddCircleOutline className="text-white w-5 h-5" />
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <FaRegUserCircle className="text-white w-5 h-5" />
  },
];