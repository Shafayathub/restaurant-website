import { Link } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order">Order Food</Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar max-w-screen-xl mx-auto bg-black bg-opacity-30 text-white fixed z-10 font-serif">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-30 text-white rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl font-serif">
            <p className="font-semibold">
              <span className="uppercase">Bistro Boss</span> <br />{" "}
              <span className="normal-case text-lg">
                {"R e s t a u r a n t"}
              </span>
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
