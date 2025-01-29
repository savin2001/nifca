import React from "react";
import BreadCrumbMenu from "../components/BreadCrumbMenu";
import { Link } from "react-router-dom";
import BRS from "../assets/partners/BRS.jpeg"
import IRA from "../assets/partners/insurance.jpeg"
import CBK from "../assets/partners/CBK.jpeg"
import CMA from "../assets/partners/CMA.jpeg"
import Immigration from "../assets/partners/Immigration.jpeg"
import KRA from "../assets/partners/KRA.jpeg"
import UNDP from "../assets/partners/UNDP.jpeg"
import FC4S from "../assets/partners/FC4S.jpeg"
import Treasury from "../assets/partners/Treasury.jpeg"
import CityUK from "../assets/partners/CityUK.jpeg"
import KAM from "../assets/partners/KAM.jpeg"
import NSE from "../assets/partners/NSE.jpeg"
import RBA from "../assets/partners/RBA.jpg"
import FCDO from "../assets/partners/FCDO.png"
// import BRS from "../assets/partners/BRS.jpeg"
// import BRS from "../assets/partners/BRS.jpeg"

const KeyPartners = () => {
  // Define breadcrumb links
  const breadcrumbLinks = [
    { to: "/discover-nifc", label: "Discover the NIFC" },
    { to: "#", label: "Key Partners" },
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
                "url(https://images.unsplash.com/photo-1556761175-4b46a572b786?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBhcnRuZXJzaGlwfGVufDB8fDB8fHww)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div>
                <h1 className="mb-5 text-5xl font-light uppercase">
                  Key Partners
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pass breadcrumb links as a prop */}
      <BreadCrumbMenu links={breadcrumbLinks} />

      {/* Description */}
      <div className="max-w-screen-lg mx-auto text-left flex flex-col my-20">
        <h2 className="text-center mb-8 font-light text-2xl">
          Collaborating with our trusted partners to drive innovation, growth,
          and success within the Nairobi International Financial Centre.
        </h2>
      </div>

      {/* Partners Section */}
      <div className="max-w-screen-lg mx-auto text-left flex flex-col">
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-center mb-8 uppercase text-primary text-3xl">
            Key Partners
          </h2>
          <div className="w-full p-6 bg-base-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Partner 1 */}
              <div className="card bg-base-100 hover:shadow-md rounded-none p-6 hover:bg-base-200 transition duration-300">
                <img
                  src={IRA}
                  alt="Partner 1"
                  className="w-full h-fit object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2 text-center ">
                  Insurance Regulatory Authority
                </h3>
              </div>

              {/* Partner 2 */}
              <div className="card bg-base-100 hover:shadow-md rounded-none p-6 hover:bg-base-200 transition duration-300">
                <img
                  src={RBA}
                  alt="Partner 2"
                  className="w-full h-fit object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2 text-center ">
                  Retirement Benefits Authority
                </h3>
              </div>

              {/* Partner 3 */}
              <div className="card bg-base-100 hover:shadow-md rounded-none p-6 hover:bg-base-200 transition duration-300">
                <img
                  src={CBK}
                  alt="Partner 3"
                  className="w-full h-fit object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2 text-center ">
                  Central Bank of Kenya
                </h3>
              </div>

              {/* Partner 4 */}
              <div className="card bg-base-100 hover:shadow-md rounded-none p-6 hover:bg-base-200 transition duration-300">
                <img
                  src={CMA}
                  alt="Partner 4"
                  className="w-full h-fit object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2 text-center ">
                  Capital Markets Authority
                </h3>
              </div>

              {/* Partner 5 */}
              <div className="card bg-base-100 hover:shadow-md rounded-none p-6 hover:bg-base-200 transition duration-300">
                <img
                  src={Immigration}
                  alt="Partner 5"
                  className="w-full h-fit object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2 text-center ">
                  Directorate for Immigration Services
                </h3>
              </div>

              {/* Partner 6 */}
              <div className="card bg-base-100 hover:shadow-md rounded-none p-6 hover:bg-base-200 transition duration-300">
                <img
                  src={KRA}
                  alt="Partner 6"
                  className="w-full h-fit object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2 text-center ">
                  Kenya Revenue Authority
                </h3>
              </div>

              {/* Partner 7 */}
              <div className="card bg-base-100 hover:shadow-md rounded-none p-6 hover:bg-base-200 transition duration-300">
                <img
                  src={BRS}
                  alt="Partner 7"
                  className="w-full h-fit object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2 text-center ">
                  Business Registration Service
                </h3>
              </div>

              {/* Partner 8 */}
              <div className="card bg-base-100 hover:shadow-md rounded-none p-6 hover:bg-base-200 transition duration-300">
                <img
                  src={UNDP}
                  alt="Partner 8"
                  className="w-full h-fit object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2 text-center ">
                  United National Development Program
                </h3>
              </div>

              {/* Partner 9 */}
              <div className="card bg-base-100 hover:shadow-md rounded-none p-6 hover:bg-base-200 transition duration-300">
                <img
                  src={FC4S}
                  alt="Partner 9"
                  className="w-full h-fit object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2 text-center ">
                  UN Financial Centres for Sustainability (FC4S)
                </h3>
              </div>

              {/* Partner 10 */}
              <div className="card bg-base-100 hover:shadow-md rounded-none p-6 hover:bg-base-200 transition duration-300">
                <img
                  src={FCDO}
                  alt="Partner 10"
                  className="w-full h-fit object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2 text-center ">
                  UK Foreign Commonwealth and Development Office
                </h3>
              </div>

              {/* Partner 11 */}
              <div className="card bg-base-100 hover:shadow-md rounded-none p-6 hover:bg-base-200 transition duration-300">
                <img
                  src={Treasury}
                  alt="Partner 11"
                  className="w-full h-fit object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2 text-center ">
                  The National Treasury
                </h3>
              </div>

              {/* Partner 12 */}
              <div className="card bg-base-100 hover:shadow-md rounded-none p-6 hover:bg-base-200 transition duration-300">
                <img
                  src={CityUK}
                  alt="Partner 12"
                  className="w-full h-fit object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2 text-center ">
                  TheCityUK
                </h3>
              </div>

              {/* Partner 13 */}
              <div className="card bg-base-100 hover:shadow-md rounded-none p-6 hover:bg-base-200 transition duration-300">
                <img
                  src={KAM}
                  alt="Partner 13"
                  className="w-full h-fit object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2 text-center ">
                  Kenya Association of Manufacturers
                </h3>
              </div>

              {/* Partner 14 */}
              <div className="card bg-base-100 hover:shadow-md rounded-none p-6 hover:bg-base-200 transition duration-300">
                <img
                  src={NSE}
                  alt="Partner 14"
                  className="w-full h-fit object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2 text-center ">
                  Nairobi Securities Exchange
                </h3>
              </div>
            </div>
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

export default KeyPartners;
