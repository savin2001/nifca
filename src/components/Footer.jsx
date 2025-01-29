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
            <h3 className="font-light uppercase text-lg mb-4 text-primary">Discover NIFC</h3>
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
            <h3 className="font-light uppercase text-lg mb-4 text-primary">
              Why Choose Nairobi
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/why-nairobi"
                  className="text-neutral hover:text-primary transition"
                >
                  Why Nairobi
                </Link>
              </li>
              <li>
                <Link
                  to="/global-financial-gateway"
                  className="text-neutral hover:text-primary transition"
                >
                  Global Financial Gateway
                </Link>
              </li>
              <li>
                <Link
                  to="/strength-in-financial-services"
                  className="text-neutral hover:text-primary transition"
                >
                  Strength in Financial Services
                </Link>
              </li>
              <li>
                <Link
                  to="/sustainability"
                  className="text-neutral hover:text-primary transition"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link
                  to="/tourism"
                  className="text-neutral hover:text-primary transition"
                >
                  Tourism
                </Link>
              </li>
              <li>
                <Link
                  to="/lifestyle-nightlife"
                  className="text-neutral hover:text-primary transition"
                >
                  Lifestyle
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Join the NIFC */}
          <div>
            <h3 className="font-light uppercase text-lg mb-4 text-primary">Join the NIFC</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/start-application"
                  className="text-neutral hover:text-primary transition"
                >
                  Start Your Application
                </Link>
              </li>
              <li>
                <Link
                  to="/one-stop-shop"
                  className="text-neutral hover:text-primary transition"
                >
                  NIFC One-Stop Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/immigration-support"
                  className="text-neutral hover:text-primary transition"
                >
                  Apply for Immigration Support Services
                </Link>
              </li>
              <li>
                <Link
                  to="/business-support"
                  className="text-neutral hover:text-primary transition"
                >
                  Apply for Business Support Services
                </Link>
              </li>
              <li>
                <Link
                  to="/sdg-pipeline-builder"
                  className="text-neutral hover:text-primary transition"
                >
                  The SDG Pipeline Builder
                </Link>
              </li>
              <li>
                <Link
                  to="/tech-accelerator"
                  className="text-neutral hover:text-primary transition"
                >
                  NIFC Tech Accelerator
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Media */}
          <div>
            <h3 className="font-light uppercase text-lg mb-4 text-primary">Media</h3>
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
            <h3 className="font-light uppercase text-lg mb-4 text-primary">Contact Us</h3>
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
                to="https://x.com/nifcafrica?lang=en"
                className="text-neutral hover:text-primary transition text-2xl"
              >
                <FaXTwitter />
              </Link>
              <Link
                to="https://ke.linkedin.com/company/nifcafrica"
                className="text-neutral hover:text-primary transition text-2xl"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                to="https://www.facebook.com/nifc.africa"
                className="text-neutral hover:text-primary transition text-2xl"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="https://www.youtube.com/channel/UCXpik-7bVhWUf848ygpggDw"
                className="text-neutral hover:text-primary transition text-2xl"
              >
                <FaYoutube />
              </Link>
              <Link
                to="https://instagram.com/nifcafrica/"
                className="text-neutral hover:text-primary transition text-2xl"
              >
                <FaInstagram />
              </Link>
              <Link
                to="https://wa.me/+254793000555"
                className="text-neutral hover:text-primary transition text-2xl"
              >
                <FaWhatsapp />
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
