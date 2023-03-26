import React, { useEffect, useState } from "react";
import { Search } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import { LOGO, AVATAR } from "../constants";
import useScroll from "../hooks/useScroll";

const Navbar = () => {
  const active = useScroll();
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");

  const handleOnChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!searchText.trim("")) return;
    navigate("search/" + searchText);
  };

  return (
    <nav
      style={
        active
          ? {
              backgroundColor: "#000000cc",
              transition: "all .5s ",
              color: "#fff",
            }
          : {
              backgroundColor: "transparent",
              transition: "all .5s ",
              color: "#000000cc",
            }
      }
      className="fixed top-0 w-full z-50"
    >
      <div className="container mx-auto px4 flex items-center justify-between">
        <div className="flex items-center gap-8 h-[60px]">
          <div>
            <Link to="/">
              <img className="w-[75px]" src={LOGO} alt="logo" />
            </Link>
          </div>
          <ul className="items-center gap-4 hidden md:flex font-normal ">
            <li>
              <Link to="/">Home</Link>
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
          <form
            onSubmit={handleOnSubmit}
            style={
              active
                ? {
                    backgroundColor: "#ffffff",
                    transition: "all .5s ",
                    color: "#2b2b2bc7",
                  }
                : {
                    backgroundColor: "transparent",
                    transition: "all .5s ",
                    borderColor: "#2b2b2b",
                  }
            }
            className=" py-[2px] hover:none px-2 w-fit  border-2 border-gray-100 bg-gray-200 rounded-lg flex "
          >
            <input
              style={
                active
                  ? {
                      backgroundColor: "#ffffff",
                      transition: "all .5s ",
                      color: "#222",
                    }
                  : {
                      backgroundColor: "transparent",
                      transition: "all .5s ",
                      color: "#222",
                    }
              }
              className="text-sm outline-none w-32 md:w-fit"
              type="text"
              name="search"
              placeholder="Search"
              onChange={handleOnChange}
              value={searchText}
            />
            <button type="submit">
              <Search size={16} />
            </button>
          </form>

          <a href="#">
            <img className="w-[24px]" src={AVATAR} alt="avatar" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
