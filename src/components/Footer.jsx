// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-100 text-neutral py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2">
              <img
                src="/path-to-your-logo.png" // Replace with the actual logo path
                alt="NIFC Logo"
                className="w-12 h-12"
              />
              <span className="text-xl font-bold">
                Nairobi International <br /> Financial Centre
              </span>
            </div>
            <p className="mt-4 text-sm">
              The Nairobi International Financial Centre (NIFC) is a business
              and financial services hub facilitating investment into Africa and
              beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-neutral hover:text-primary transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-neutral hover:text-primary transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#partners"
                  className="text-neutral hover:text-primary transition"
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-neutral hover:text-primary transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p className="text-sm">
              <strong>Address:</strong> NIFC Towers, Nairobi, Kenya
            </p>
            <p className="text-sm mt-2">
              <strong>Email:</strong> info@nifc.co.ke
            </p>
            <p className="text-sm mt-2">
              <strong>Phone:</strong> +254 700 000 000
            </p>
            <div className="mt-4 space-x-4">
              <a
                href="#"
                className="text-neutral hover:text-primary transition text-2xl"
              >
                {/* Social Media Icons */}
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#"
                className="text-neutral hover:text-primary transition text-2xl"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-neutral hover:text-primary transition text-2xl"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm border-t border-gray-600 pt-4">
          © {new Date().getFullYear()} Nairobi International Financial Centre.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
