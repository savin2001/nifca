import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BreadCrumbMenu = ({ links }) => {
  return (
    <div className="absolute w-full bg-base-100 bg-opacity-90 p-3 flex justify-start">
      <nav className="text-sm breadcrumbs">
        <ul className="flex space-x-2">
          {/* Home Link */}
          <li>
            <Link
              to="/"
              className="flex items-center text-primary hover:text-secondary"
            >
              <FaHome className="mr-1" />
            </Link>
          </li>

          {/* Dynamic Links */}
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                className="text-primary hover:text-secondary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

// PropTypes validation
BreadCrumbMenu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BreadCrumbMenu;
