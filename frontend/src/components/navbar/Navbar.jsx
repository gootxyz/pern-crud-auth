import { Link } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./navigation";
import { Container } from "../ui";
import { useAuth } from "../../context/AuthContext";
import { twMerge } from "tailwind-merge";
import { IoIosLogOut } from "react-icons/io";


function Navbar() {
  const { isAuth, signout, user } = useAuth();

  return (
    <nav className="bg-zinc-950 ">
      <Container classname="flex justify-between py-3">
        <Link to="/">
          <h1 className="font-bold text-2xl">PERN Tasks</h1>
        </Link>

        <ul className="flex md:gap-x-2 items-center justify-center">
          {isAuth ? (
            <>
              {privateRoutes.map(({ path, name, icon }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className={twMerge(
                      "text-slate-300 flex items-center px-3 py-1 gap-x-1",
                      location.pathname === path && ""
                    )}
                  >
                    {icon}
                    <span className="sm:block hidden">{name}</span>
                  </Link>
                </li>
              ))}
              <li
                className="text-red-400 flex items-center px-3 py-1 hover:cursor-pointer"
                onClick={() => {
                  signout();
                }}
              >

                <IoIosLogOut className="text-red-400 h-5 w-5"/>
                <span className="hidden sm:block">
                  Logout
                </span>
              </li>
              <li className="flex gap-x-1 justify-center items-center">
                <img
                  src={user.gravatar}
                  alt="user-gravatar icon"
                  className=" rounded-full h-7 w-7"
                />
                <span className="italic">{user.name}</span>
              </li>
            </>
          ) : (
            publicRoutes.map(({ path, name }) => (
              <li
                className={twMerge(
                  "text-slate-300 px-3 py-1 flex items-center",
                  location.pathname === path && ""
                )}
                key={path}
              >
                <Link to={path}>{name}</Link>
              </li>
            ))
          )}
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
