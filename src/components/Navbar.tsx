import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav role="navigation" className="primary-navigation">
        <ul>
          <li>
            <Link to="/">Home (A4)</Link>
          </li>
          <li>
            <Link to="/a4x">A4-X</Link>
          </li>
          <li>
            <Link to="/a3">A3</Link>
          </li>
          <li>
            <Link to="/a3l">A3-L</Link>
          </li>
          <li>
            <Link to="/a2">A2</Link>
          </li>
          <li>
            <Link to="/t2">T2</Link>
          </li>
          <li>
            <Link to="/t4">T4</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
