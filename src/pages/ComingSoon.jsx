import React from "react";
import BreadCrumbMenu from "../components/BreadCrumbMenu";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  const breadcrumbLinks = [{ to: "/coming-soon", label: "Coming Soon" }];
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
                  Coming Soon
                </h1>
                <p className="text-lg font-light mt-3">
                  Shaping a Sustainable Future
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pass breadcrumb links as a prop */}
      <BreadCrumbMenu links={breadcrumbLinks} />

      {/* Main Content */}
      <div className="max-w-screen-lg mx-auto text-left flex flex-col mt-20">
        <h2 className="text-3xl font-light mb-5">Page Under Maintenance</h2>
        <p className="text-neutral text-lg font-light">
          We are currently working on bringing you a comprehensive overview of
          this page. Stay tuned for updates on how we aim to promote sustainable
          growth, innovation, and environmental stewardship through tailored
          financial solutions.
        </p>
        <p className="text-neutral text-lg font-light mt-4">
          In the meantime, feel free to explore other sections of our platform
          or reach out with any queries.
        </p>
      </div>

      {/* Call-to-Action Section */}
      <div className="mt-12 flex flex-col justify-center items-center font-light">
        <div className="bg-base-300 w-full p-12 flex justify-between space-x-8">
          <Link
            to="/start-application"
            className="capitalize flex-grow btn btn-ghost btn-lg text-3xl font-light"
          >
            Start Application ❯
          </Link>
          <Link
            to="/contact"
            className="capitalize flex-grow btn btn-ghost btn-lg text-3xl font-light"
          >
            Make an Enquiry ❯
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
