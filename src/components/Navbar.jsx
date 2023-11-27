"use client";

import { Button, Navbar } from "flowbite-react";
import logo from "../assets/mindlandlogo.png";
import {HiChevronRight} from 'react-icons/hi'

function Navbarcomponent() {
  return (
    <div className="bg-white border-gray-200 dark:bg-gray-800 fixed w-full">
      <Navbar fluid rounded className="max-w-screen-xl mx-auto">
        <Navbar.Brand href="https://flowbite-react.com">
          <img
            src={logo}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button color="primary" className="justify-center">
            Masuk
            <HiChevronRight  className="ml-2 h-5 w-5" />
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navbarcomponent;
