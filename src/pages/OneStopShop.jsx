import React from "react";
import BreadCrumbMenu from "../components/BreadCrumbMenu";
import { Link } from "react-router-dom";

const NIFCOneStopShop = () => {
  const breadcrumbLinks = [
    { to: "/becoming-nifc-firm", label: "Join the NIFC" },
    { to: "#", label: "NIFC One Stop Shop" },
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
                  NIFC One Stop Shop
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
          The NIFC One Stop Shop is your dedicated partner for seamless
          business operations. Designed to simplify the process of establishing
          and managing your business in Nairobi, our One Stop Shop provides
          comprehensive support to meet your needs.
        </p>
        <br />
        <p className="text-neutral">
          From company registration and licensing to tax advisory and regulatory
          compliance, our team of experts ensures that you have all the
          resources and guidance necessary to operate successfully. With a
          client-centric approach, we are committed to minimizing bureaucratic
          hurdles, saving you time and effort so that you can focus on scaling
          your business.
        </p>
        <br />
        <p className="text-neutral">
          Leverage the benefits of Nairobi’s strategic position as a global
          financial hub while enjoying the convenience of a centralized support
          system tailored to your business goals.
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

export default NIFCOneStopShop;
