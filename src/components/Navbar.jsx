import React from "react";
import { Search } from "react-feather";
import { LOGO, AVATAR } from "../constants";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center gap-8 ">
          <div>
            <a href="#">
              <img className="w-[75px]" src={LOGO} alt="logo" />
            </a>
          </div>
          <ul className="items-center gap-4 hidden md:flex font-normal text-white">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">TV Shows</a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">Latest</a>
            </li>
            <li>
              <a href="#">My List</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <a href="#">
            <Search color="white" />
          </a>
          <a href="#">
            <img className="w-[24px]" src={AVATAR} alt="avatar" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
