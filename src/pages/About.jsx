import { Link } from "react-router-dom";
import BreadCrumbMenu from "../components/BreadCrumbMenu";

const About = () => {
  return (
    <div className="">
      <div className="relative">
        {/* Hero Carousel */}
        <div className="carousel w-full h-1/2">
          {/* Slide 1 */}
          <div id="slide1" className="carousel-item relative w-full">
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-neutral-content text-center">
                <div>
                  <h1 className="mb-5 text-5xl font-light uppercase">
                    Discover the NIFC
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BreadCrumbMenu />
      </div>
      {/* Section 2 */}
      <div className="h-screen flex flex-col justify-center items-center font-light">
        <div className="w-full flex justify-center items-center h-1/3 bg-base-100 sm:text-lg md:text-2xl ">
          <h2 className="text-center md:w-2/3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
            aspernatur recusandae sequi quaerat iusto impedit, doloribus quas
            odit neque possimus!
          </h2>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center h-auto bg-base-200 p-6">
          {/* Left Side: Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D" // Replace with your image URL
              alt="NIFC Illustration"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>

          {/* Right Side: Text */}
          <div className="w-full md:w-1/2 flex flex-col items-start md:pl-10 mt-6 md:mt-0">
            <h2 className="sm:text-xl md:text-3xl font-extralight mb-6">
              The NIFC aims to be one of the leading international financial
              centres
            </h2>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="h-screen flex flex-col justify-center items-center font-light">
        <div className="w-2/3 flex justify-center items-center h-2/5 bg-base-100 sm:text-lg md:text-3xl ">
          <h2 className="text-center md:w-2/3">
            Promote economic and financial sector growth through a world-class
            innovative financial centre
          </h2>
        </div>
        <div className="w-full flex flex-col justify-center items-center h-3/5 bg-base-200 sm:text-lg md:text-3xl">
          <h2 className="text-center uppercase md:w-2/3 mb-6">Objectives</h2>

          {/* Carousel container */}
          <div className="relative w-full max-w-6xl">
            {/* Carousel items */}
            <div className="carousel flex space-x-4 overflow-x-scroll scrollbar-hide">
              {/* Individual cards */}
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="carousel-item flex-shrink-0 w-1/5">
                  <div
                    className={`card w-full h-48 bg-base-100 shadow-md flex flex-col justify-end p-4 ${
                      index > 4 ? "opacity-50" : ""
                    }`}
                  >
                    <h3 className="text-sm md:text-lg font-bold">
                      Objective Title {index + 1}
                    </h3>
                    {index === 1 && (
                      <p className="text-sm text-gray-500">
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris...
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {/* Navigation buttons */}
            <button className="absolute right-12 top-0 transform -translate-y-1/2 btn btn-circle btn-sm">
              ❮
            </button>
            <button className="absolute right-2 top-0 transform -translate-y-1/2 btn btn-circle btn-sm">
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
