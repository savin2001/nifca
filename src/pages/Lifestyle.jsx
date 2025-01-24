import React from "react";
import BreadCrumbMenu from "../components/BreadCrumbMenu";
import { Link } from "react-router-dom";

const Lifestyle = () => {
  const breadcrumbLinks = [
    { to: "/why-nairobi", label: "Why Choose Nairobi" },
    { to: "#", label: "Lifestyle" },
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
                Lifestyle & Nightlife
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
        Nairobi’s lifestyle offers a dynamic mix of culture, entertainment, and leisure activities for its residents and visitors. The city is a melting pot of diverse cuisines, ranging from local delicacies to international flavors served at top-tier restaurants. For art enthusiasts, Nairobi’s burgeoning creative scene includes art exhibitions, live music events, and cultural festivals that celebrate Kenya’s rich heritage.
        </p>
        <br />

        <p className="text-neutral">
        When the sun sets, Nairobi’s vibrant nightlife comes alive with an array of options to suit every taste. Trendy bars, clubs, and lounges provide venues for unwinding and socializing, while live music performances and cultural shows offer unique entertainment experiences. Whether you’re seeking adventure, relaxation, or a blend of both, Nairobi’s lifestyle and nightlife scene has something to offer everyone.
        </p>
        <br />

        
      </div>

      {/* Section 3 */}
      <div className="mt-12 flex flex-col justify-center items-center font-light">
        <div className="bg-base-300 w-full  p-12 flex justify-between space-x-8">
          <button className="capitalize flex-grow btn btn-ghost btn-lg text-3xl font-light">
            Start application ❯
          </button>
          <Link to="/contact" className="capitalize flex-grow btn btn-ghost  btn-lg text-3xl font-light">
            Make an enquiry ❯
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lifestyle;
