import React from "react";
import BreadCrumbMenu from "../components/BreadCrumbMenu";
import { Link } from "react-router-dom";

const BusinessSupport = () => {
  const breadcrumbLinks = [
    { to: "/becoming-nifc-firm", label: "Join the NIFC" },
    { to: "#", label: "Business Support" },
  ];

  return (
    <div className="relative">
      {/* Hero Carousel */}
      <div className="carousel w-full h-1/2">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <div
            className="hero h-[50vh]"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div>
                <h1 className="mb-5 text-5xl font-light uppercase">
                  Business Support
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pass breadcrumb links as a prop */}
      <BreadCrumbMenu links={breadcrumbLinks} />
      <div className="max-w-screen-lg mx-auto text-left flex flex-col mt-20">
        <p className="text-neutral text-lg font-light">
          Nairobi offers a dynamic and thriving business environment, and we are here to help you make the most of it. Our Business Support services are tailored to provide comprehensive assistance at every stage of your journey, ensuring your business operates efficiently and effectively.
        </p>
        <br />
        <p className="text-neutral">
          From advisory on market entry strategies to connecting you with local service providers and stakeholders, our team is dedicated to facilitating your success. We also offer guidance on regulatory compliance, operational setup, and access to key resources to help you navigate the local business landscape with ease.
        </p>
        <br />
        <p className="text-neutral">
          By choosing Nairobi as your business hub, you gain access to a network of professionals, infrastructure, and opportunities that foster growth and innovation. Let us be your trusted partner in unlocking the full potential of your business.
        </p>
      </div>

      {/* Section 3 */}
      <div className="mt-12 flex flex-col justify-center items-center font-light">
        <div className="bg-base-300 w-full p-12 flex justify-between space-x-8">
          <Link
            to="/start-application"
            className="capitalize flex-grow btn btn-ghost btn-lg text-3xl font-light"
          >
            Start application ❯
          </Link>
          <Link
            to="/contact"
            className="capitalize flex-grow btn btn-ghost btn-lg text-3xl font-light"
          >
            Make an enquiry ❯
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessSupport;
