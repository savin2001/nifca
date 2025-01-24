import React from "react";
import BreadCrumbMenu from "../components/BreadCrumbMenu";

const WhyNairobi = () => {
  // Define breadcrumb links
  const breadcrumbLinks = [{ to: "/why-nairobi", label: "Why Choose Nairobi" }];

  // Define sub-pages for navigation
  const subPages = [
    { to: "/global-financial-gateway", label: "Global Financial Gateway" },
    {
      to: "/strength-in-financial-services",
      label: "Strength in Financial Services",
    },
    { to: "/sustainability", label: "Sustainability" },
    { to: "/tourism", label: "Tourism" },
    { to: "/lifestyle-nightlife", label: "Lifestyle & Nightlife" },
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
                      src="https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D" // You can replace this with your actual image
                      alt="Nairobi"
                      className="w-full h-full object-cover rounded-none"
                    />
                  </div>
                  {/* Text and button on the right */}

                  <div className="w-2/3 flex flex-col justify-between text-left">
                    <p className="text-neutral text-xl font-light mb-4">
                      This is where you can put the first paragraph about the
                      sub-page topic. It's concise and informative.
                    </p>
                    <p className="text-neutral text-sm mb-4">
                      Here’s a second paragraph with more details or a
                      continuation of the topic. You can provide further
                      insights.
                    </p>
                    <button className="btn btn-outline btn-sm btn-primary capitalize self-start">
                      Explore ❯
                    </button>
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
          <button className="capitalize flex-grow btn btn-ghost btn-lg text-3xl font-light">
            Start application ❯
          </button>
          <button className="capitalize flex-grow btn btn-ghost btn-lg text-3xl font-light">
            Make an enquiry ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyNairobi;
