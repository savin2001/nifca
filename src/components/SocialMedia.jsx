import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";

const FloatingSocialButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button with DaisyUI Swap */}
      <div className="swap swap-rotate">
        {/* Toggle Button */}
        <button
        //   onClick={toggleMenu}
          className="bg-primary text-white p-4 rounded-full shadow-lg focus:outline-none transition-transform transform hover:scale-110 text-xl"
        >
          {/* When Closed: Show "+" */}
          {!isOpen ? <FaFacebookF className="swap-off" /> : <span className="swap-on text-xl text-base-100">-</span>}
        </button>
      </div>

      {/* Social Links Menu */}
      {isOpen && (
        <div className="bg-base-100 shadow-lg rounded-lg p-4 mt-3 flex flex-col items-center space-y-4">
          <Link
            to="#"
            className="text-neutral hover:text-primary transition text-2xl"
          >
            <FaFacebookF />
          </Link>
          <Link
            to="#"
            className="text-neutral hover:text-primary transition text-2xl"
          >
            <FaTwitter />
          </Link>
          <Link
            to="#"
            className="text-neutral hover:text-primary transition text-2xl"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            to="#"
            className="text-neutral hover:text-primary transition text-2xl"
          >
            <FaInstagram />
          </Link>
          <Link
            to="#"
            className="text-neutral hover:text-primary transition text-2xl"
          >
            <FaWhatsapp />
          </Link>
        </div>
      )}
    </div>
  );
};

export default FloatingSocialButton;
