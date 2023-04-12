import React, { useState } from "react";
import { Link } from "react-router-dom";
import close from "../../assets/close.svg";
import menu from "../../assets/menu.svg";

import logo from "../../assets/alamar_new_logo.png";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isRecruitmentOpen, setIsRecruitmentOpen] = useState(false);

  const handleAboutToggle = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  const handleRecruitmentToggle = () => {
    setIsRecruitmentOpen(!isRecruitmentOpen);
  };

  const handleDropdownItemClick = () => {
    setIsAboutOpen(false);
    setIsRecruitmentOpen(false);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img className="h-8 w-8" src={logo} alt="Workflow" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/Home"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                onClick={handleDropdownItemClick}
              >
                Home
              </Link>
              <div className="relative">
                <button
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  onClick={handleAboutToggle}
                >
                  About us
                </button>
                <div
                  className={`absolute z-10 top-10 right-0 bg-gray-800 py-2 rounded-md w-48 shadow-lg ${
                    isAboutOpen ? "" : "hidden"
                  }`}
                >
                  <Link
                    to="/Company Profile"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    onClick={handleDropdownItemClick}
                  >
                    Company Profile
                  </Link>
                  <Link
                    to="/ Our Team"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    onClick={handleDropdownItemClick}
                  >
                    Our Team
                  </Link>
                </div>
              </div>
              <Link
                to="/Service"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                onClick={handleDropdownItemClick}
              >
                Service
              </Link>
              <div className="relative">
                <button
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  onClick={handleRecruitmentToggle}
                >
                  Recruitment
                </button>
                <div
                  className={`absolute z-10 top-10 right-0 bg-gray-800 py-2 rounded-md w-48 shadow-lg ${
                    isRecruitmentOpen ? "" : "hidden"
                  }`}
                >
                  <Link
                    to="/ Candidate info"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    onClick={handleDropdownItemClick}
                  >
                    Candidate info
                  </Link>
                  <Link
                    to="/How it work"
                    className="block px-4
                               py-2 text-sm text-gray-300 hover:bg-gray-700"
                    onClick={handleDropdownItemClick}
                  >
                    How it work
                  </Link>
                </div>
              </div>

              <Link
                to="/ Clientle"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                onClick={handleDropdownItemClick}
              >
                Clientle
              </Link>

              <Link
                to="/ Careers"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                onClick={handleDropdownItemClick}
              >
                Careers
              </Link>

              <Link
                to="/Gallery"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                onClick={handleDropdownItemClick}
              >
                Our Gallery
              </Link>

              <Link
                to="/contact-us"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                onClick={handleDropdownItemClick}
              >
                Contact us
              </Link>
            </div>
          </div>
          {/* mobile */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="ham"
              className="mr-[22px] w-[28px] h-[28px] object-contain"
              onClick={() => setToggle((prev) => !prev)}
            />
            <div
              className={`${
                toggle ? "flex" : "hidden"
              } p-6 bg-gray-300 absolute top-16 right-0 mx-4 my-2`}
            >
              <ul className="ml-10 flex items-baseline space-x-4">
                <li>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    onClick={handleDropdownItemClick}
                  >
                    Home
                  </a>
                </li>
                <li className="relative">
                  <button
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    onClick={handleAboutToggle}
                  >
                    About us
                  </button>
                  <div
                    className={`absolute z-10 top-10 right-0 bg-gray-800 py-2 rounded-md w-48 shadow-lg ${
                      isAboutOpen ? "" : "hidden"
                    }`}
                  >
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                      onClick={handleDropdownItemClick}
                    >
                      Company Profile
                    </a>
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                      onClick={handleDropdownItemClick}
                    >
                      Our Team
                    </a>
                  </div>
                </li>
                <li>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    onClick={handleDropdownItemClick}
                  >
                    Service
                  </a>
                </li>
                <li className="relative">
                  <button
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    onClick={handleRecruitmentToggle}
                  >
                    Recruitment
                  </button>
                  <div
                    className={`absolute z-10 top-10 right-0 bg-gray-800 py-2 rounded-md w-48 shadow-lg ${
                      isRecruitmentOpen ? "" : "hidden"
                    }`}
                  >
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                      onClick={handleDropdownItemClick}
                    >
                      Candidate info
                    </a>
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                      onClick={handleDropdownItemClick}
                    >
                      How it works
                    </a>
                  </div>
                </li>

                <a
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                  onClick={handleDropdownItemClick}
                >
                  Clientele
                </a>

                <a
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                  onClick={handleDropdownItemClick}
                >
                  Careers
                </a>

                <Link
                  to="/Gallery"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                  onClick={handleDropdownItemClick}
                >
                  Our Gallery
                </Link>

                <Link
                  to="/contact-us"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                  onClick={handleDropdownItemClick}
                >
                  Contact us
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
