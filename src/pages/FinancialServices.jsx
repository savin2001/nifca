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
        Nairobi’s financial services sector is one of the most advanced in Africa, boasting a wide array of offerings ranging from banking and insurance to capital markets and fintech innovation. The Nairobi Securities Exchange (NSE) is among the continent's most vibrant stock markets, playing a pivotal role in mobilizing capital for businesses and investors. The city is a pioneer in mobile banking, with services like M-Pesa revolutionizing financial inclusion and accessibility.
        </p>
        <br />

        <p className="text-neutral">
        Kenya’s regulatory framework supports innovation while ensuring stability in the financial sector. This balance has made Nairobi an attractive destination for investors and financial institutions seeking a robust and secure operating environment. Coupled with a skilled workforce and a culture of innovation, the city continues to thrive as a center for financial excellence in Africa.
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

export default FinancialServices;
