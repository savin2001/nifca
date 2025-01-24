import React from "react";
import BreadCrumbMenu from "../components/BreadCrumbMenu";
import { Link } from "react-router-dom";

const NIFCTechAccelerator = () => {
  const breadcrumbLinks = [
    { to: "/becoming-nifc-firm", label: "Join the NIFC" },
    { to: "#", label: "NIFC Tech Accelerator" },
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
                  NIFC Tech Accelerator
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
          The NIFC Tech Accelerator is a dynamic platform designed to support and accelerate the growth of innovative tech startups. By providing access to funding, mentoring, and resources, we empower entrepreneurs to take their groundbreaking ideas from concept to commercialization.
        </p>
        <br />
        <p className="text-neutral">
          As Nairobi continues to emerge as a leading tech hub in Africa, the NIFC Tech Accelerator plays a critical role in shaping the region’s future. We focus on high-potential startups that are poised to drive change in industries such as fintech, healthtech, edtech, and agritech. Our tailored programs help startups scale quickly, connect with investors, and expand globally.
        </p>
        <br />
        <p className="text-neutral">
          Join our accelerator program and gain the competitive edge you need to thrive in the fast-evolving global tech landscape. Together, let’s shape the future of innovation.
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

export default NIFCTechAccelerator;
