"use client";

import { Button, Navbar, DarkThemeToggle } from "flowbite-react";
import logo from "../../assets/mindlandlogo.png";
import { HiChevronRight } from "react-icons/hi";
import { navLinks } from "../../data/index";
import {NavLink, useNavigate } from "react-router-dom";

function Navbarcomponent() {
  let naviget = useNavigate();

  return (
    <div className="bg-white border-gray-200 dark:bg-gray-800 fixed w-full z-10">
      <Navbar fluid className="max-w-screen-xl mx-auto">
        <Navbar.Brand href="/">
          <img
            src={logo}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
        <DarkThemeToggle className="mr-2"/>
          <Button
            color="primary"
            className="justify-center"
            onClick={() => naviget("/login")}
          >
            Masuk
            <HiChevronRight className="ml-2 h-5 w-5" />
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {navLinks.map((link) => {
            return (
              <NavLink
                key={link.id}
                to={link.path}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-color-primary-700 md:p-0 dark:text-white md:dark:hover:text-color-primary-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                {link.text}
              </NavLink>
            );
          })}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navbarcomponent;
