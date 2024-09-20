import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Column, Heading, Row, Wraper } from "../ComponentsIndex";
import OffCanvas from "./Drawer";
import Icon from "../Button/Icon";
import { useNavigate } from "react-router-dom";
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
    { id: 1, name: "Home", link: "/" },
    {id: 2,name: "About Us",link: "/about-us",},
    { id: 3, name: "Programme & Services", link: "/programme-services"},
    { id: 4, name: "Get Involved", link: "/get-involved" },
    // { id: 4, name: "Dental Treatment", link: "/dental-treatment" },
    { id: 5, name: "News & Updates", link: "/news-updates"},
    { id: 6, name: "Store", link: "/blog"},
    { id: 7, name: "Courses", link: "/blog"},
  ];

  return (
    <Row className="flex justify-between items-center px-5 py-2">
      <Column className="flex items-center ">
        <OffCanvas />
        <img src="src/assets/img/logo.svg" alt="" width="88px"/>
      </Column>

      <Column className=" lg:flex items-center space-x-4">
        {/* Menu Items */}
        <Column className="hidden lg:flex items-center space-x-4 gap-3">
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.link}
              className="font-semibold"
            >
              <Icon children={item.icon} />
              {item.name}
            </NavLink>
          ))}
        </Column>

        {/* User Profile Dropdown */}
        <Column className="flex items-center space-x-4 px-5">
          <Wraper className="relative inline-block text-left">
            <Button 
              type="button"
              // className="flex items-center rounded-md py-2 px-3 text-md font-semibold bg-amber-300"
              id="menu-button"
              aria-expanded={isOpen}
              aria-haspopup="true"
              onClick={toggleDropdown}
            >
            Donate Now
            </Button>
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
      </Column>
    </Row>
  );
}

export default Navbar;
