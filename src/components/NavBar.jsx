import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import Dropdown from './Dropdown';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center navbar">
      <a href="/" class="flex items-center">
        <img src={logo} class="h-20 mr-1" alt="Kendo Logo" />
        <div class={`"self-center font-advantage whitespace-nowrap text-white sm:text-2xl text-lg mr-1 "`}>Kendo All In One</div>
    </a>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-comfortaa font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            {nav.submenu ? (
            <>
            <button
              className="w-full"
              type="button" aria-haspopup="menu"
              aria-expanded={dropdown ? "true" : "false"}
              onClick={() => setDropdown((prev) => !prev)}
            >
              
              <p className="arrow">{nav.title}{" "}</p>
            </button>
            <Dropdown 
              submenus={nav.submenu}
              dropdown={dropdown} 
            />
            </>
          ) : (
          <a href={`${nav.path}`}>{nav.title}</a>
          )}
          </li>

        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                {nav.submenu ? (
            <>
            <button
              className="w-full"
              type="button" aria-haspopup="menu"
              aria-expanded={dropdown ? "true" : "false"}
              onClick={() => setDropdown((prev) => !prev)}
            >
              
              <p className="arrow"> {nav.title}{" "}</p>
            </button>
            <Dropdown 
              submenus={nav.submenu}
              dropdown={dropdown} 
            />
            </>
          ) : (
          <a href={`${nav.path}`}>{nav.title}</a>
          )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;