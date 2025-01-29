import React from "react";
import BreadCrumbMenu from "../components/BreadCrumbMenu";
import { Link } from "react-router-dom";

const FinancialGateway = () => {
  const breadcrumbLinks = [
    { to: "/why-nairobi", label: "Why Choose Nairobi" },
    { to: "#", label: "Global Financial Gateway" },
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
                  Global Financial Gateway
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
          The Kenyan economy is the largest in East Africa; a main point of
          entry to the larger 300-million East Africa Market and the regional
          transportation and financial hub.
        </p>
        <br />

        <p className="text-neutral text-lg font-light">
          With an annual growth rate of over 5% between 2010 and 2024, Kenya is
          one of the fastest-growing economies in Africa. This continued growth
          in GDP has been supported by ongoing public infrastructure projects,
          strong public and private sector investment, and appropriate economic
          and fiscal policies, reflecting the broad-based and diversified nature
          of the Kenyan economy.
        </p>
        <br />

        <p className="text-neutral text-lg font-light">
          This sustained growth has positioned the country as a great place to
          do business—moving it up to 56th place out of 190 economies in the
          World Bank’s 2020 Ease of Doing Business survey, up from 61st in 2019
          and 80 in 2018.
        </p>
        <br />

        <p className="text-neutral text-lg font-light">
          Kenya has been steadily recovering from the Covid-19 pandemic and has
          seen its Foreign Direct Investment (FDI) rates increasing steadily. In
          2022, FDI inflows increased by close to 64%, reaching $759 million and
          steadily increasing.
        </p>
        <br />

        <p className="text-neutral text-lg font-light">
          Kenya’s financial sector is amongst the most vibrant, well-developed,
          and diversified in the region and has the highest financial inclusion
          in the region and globally.
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

export default FinancialGateway;
