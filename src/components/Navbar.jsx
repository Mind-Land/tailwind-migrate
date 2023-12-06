"use client";

import { Button, Navbar, DarkThemeToggle } from "flowbite-react";
import logo from "../assets/mindlandlogo.png";
import { HiChevronRight } from "react-icons/hi";
import { navLinks } from "../data/index";
import { Link } from "react-router-dom";

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
        <div className="flex md:order-2 gap-2">
          <DarkThemeToggle></DarkThemeToggle>
          <Button color="primary" className="justify-center">
            Masuk
            <HiChevronRight className="ml-2 h-5 w-5" />
          </Button>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            {navLinks.map((link) => {
              return (
                <li key={link.id}>
                  <Link
                    to={link.path}
                    aria-current="page"
                    className="block py-2 px-3 md:p-0 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-color-primary-700 dark:text-white md:dark:hover:text-color-primary-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer"
                  >
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Navbar>
    </div>
  );
}

export default Navbarcomponent;
