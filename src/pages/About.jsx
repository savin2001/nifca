import { Link } from "react-router-dom";
import BreadCrumbMenu from "../components/BreadCrumbMenu";
import ObjectivesCarousel from "../components/ObjectivesCarousel";

const About = () => {
  // Define breadcrumb links
  const breadcrumbLinks = [
    { to: "/discover-nifc", label: "Discover the NIFC" },
    { to: "#", label: "What is NIFC" },
  ];

  return (
    <div className="">
      <div className="relative">
        {/* Hero Carousel */}
        <div className="carousel w-full">
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
        {/* Pass breadcrumb links as a prop */}
        <BreadCrumbMenu links={breadcrumbLinks} />
      </div>

      {/* Section 2 */}
      <div className="h-screen flex flex-col justify-center items-center font-light">
        <div className="w-full flex justify-center items-center h-1/3 bg-base-100 sm:text-lg md:text-2xl ">
          <h2 className="text-center md:w-1/2">
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
        <ObjectivesCarousel />
        <div className="bg-base-300 w-full  p-12 flex justify-between space-x-8">
          <button className="capitalize flex-grow btn btn-ghost btn-lg text-3xl font-light">
            Start application ❯
          </button>
          <button className="capitalize flex-grow btn btn-ghost  btn-lg text-3xl font-light">
            Make an enquiry ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
