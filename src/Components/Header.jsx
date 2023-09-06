import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex items-center justify-between gap-10 p-5">
      <ul className="list-none">
        <li>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/donate"}>Donate</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
