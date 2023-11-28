"use client";

import { Button, Navbar } from "flowbite-react";
import logo from "../assets/mindlandlogo.png";
import { HiChevronRight } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { navLinks } from "../data/index";

function Navbarcomponent() {
  return (
    <div className="bg-white border-gray-200 dark:bg-gray-800 fixed w-full z-10">
      <Navbar fluid rounded className="max-w-screen-xl mx-auto">
        <Navbar.Brand href="/">
          <img
            src={logo}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button color="primary" className="justify-center">
            Masuk
            <HiChevronRight className="ml-2 h-5 w-5" />
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="cursor-pointer ">
          {navLinks.map((link) => {
            return (
              <div
                key={link.id}
                className="active:text-color-primary-500 hover:text-color-primary-500"
              >
                <NavLink
                  to={link.path}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  end
                >
                  {link.text}
                </NavLink>
              </div>
            );
          })}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navbarcomponent;
