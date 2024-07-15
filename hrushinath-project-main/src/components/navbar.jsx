import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BiMessageError } from "react-icons/bi";
import { FaChevronDown } from 'react-icons/fa';
import Sidebar from "./sidebar";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-white p-4 flex flex-col md:flex-row items-center justify-between w-full">
      <div className="flex items-center w-full relative mb-4 md:mb-0">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <FaSearch className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search by deal name or ID"
          className="w-full md:w-4/5 p-2 pl-10 border border-gray-400 focus:outline-none"
        />
      </div>
      <div className="flex justify-between items-center w-full md:w-1/5">
        <button className="relative bg-gray-700 hover:bg-gray-800 duration-300 py-2 px-4 text-blue-100 rounded">
          <BiMessageError />
          <span className="absolute bg-[#ffd8c7] text-red-400 px-1 text-xs font-bold rounded-md -top-3 -right-3">
            <i>NEW</i>
          </span>
        </button>
        <div className="relative inline-block text-left">
          <button
            id="dropdownUserAvatarButton"
            onClick={toggleDropdown}
            className="flex text-sm p-1 rounded-full md:me-0 focus:ring-2 focus:ring-gray-300"
            type="button"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-10 h-10 rounded-full"
              src="https://www.gravatar.com/avatar/?d=identicon"
              alt="user photo"
            />
            <div className="flex flex-col px-4 text-left">
              <span className="text-black text-base">User Name</span>
              <span className="text-gray-700 text-sm">Org Name</span>
            </div>
            <FaChevronDown className="text-black ml-2 mt-4" />
          </button>

          {/* Dropdown menu */}
          {dropdownOpen && (
            <div
              id="dropdownAvatar"
              className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute right-0 mt-2"
            >
              <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div>Bonnie Green</div>
                <div className="font-medium truncate">name@flowbite.com</div>
              </div>
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownUserAvatarButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
              </ul>
              <div className="py-2">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
