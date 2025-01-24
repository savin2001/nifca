import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/nifca-color.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-200 fixed z-50">
      {/* Navbar Container */}
      <div className="w-11/12 mx-auto">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <Link to="/about">What is NIFC</Link>
              </li>
              <li>
                <Link to="/frameworks">Framework</Link>
              </li>
              <li>
                <Link to="/our-team">Our Team</Link>
              </li>
              <li>
                <Link to="/partners">Key Partners</Link>
              </li>
              <li>
                <Link to="/laws">Laws & Regulation</Link>
              </li>
              <li>
                <Link to="/company-ledger">Company Ledger</Link>
              </li>
            </ul>
          </div>
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 btn btn-ghost text-neutral text-sm font-medium uppercase"
          >
            <img
              src={Logo}
              alt="NIFC Logo"
              className="h-16 w-16 object-contain"
            />
            <span className="text-left hidden lg:block">
              Nairobi International <br />
              Financial Centre
            </span>
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* Dropdown Menu */}
            <li className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="btn btn-ghost">
                Discover NIFC
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <Link to="/discover-nifc">What is NIFC</Link>
                </li>
                <li>
                  <Link to="/frameworks">Framework</Link>
                </li>
                <li>
                  <Link to="/our-team">Our Team</Link>
                </li>
                <li>
                  <Link to="/partners">Key Partners</Link>
                </li>
                <li>
                  <Link to="/laws">Laws & Regulation</Link>
                </li>
                <li>
                  <Link to="/company-ledger">Company Ledger</Link>
                </li>
                <li>
                  <Link to="/careers">Careers</Link>
                </li>
              </ul>
            </li>

            {/* Regular Menu Items */}
            <li className="btn btn-ghost">
              <Link to="/why-nairobi">Why Choose Nairobi</Link>
            </li>
            <li className="btn btn-ghost">
              <Link to="/becoming-nifc-firm">Join the NIFC</Link>
            </li>
            <li className="btn btn-ghost">
              <Link to="/media">News & Media</Link>
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
          <Link
            to="#"
            className="btn btn-primary btn-sm uppercase font-light rounded-none"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
