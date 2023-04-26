import React, { useState } from "react";
import { Menu, Search } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import { LOGO, AVATAR } from "../constants";
import useScroll from "../hooks/useScroll";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const active = useScroll();
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");

  const [toggle, setToggle] = useState(true);

  const handleOnChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!searchText.trim("")) return;
    navigate("search/" + searchText);
    setSearchText("");
  };

  return (
    <>
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
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-8 h-[60px]">
            <div className="flex items-center gap-4">
              <Link to="/">
                <img className="w-[75px]" src={LOGO} alt="logo" />
              </Link>
            </div>
            <ul className="items-center gap-4 hidden md:flex font-normal ">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/tv">TV Shows</Link>
              </li>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
              <li>
                <Link to="/trending">Trending</Link>
              </li>
              <li>
                <Link to="/mylist">My List</Link>
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
                className={`text-sm  outline-none w-32 md:w-fit ${
                  active ? "" : "placeholder:text-slate-300"
                }`}
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
            <div className="flex items-center gap-2">
              <a className="hidden md:block" href="#">
                <img className="w-[24px]" src={AVATAR} alt="avatar" />
              </a>
              <div
                onClick={() => setToggle(!toggle)}
                className="border rounded-md p-1 cursor-pointer hover:border-2 block md:hidden"
              >
                <Menu />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="md:hidden">
        <MobileNavbar toggle={toggle} setToggle={setToggle} />
      </div>
    </>
  );
};

export default Navbar;
