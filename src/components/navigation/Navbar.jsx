"use client";

import {
  Button,
  Navbar,
  DarkThemeToggle,
  Dropdown,
  Avatar,
} from "flowbite-react";
import logo from "../../assets/mindlandlogo.png";
import { HiChevronRight } from "react-icons/hi";
import { HiChatAlt2 } from "react-icons/hi";
import { navLinks } from "../../data/index";
import { NavLink, useNavigate, useLocation, Link } from "react-router-dom";
import { navLinksAfterLogin } from "../../data/index";
import { useState, useEffect } from "react";
function Navbarcomponent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    // Determine whether the user is logged in based on the current path
    setIsUserLoggedIn(location.pathname.startsWith("/user"));
  }, [location]);

  return (
    <div className="bg-white border-gray-200 dark:bg-gray-800 fixed w-full z-20">
      <Navbar fluid className="max-w-screen-xl mx-auto">
        <Navbar.Brand href="/">
          <img
            src={logo}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <DarkThemeToggle className="ml-2 mr-2" />
          {isUserLoggedIn ? (
            <>
              <Dropdown
                label=""
                renderTrigger={() => (
                  <Button color="primary" size="sm" className="mr-4">
                    <HiChatAlt2 className="h-4 w-4" />
                  </Button>
                )}
                color="primary"
                className="w-4/5 md:w-3/5 lg:w-1/5 h-96 overflow-auto"
              >
                <Dropdown.Header>
                  <span className="block text-sm">Chat dokter</span>
                </Dropdown.Header>
                <Dropdown.Item>
                  <Link to="/user/chatdokter" className="flex ">
                    <div className="flex-shrink-0">
                      <img
                        className="rounded-full w-11 h-11 object-cover"
                        src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fHww"
                        alt="Leslie image"
                      />
                    </div>
                    <div className="w-full ps-3 text-left">
                      <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Leslie Livingston
                        </span>
                        <br />
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-500">
                        1 hour ago
                      </div>
                    </div>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <a href="#" className="flex ">
                    <div className="flex-shrink-0">
                      <img
                        className="rounded-full w-11 h-11 object-cover"
                        src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fHww"
                        alt="Leslie image"
                      />
                    </div>
                    <div className="w-full ps-3 text-left">
                      <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Leslie Livingston
                        </span>
                        <br />
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-500">
                        1 hour ago
                      </div>
                    </div>
                  </a>
                </Dropdown.Item>
              </Dropdown>
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    alt="User settings"
                    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    rounded
                    className="mr-2"
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">Bonnie Green</span>
                  <span className="block truncate text-sm font-medium">
                    name@flowbite.com
                  </span>
                </Dropdown.Header>
                <NavLink to="/user/">
                  <Dropdown.Item>Beranda</Dropdown.Item>
                </NavLink>
                <NavLink to="/user/tambahartikel">
                  <Dropdown.Item>Buat artikel</Dropdown.Item>
                </NavLink>
                <Dropdown.Divider />
                <NavLink to="/">
                  <Dropdown.Item>Keluar</Dropdown.Item>
                </NavLink>
              </Dropdown>
            </>
          ) : (
            <Button
              color="primary"
              className="justify-center mr-2"
              onClick={() => navigate("/Login")}
            >
              Masuk
              <HiChevronRight className="ml-2 h-5 w-5" />
            </Button>
          )}

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {isUserLoggedIn
            ? navLinksAfterLogin.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.path}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-color-primary-700 md:p-0 dark:text-white md:dark:hover:text-color-primary-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {link.text}
                </NavLink>
              ))
            : navLinks.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.path}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-color-primary-700 md:p-0 dark:text-white md:dark:hover:text-color-primary-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {link.text}
                </NavLink>
              ))}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navbarcomponent;
