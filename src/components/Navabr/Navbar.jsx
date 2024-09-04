import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Column, Heading, Row, Wraper } from "../ComponentsIndex";
import OffCanvas from "./Drawer";
import Icon from "../Button/Icon";
import { useNavigate } from "react-router-dom";
import Img from "../Img/Img";
import { person } from "../Img/ImportedImage";

function Navbar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("_id");
    navigate("/login");
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { id: 1, name: "Home", link: "/", icon: "house" },
    {
      id: 1,
      name: "Registration",
      link: "/teacher-registration",
      icon: "person",
    },
    // { id: 2, name: "Teacher", link: "/teachers", icon: "person" },
    // { id: 4, name: "Service", link: "/plan", icon: "ui-radios-grid" },
    // { id: 5, name: "Blog", link: "/blog", icon: "grid" },
  ];

  return (
    <Row className="flex justify-between items-center p-4 bg-custom-peach">
      <Column className="flex items-center">
        <OffCanvas />
        <Heading className="text-2xl font-bold">YogaNests</Heading>
      </Column>

      {/* Menu Items */}
      <Column className="hidden lg:flex items-center space-x-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.link}
            className={({ isActive }) =>
              `flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium ${
                isActive
                  ? "bg-orange-400 text-white"
                  : "text-white-300 hover:bg-orange-300 hover:text-white"
              }`
            }
          >
            <Icon children={item.icon} />
            {item.name}
          </NavLink>
        ))}
      </Column>

      {/* User Profile Dropdown */}
      <Column className="flex items-center space-x-4">
        <Wraper className="relative inline-block text-left">
          {/* <Button
            type="button"
            className="flex items-center gap-x-2 rounded-md  py-1 text-sm font-semibold text-orange-400"
            id="menu-button"
            aria-expanded={isOpen}
            aria-haspopup="true"
            onClick={toggleDropdown}
          >
          
            <Img children={person} className="w-10 h-10" />
          </Button> */}
          {isOpen && (
            <Wraper
              className="absolute right-0 z-10 mt-2 w-48 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <NavLink
                className="block px-4 py-2 text-sm text-black hover:bg-gray-100 rounded-md"
                role="menuitem"
                to="/"
              >
                Profile
              </NavLink>
              <NavLink
                className="block px-4 py-2 text-sm text-black hover:bg-gray-100 rounded-md"
                role="menuitem"
                to="/"
              >
                Session
              </NavLink>
              <hr />
              <NavLink
                className="block px-4 py-2 text-sm text-red-700 hover:bg-gray-100"
                role="menuitem"
                to="/login"
                onClick={logout}
              >
                Sign out
              </NavLink>
            </Wraper>
          )}
        </Wraper>
      </Column>
    </Row>
  );
}

export default Navbar;
