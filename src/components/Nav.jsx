import React, { useState } from 'react'
import { navLinks } from "../constant"
import { logo, menu, close} from '../assets'
import { Link } from 'react-router-dom'

const Nav = () => {
	const [active, setActive] = useState(false);
	const [linkActive, setLinkActive] = useState("")

	const handleActive = () => {
		setActive(!active);
	}
  return (
    <div className="fixed w-full z-10">
      <div className="relative w-full ">
        <div className="flex py-3 lg:py-5 justify-between md:px-[40px] px-2 items-center">
          <div>
            <a
              href="#home"
              onClick={() => {
                setLinkActive("");
                window.scrollTo(0, 0);
              }}
            >
              <img
                src={logo}
                alt="logo"
                className="sm:w-[100px] sm:h-[60px] lg:w-[120px] lg:h-[80px] w-[80px] h-[50px]"
              />
            </a>
          </div>
          <div>
            <div className="lg:gap-10 gap-5 items-center mx-4 hidden md:flex">
              <ul>
                <li>
                  {navLinks.map((nav, index) => {
                    return (
                      <a
                        href={`#${nav.id}`}
                        key={index}
                        className={`lg:text-[20px] text-[18px] py-3 px-5 rounded-full ${
                          linkActive == nav.id ? "active" : ""
                        } ${
                          linkActive == nav.id
                            ? "hover:text-white"
                            : "hover:text-[#0f9403]"
                        } font-bold`}
                        onClick={() => {
                          setLinkActive(nav.id);
                        }}
                      >
                        {nav.title}
                      </a>
                    );
                  })}
                </li>
              </ul>
              <div>
                <button className="btn btn-sm">Download CV</button>
              </div>
            </div>
            <div>
              <img
                src={active ? close : menu}
                alt="menu"
                className="mx-4 w-8 cursor-pointer md:hidden"
                onClick={handleActive}
              />
            </div>
          </div>
        </div>
        <div
          className={`${
            active ? "flex" : "hidden"
          } flex-col md:hidden absolute right-10 gradient sm:p-10 p-5 sm:gap-10 gap-5 rounded z-10`}
        >
          {navLinks.map((nav, index) => {
            return (
              <a
                href={`#${nav.id}`}
                key={index}
                className="text-[16px] sm:text-[20px] font-bold text-center text-white border-b-2"
                onClick={() => {
                  setActive(false);
                }}
              >
                {nav.title}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Nav