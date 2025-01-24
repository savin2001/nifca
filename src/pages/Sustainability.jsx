import React from "react";
import BreadCrumbMenu from "../components/BreadCrumbMenu";
import { Link } from "react-router-dom";

const Sustainability = () => {
  const breadcrumbLinks = [
    { to: "/why-nairobi", label: "Why Choose Nairobi" },
    { to: "#", label: "Sustainability" },
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
                  Sustainability
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
          Nairobi is leading the way in sustainability, integrating environmentally conscious practices into urban planning and business operations. The city is actively promoting renewable energy, with Kenya being a global leader in geothermal energy production. Initiatives such as eco-friendly building codes and sustainable waste management systems are shaping Nairobi into a green city of the future.
        </p>
        <br />

        <p className="text-neutral">
          Moreover, the city has embraced sustainable development goals (SDGs) as a core part of its growth agenda. Public and private sectors are working together to create inclusive urban environments that prioritize clean energy, water conservation, and biodiversity. This commitment to sustainability not only enhances the quality of life for residents but also attracts global businesses with a focus on environmental responsibility.
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

export default Sustainability;
