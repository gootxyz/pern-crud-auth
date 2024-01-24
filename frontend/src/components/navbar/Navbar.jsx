import { Link } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./navigation";
import { Container } from "../ui";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { isAuth, signout } = useAuth();

  return (
    <nav className="bg-zinc-950 ">
      <Container classname="flex justify-between py-3">
        <Link to="/">
          <h1 className="font-bold text-2xl">PERN Tasks</h1>
        </Link>

        <ul className="flex gap-x-2">
          {isAuth ? (
            <>
              {privateRoutes.map(({ path, name }) => (
                <li
                  className={`bg-sky-800 px-3 py-1 ${
                    location.pathname == path && " px-3 py-1"
                  }`}
                  key={path}
                >
                  <Link to={path}>{name}</Link>
                </li>
              ))}
              <li
                onClick={() => {
                  signout();
                }}
              >
                Logout
              </li>
            </>
          ) : (
            publicRoutes.map(({ path, name }) => (
              <li
                className={`bg-sky-800 px-3 py-1 ${
                  location.pathname == path && "bg-sky-500 px-3 py-1"
                }`}
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
