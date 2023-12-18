"use client";

import {
  Button,
  Navbar,
  DarkThemeToggle,
  Dropdown,
  Avatar,
} from "flowbite-react";
import logo from "/img/brandlogo.png";
import { HiChevronRight } from "react-icons/hi";
import { navLinks } from "../../data/index";
// import { useEffect } from "react";
import { NavLink, useNavigate, } from "react-router-dom";
import { navLinksAfterLogin } from "../../data/index";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useLogout } from "../../hooks/useLogout";

function Navbarcomponent() {
  const navigate = useNavigate();
  // const location = useLocation();
  // const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const { user } = useContext(AuthContext);
  const { logout } = useLogout();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    navigate("/");
  };

  // useEffect(() => {
  //   // Determine whether the user is logged in based on the current path
  //   setIsUserLoggedIn(location.pathname.startsWith("/user"));
  // }, [location]);

  return (
    <div
      className="bg-white border-gray-200 dark:bg-gray-800 fixed w-full z-20"
      data-aos="fade-down"
      data-aos-duration="1700"
    >
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
          {user ? (
            <>
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    alt={user.name || user.username}
                    img={user.avatar}
                    rounded
                    className="mr-2"
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">
                    {user.username || user.name}
                  </span>
                  <span className="block truncate text-sm font-medium">
                    {user.email}
                  </span>
                </Dropdown.Header>
                <NavLink to="/user">
                  <Dropdown.Item>Beranda</Dropdown.Item>
                </NavLink>
                <NavLink to="/user/profil">
                  <Dropdown.Item>Profile</Dropdown.Item>
                </NavLink>
                {user.roles === "doctor" && (
                  <NavLink to="/user/tambahartikel">
                    <Dropdown.Item>Buat artikel</Dropdown.Item>
                  </NavLink>
                )}
                <Dropdown.Divider />
                <NavLink onClick={handleLogout}>
                  <Dropdown.Item>Keluar</Dropdown.Item>
                </NavLink>
              </Dropdown>
            </>
          ) : (
            <Button
              color="primary"
              className="justify-center mr-2"
              onClick={() => navigate("/login")}
            >
              Masuk
              <HiChevronRight className="ml-2 h-5 w-5" />
            </Button>
          )}

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {user
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
          <Dropdown
            label={
              <p className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-color-primary-700 md:p-0 dark:text-white md:dark:hover:text-color-primary-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Cek mental
              </p>
            }
            inline
          >
            <NavLink to="/checkdepression">
              <Dropdown.Item>Cek tingkat depresi</Dropdown.Item>
            </NavLink>
            <NavLink to="/checkanxiety">
              <Dropdown.Item>Cek tingkat cemas</Dropdown.Item>
            </NavLink>
          </Dropdown>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navbarcomponent;
