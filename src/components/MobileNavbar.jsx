import React from "react";
import { Link } from "react-router-dom";

const MobileNavbar = ({ toggle, setToggle }) => {
  const NavLink = ({ to, children }) => {
    return (
      <Link
        onClick={() => {
          setToggle((prev) => !prev);
        }}
        to={to}
      >
        {children}
      </Link>
    );
  };

  return (
    <nav>
      <ul
        className={`fixed  bg-slate-400 text-slate-900 top-[9%] grid place-content-center right-0 bottom-0 z-50 gap-6 left-0 font-semibold text-xl text-center ${
          toggle ? "translate-x-full" : "translate-x-0"
        } transition duration-300 ease-in-out`}
      >
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/tv">TV Shows</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
        <li>
          <NavLink to="/trending">Trending</NavLink>
        </li>
        <li>
          <NavLink to="/mylist">My List</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavbar;
