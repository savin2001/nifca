// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link
import Logo from "../assets/nifca-logo.png";
import VisionLogo from "../assets/Vision2030_logo.png";
import SocialMedia from "./SocialMedia";


const Footer = () => {
  return (
    <footer className="bg-base-100 text-neutral py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Column 1: Logo */}
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <img src={Logo} alt="NIFC Logo" className="w-20" />
              <span className="uppercase text-sm font-normal">
                Nairobi International <br /> Financial Centre
              </span>
            </div>
            <img src={VisionLogo} alt="Vision Logo" className="w-48" />
          </div>

          {/* Column 2: About the NIFC */}
          <div>
            <h3 className="font-light uppercase text-lg mb-4">
              About the NIFC
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-neutral hover:text-primary transition"
                >
                  The NIFC
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral hover:text-primary transition"
                >
                  Leadership
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral hover:text-primary transition"
                >
                  Laws
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral hover:text-primary transition"
                >
                  Public Register
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Why Nairobi */}
          <div>
            <h3 className="font-light uppercase text-lg mb-4">Why Nairobi</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-neutral hover:text-primary transition"
                >
                  Target Sectors
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral hover:text-primary transition"
                >
                  Starting a Business
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral hover:text-primary transition"
                >
                  Application Process
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral hover:text-primary transition"
                >
                  Operating in the NIFC
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Media */}
          <div>
            <h3 className="font-light uppercase text-lg mb-4">Media</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-neutral hover:text-primary transition"
                >
                  Press Releases
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral hover:text-primary transition"
                >
                  Media Kit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral hover:text-primary transition"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral hover:text-primary transition"
                >
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Information */}
          <div>
            <h3 className="font-light uppercase text-lg mb-4">Contact Us</h3>
            <p className="text-sm">
              <strong>Address:</strong> Treasury Building, Harambee Avenue,
              Nairobi, Kenya
            </p>
            <p className="text-sm mt-2">
              <strong>Email:</strong> info@nifc.ke
            </p>
            <p className="text-sm mt-2">
              <strong>Phone:</strong> +254 792 000 555
            </p>
          </div>
        </div>

        <SocialMedia/>

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
