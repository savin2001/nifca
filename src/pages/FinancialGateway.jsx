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
          Nairobi has established itself as a critical gateway to global financial markets, connecting Africa to the rest of the world. Its strategic geographic location allows businesses to bridge time zones between Europe, Asia, and the Americas. This unique advantage makes it a prime location for multinational corporations looking to establish regional headquarters, ensuring seamless operations and market accessibility. Nairobi is also home to a robust financial infrastructure, hosting major international banks, investment firms, and fintech startups.
        </p>
        <br />

        <p className="text-neutral">
          The city’s well-developed transport and communication networks further enhance its appeal as a global financial hub. Jomo Kenyatta International Airport, one of Africa’s busiest, provides direct flights to major cities worldwide, making business travel convenient. Additionally, Nairobi's government policies and international trade agreements have fostered a supportive environment for financial growth, attracting foreign direct investment and catalyzing sustainable economic development.
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

export default FinancialGateway;
