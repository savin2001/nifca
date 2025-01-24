import React from "react";
import BreadCrumbMenu from "../components/BreadCrumbMenu";
import { Link } from "react-router-dom";

const Tourism = () => {
  const breadcrumbLinks = [
    { to: "/why-nairobi", label: "Why Choose Nairobi" },
    { to: "#", label: "Tourism" },
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
                Tourism
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
        Nairobi offers an unparalleled mix of urban excitement and natural beauty, making it a premier tourism destination. Known as the "Green City in the Sun," it is the only capital city in the world with a national park within its borders. Visitors can experience thrilling game drives to see lions, rhinos, and other wildlife just minutes away from the city center. Additionally, Nairobi boasts rich cultural attractions, including museums, art galleries, and traditional markets.
        </p>
        <br />

        <p className="text-neutral">
        The city’s vibrant hospitality industry caters to both leisure and business travelers, offering luxury hotels, world-class dining, and unique safari experiences. Nairobi is also a gateway to Kenya's renowned tourist attractions, such as the Maasai Mara, Mount Kenya, and the pristine beaches of the Indian Ocean. This blend of nature, culture, and modernity makes Nairobi an unforgettable destination for visitors worldwide..
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

export default Tourism;
