import React from "react";
import BreadCrumbMenu from "../components/BreadCrumbMenu";
import { Link } from "react-router-dom";

const ImmigrationSupport = () => {
  const breadcrumbLinks = [
    { to: "/becoming-nifc-firm", label: "Join the NIFC" },
    { to: "#", label: "Immigration Support" },
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
                  Immigration Support
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
          Setting up operations in a new country can be daunting, especially
          when it involves navigating immigration and visa requirements. Our
          Immigration Support services are designed to simplify the process for
          you and your team, ensuring a seamless transition to Nairobi.
        </p>
        <br />
        <p className="text-neutral">
          From work permits to residency applications, our experienced team
          provides end-to-end assistance, guiding you through the necessary
          procedures and documentation. With close ties to relevant government
          agencies, we help you avoid delays and ensure compliance with
          immigration policies.
        </p>
        <br />
        <p className="text-neutral">
          Whether you’re relocating as an individual professional or bringing a
          team of experts, our tailored support ensures a smooth and efficient
          process, allowing you to focus on achieving your business goals.
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

export default ImmigrationSupport;
