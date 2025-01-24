import React from "react";
import { Link } from "react-router-dom"; // Import Link
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../assets/nifca-logo.png";
import VisionLogo from "../assets/Vision2030_logo.png";

const Footer = () => {
  return (
    <footer className="bg-base-100 text-neutral py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
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

          {/* Column 2: Discover NIFC */}
          <div>
            <h3 className="font-light uppercase text-lg mb-4">Discover NIFC</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/discover-nifc"
                  className="text-neutral hover:text-primary transition"
                >
                  Discover NIFC
                </Link>
              </li>
              <li>
                <Link
                  to="/frameworks"
                  className="text-neutral hover:text-primary transition"
                >
                  Framework
                </Link>
              </li>
              <li>
                <Link
                  to="/initiatives"
                  className="text-neutral hover:text-primary transition"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/partners"
                  className="text-neutral hover:text-primary transition"
                >
                  Key Partners
                </Link>
              </li>
              <li>
                <Link
                  to="/laws"
                  className="text-neutral hover:text-primary transition"
                >
                  Laws & Regulation
                </Link>
              </li>
              <li>
                <Link
                  to="/company-ledger"
                  className="text-neutral hover:text-primary transition"
                >
                  Company Ledger
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-neutral hover:text-primary transition"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Why Nairobi */}
          <div>
            <h3 className="font-light uppercase text-lg mb-4">Why Nairobi</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/why-nairobi"
                  className="text-neutral hover:text-primary transition"
                >
                  Why Choose Nairobi
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Join the NIFC */}
          <div>
            <h3 className="font-light uppercase text-lg mb-4">Join the NIFC</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/becoming-nifc-firm"
                  className="text-neutral hover:text-primary transition"
                >
                  Join the NIFC
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Media */}
          <div>
            <h3 className="font-light uppercase text-lg mb-4">Media</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/media"
                  className="text-neutral hover:text-primary transition"
                >
                  News & Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 6: Contact Information */}
          <div>
            <h3 className="font-light uppercase text-lg mb-4">Contact Us</h3>
            <p className="text-sm">
              <strong>Address:</strong> Treasury Building, Harambee Avenue,
              Nairobi, Kenya
            </p>
            <p className="text-sm mt-2">
              <strong>Email:</strong> info@nifca.go.ke
            </p>
            <p className="text-sm mt-2">
              <strong>Phone:</strong> +254 793 000 555
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
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
                <FaXTwitter />
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
              <Link
                to="#"
                className="text-neutral hover:text-primary transition text-2xl"
              >
                <FaYoutube />
              </Link>
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
