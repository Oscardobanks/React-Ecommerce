"use client";
import { NavLink } from "react-router-dom";
import {
  faCartShopping,
  faChevronDown,
  faHeart,
  faShoppingBag,
  faSignOutAlt,
  faStar,
  faTimesCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "flowbite-react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/authActions";

const HomeNavbar = ({ active }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
  };
  
  // Use useSelector to access the global state variable
    // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  HomeNavbar.propTypes = {
    active: PropTypes.string.isRequired,
  };

  return (
    <div>
      <div className="mainContainer text-white bg-black py-3">
        <div className="relative flex text-xs justify-center ">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <span className="font-semibold border-b border-b-white ml-2">
              ShopNow
            </span>
          </p>
          <div className="flex gap-3 items-center md:absolute end-0">
            <span>English</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
      </div>

      <div className="bg-white border-gray-200 dark:bg-gray-900 drop-shadow-sm mainContainer">
        <Navbar className="sm:px-0 pt-5">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
              Exclusive
            </span>
          </NavLink>
          <div className="flex md:order-2">
            <div className="relative mt-3 md:block hidden">
              <input
                type="text"
                id="search-navbar"
                className="block md:w-60 w-full p-2 pe-10 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="What are you looking for?"
              />
              <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
            </div>
            <Navbar.Toggle className="ms-2 mt-3" />
            <div className="relative flex gap-4 ps-4 pt-5">
              <NavLink to="/wishlist">
                <FontAwesomeIcon icon={faHeart} />
              </NavLink>
              <NavLink to="/cart">
                <FontAwesomeIcon icon={faCartShopping} />
              </NavLink>
              {/* {isLoggedIn && (
                <div className="dropdown">
                  <button
                    onClick={toggleDropdown}
                    className=" focus:bg-red-700 focus:text-white focus:px-2 focus:pb-1 focus:rounded-full"
                  >
                    <FontAwesomeIcon icon={faUser} />
                  </button>
                  {isOpen && (
                    <div className="dropdown-content">
                      <NavLink to={"/account"}>
                        <FontAwesomeIcon icon={faUser} /> Manage My Account
                      </NavLink>
                      <NavLink>
                        <FontAwesomeIcon icon={faShoppingBag} /> My Order
                      </NavLink>
                      <NavLink>
                        <FontAwesomeIcon icon={faTimesCircle} /> My
                        Cancellations
                      </NavLink>
                      <NavLink>
                        <FontAwesomeIcon icon={faStar} /> My Reviews
                      </NavLink>
                      <NavLink to={"/login"} onClick={handleLogout}>
                        <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                      </NavLink>
                    </div>
                  )}
                </div>
              )} */}
              <div className="dropdown">
                  <button
                    onClick={toggleDropdown}
                    className=" focus:bg-red-700 focus:text-white focus:px-2 focus:pb-1 focus:rounded-full"
                  >
                    <FontAwesomeIcon icon={faUser} />
                  </button>
                  {isOpen && (
                    <div className="dropdown-content">
                      <NavLink to={"/account"}>
                        <FontAwesomeIcon icon={faUser} /> Manage My Account
                      </NavLink>
                      <NavLink>
                        <FontAwesomeIcon icon={faShoppingBag} /> My Order
                      </NavLink>
                      <NavLink>
                        <FontAwesomeIcon icon={faTimesCircle} /> My
                        Cancellations
                      </NavLink>
                      <NavLink>
                        <FontAwesomeIcon icon={faStar} /> My Reviews
                      </NavLink>
                      <NavLink to={"/login"} onClick={handleLogout}>
                        <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                      </NavLink>
                    </div>
                  )}
                </div>
            </div>
          </div>
          <Navbar.Collapse>
            <div className="md:flex pt-2">
              <Navbar className="md:hidden">
                <div className="relative mt-3">
                  <input
                    type="text"
                    id="search-navbar"
                    className="block md:w-60 w-full p-2 pe-10 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="What are you looking for?"
                  />
                  <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search icon</span>
                  </div>
                </div>
              </Navbar>
              <Navbar>
                <NavLink
                  to="/"
                  className={`block text-black ${
                    active == "home" ? "activePage" : ""
                  }`}
                >
                  Home
                </NavLink>
              </Navbar>
              <Navbar>
                <NavLink
                  to="/contact"
                  className={`block text-black ${
                    active == "contact" ? "activePage" : ""
                  }`}
                >
                  Contact
                </NavLink>
              </Navbar>
              <Navbar href="#">
                <NavLink
                  to="/about"
                  className={`block text-black ${
                    active == "about" ? "activePage" : ""
                  }`}
                >
                  About
                </NavLink>
              </Navbar>
              <Navbar href="#">
                <NavLink
                  to="/register"
                  className={`block text-black ${
                    active == "signup" ? "activePage" : ""
                  }`}
                >
                  Sign Up
                </NavLink>
              </Navbar>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default HomeNavbar;
