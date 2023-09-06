import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="container">
      <ul className="list-none flex items-center justify-between gap-10 p-5 text-red-900 font-bold">
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"/donate"}>Donate</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
