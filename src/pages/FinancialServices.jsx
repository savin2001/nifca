import React from "react";
import BreadCrumbMenu from "../components/BreadCrumbMenu";
import { Link } from "react-router-dom";

const FinancialServices = () => {
  const breadcrumbLinks = [
    { to: "/why-nairobi", label: "Why Choose Nairobi" },
    { to: "#", label: "Strength in Financial Services" },
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
                  Strength in Financial Services
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
          Nairobi has one of the most sophisticated and innovative financial
          services sectors in Africa. It is home to 14 foreign banks, 30 local
          banks, and 66 listed companies.
        </p>
        <br />

        <p className="text-neutral text-lg font-light">
          Kenya plays a pivotal role in the Sub-Saharan market due to an
          exciting financial ecosystem that is being fostered within its
          borders. Its young population and dynamic private sector have led to
          significant growth in the country’s technological infrastructure. 90%
          of the population is banked, with the country striving for 100% by
          2030.
        </p>
        <br />

        <p className="text-neutral text-lg font-light">
          Kenya has been one of the most prominent locations for private equity
          and venture capital investments, garnering in excess of $2 billion USD
          from private equity firms and in excess of $700 million USD from
          venture capital firms between 2016 and 2020. This places Kenya as the
          most popular investment destination in the Sub-Saharan region,
          accounting for 15% of private equity flows and 20% of venture capital
          flows. It is home to approximately 50% of the 18 firms operating in
          Africa with over $500 million USD in assets under management.
        </p>
        <br />

        <p className="text-neutral text-lg font-light">
          Despite the complications of the Covid-19 pandemic having a
          destabilizing impact on Kenya’s economy, it rebounded at a rate of
          10.1% year-on-year in the second quarter of 2021 as country-wide
          lockdown restrictions were eased. This was the strongest pace of
          expansion ever recorded in the country’s history. Kenya’s financial
          and insurance markets followed this trend with a 9.9% growth rate in
          the same period—a stark increase on the 4.4% of the previous year.
        </p>
      </div>

      {/* Section 3 */}
      <div className="mt-12 flex flex-col justify-center items-center font-light">
        <div className="bg-base-300 w-full  p-12 flex justify-between space-x-8">
          <Link
            to="/start-application"
            className="capitalize flex-grow btn btn-ghost btn-lg text-3xl font-light"
          >
            Start application ❯
          </Link>
          <Link
            to="/contact"
            className="capitalize flex-grow btn btn-ghost  btn-lg text-3xl font-light"
          >
            Make an enquiry ❯
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FinancialServices;
