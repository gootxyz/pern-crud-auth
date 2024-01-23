import { Link, useLocation } from "react-router-dom";
import { navigation } from "./navigation";
import { useAuth } from "../../context/AuthContext";
import { Container } from "../ui";

function Navbar() {
  const { pathname } = useLocation();
  const { user } = useAuth();
  console.log(user);

  return (
    <nav className="bg-zinc-950 ">
      <Container classname="flex justify-between py-3">
        <Link to="/">
          <h1 className="font-bold text-2xl">PERN Tasks</h1>
        </Link>

        <ul className="flex gap-x-2">
          {navigation.map((item) => (
            <li
              className={
                pathname === item.path ? "bg-sky-800 px-3 py-1" : "py-1"
              }
              key={item.name}
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
