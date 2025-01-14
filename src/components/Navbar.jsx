// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-200 shadow-md px-6">
      <div className="navbar-start">
        {/* Logo */}
        <a className="flex items-center space-x-2">
          <img
            src="/path-to-your-logo.png" // Replace with the actual path to your logo
            alt="NIFC Logo"
            className="w-10 h-10"
          />
          <span className="text-lg font-bold text-neutral">
            NAIROBI INTERNATIONAL <br /> FINANCIAL CENTRE
          </span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        {/* Center Navigation Links */}
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li>
            <a href="#about" className="text-neutral hover:underline">
              ABOUT THE NIFC
            </a>
          </li>
          <li>
            <a href="#why-nairobi" className="text-neutral hover:underline">
              WHY NAIROBI
            </a>
          </li>
          <li>
            <a href="#becoming-nifc" className="text-neutral hover:underline">
              BECOMING A NIFC FIRM
            </a>
          </li>
          <li>
            <a href="#media" className="text-neutral hover:underline">
              MEDIA
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        {/* Search Icon */}
        <button className="btn btn-ghost btn-square text-neutral">
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
              d="M11 19a8 8 0 100-16 8 8 0 000 16zm8-8l-3-3"
            />
          </svg>
        </button>
        {/* Start Application Button */}
        <a
          href="#start-application"
          className="btn btn-neutral text-white px-6 py-2"
        >
          START APPLICATION
        </a>
      </div>
    </div>
  );
};

export default Navbar;
