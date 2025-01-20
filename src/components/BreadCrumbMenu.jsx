import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const BreadCrumbMenu = () => {
  return (
    <div className="absolute w-full bg-base-100 bg-opacity-90 p-3 flex justify-start">
      <nav className="text-sm breadcrumbs">
        <ul className="flex space-x-2">
          {/* Home */}
          <li>
            <Link
              to="/"
              className="flex items-center text-primary hover:text-secondary"
            >
              <FaHome className="mr-1" />
              Home
            </Link>
          </li>
          {/* Discover the NIFC */}
          <li>
            <Link
              to="/discover-nifc"
              className="text-primary hover:text-secondary"
            >
              Discover the NIFC
            </Link>
          </li>
          {/* The NIFC */}
          <li>
            <Link to="/the-nifc" className="text-primary hover:text-secondary">
              The NIFC
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BreadCrumbMenu;
