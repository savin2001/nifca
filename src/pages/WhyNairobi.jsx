import React from "react";
import BreadCrumbMenu from "../components/BreadCrumbMenu";
import { Link } from "react-router-dom";

const WhyNairobi = () => {
  // Define breadcrumb links
  const breadcrumbLinks = [{ to: "/why-nairobi", label: "Why Choose Nairobi" }];

  // Define sub-pages for navigation
  const subPages = [
    {
      to: "/global-financial-gateway",
      label: "Global Financial Gateway",
      description:
        "The Kenyan economy is the largest in East Africa; a main point of entry to the larger - 300 million East Africa Market and the regional transportation and financial hub . ",
    },
    {
      to: "/strength-in-financial-services",
      label: "Strength in Financial Services",
      description:
        "Nairobi has one of the most sophisticated and innovative financial services sectors in Africa. It is home to 14 foreign banks, 30 local banks and 66 listed companies.",
    },
    {
      to: "/sustainability",
      label: "Sustainability",
      description:
        "Cutting edge financial solutions will tackle the threat of climate change and Kenya is leading the way on the continent. Kenya’s first green bond began trading on the Nairobi Securities Exchange... ",
    },
    {
      to: "/tourism",
      label: "Tourism",
      description:
        "Kenya is one of the world’s premier tourism destinations, offering diverse experiences from stunning beaches and blue waters to expansive savannahs and the majestic peaks of Mount Kenya.",
    },
    {
      to: "/lifestyle-nightlife",
      label: "Lifestyle & Nightlife",
      description:
        "State of the art medical facilities, top tier education, world class business facilities and a diverse arts scene sets Nairobi apart. The city is affordable, vibrant and the only city in the world to have a national park within its boundaries. ",
    },
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
                  Why Nairobi
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pass breadcrumb links as a prop */}
      <BreadCrumbMenu links={breadcrumbLinks} />
      <div className="max-w-screen-lg mx-auto text-center text-2xl font-light flex flex-col mt-20">
        <p className="text-neutral">
          Nairobi, often referred to as the "Green City in the Sun," is more
          than just Kenya’s capital. It is a dynamic hub for business,
          innovation, and culture, making it one of Africa’s most attractive
          destinations for investment and growth.
        </p>
      </div>

      {/* Sub-pages for navigation */}
      <div className="max-w-screen-lg mx-auto text-left flex flex-col mt-20">
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-light mb-6 uppercase text-primary">
            Explore Nairobi's Key Strengths
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {subPages.map((page) => (
              <div
                key={page.to}
                className="card bg-base-100 p-6 hover:shadow-lg transition duration-300 w-full"
              >
                <h3 className="text-lg font-semibold text-center mb-4 uppercase">
                  {page.label}
                </h3>
                <div className="flex items-center">
                  {/* Image on the left */}
                  <div className="w-1/3 pr-4">
                    <img
                      src="https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D"
                      alt="Nairobi"
                      className="w-full h-full object-cover rounded-none"
                    />
                  </div>
                  {/* Text and button on the right */}
                  <div className="w-2/3 flex flex-col justify-between text-left">
                    <p className="text-neutral text-xl font-light mb-4">
                      {page.description}
                    </p>
                    <Link
                      to={page.to}
                      className="btn btn-outline btn-sm btn-primary capitalize self-start"
                    >
                      Explore ❯
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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

export default WhyNairobi;
