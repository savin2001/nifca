import React from "react";
import BreadCrumbMenu from "../components/BreadCrumbMenu";
import { Link } from "react-router-dom";

const SDGPipelineBuilder = () => {
  const breadcrumbLinks = [
    { to: "/becoming-nifc-firm", label: "Join the NIFC" },
    { to: "#", label: "SDG Pipeline Builder" },
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
                  SDG Pipeline Builder
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
          The SDG Pipeline Builder is a transformative platform designed to align your business initiatives with the United Nations Sustainable Development Goals (SDGs). Through innovative tools and expert guidance, we help businesses identify, develop, and scale projects that contribute to sustainable economic, social, and environmental outcomes.
        </p>
        <br />
        <p className="text-neutral">
          Whether you are looking to invest in impactful projects or seeking to showcase your business's commitment to sustainability, the SDG Pipeline Builder offers a comprehensive framework to support your objectives. By connecting businesses, investors, and stakeholders, we foster collaboration and create actionable pathways toward achieving the SDGs.
        </p>
        <br />
        <p className="text-neutral">
          Nairobi's position as a global financial hub makes it the ideal base for driving sustainable development initiatives. Together, let’s build a future where profitability and purpose go hand in hand.
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

export default SDGPipelineBuilder;
