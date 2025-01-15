// src/components/Navbar.jsx
import React from "react";
import Logo from "../assets/nifca-logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-200 justify-center items-center">
      <div className="w-11/12">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            {/* Mobile menu button */}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              aria-label="Mobile Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {/* Mobile dropdown menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2"
            >
              <li className="uppercase font-light">
                <a href="/about">About the NIFC</a>
              </li>
              <li className="uppercase font-light">
                <a href="/why-nairobi">Why Nairobi</a>
              </li>
              <li className="uppercase font-light">
                <a href="/becoming-nifc-firm">Becoming a NIFC Firm</a>
              </li>
              <li className="uppercase font-light">
                <a href="/media">Media</a>
              </li>
            </ul>
          </div>
          {/* Brand Logo */}
          <a
            href="/"
            className="flex items-center gap-2 btn btn-ghost btn-lg text-neutral text-sm font-medium uppercase"
          >
            <img
              src={Logo}
              alt="NIFC Logo"
              className="h-16 w-16 object-contain"
            />
            <span className="text-left">
              Nairobi International <br />
              Financial Centre
            </span>
          </a>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="uppercase font-light">
              <a href="/about">About the NIFC</a>
            </li>
            <li className="uppercase font-light">
              <a href="/why-nairobi">Why Nairobi</a>
            </li>
            <li className="uppercase font-light">
              <a href="/becoming-nifc-firm">Becoming a NIFC Firm</a>
            </li>
            <li className="uppercase font-light">
              <a href="/media">Media</a>
            </li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <a
            href="/apply"
            className="btn btn-neutral btn-sm uppercase font-light rounded-none"
          >
            Start Application
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
