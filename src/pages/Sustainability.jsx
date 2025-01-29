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
          Cutting-edge financial solutions will tackle the threat of climate
          change, and Kenya is leading the way on the continent. Kenya’s first
          green bond began trading on the Nairobi Securities Exchange in January
          2020, and in an effort to preserve rhino populations in the country,
          Kenya became home to the first wildlife bond globally in March 2021.
        </p>
        <br />

        <p className="text-neutral text-lg font-light">
          Kenya is an emerging global green finance hub driven by both public
          and private sector commitments. There are multiple Kenyan
          organizations with sustainability commitments, with over 200
          Kenyan-based SMEs officially committed to the UN Global Compact. The
          shift towards sustainable finance can be seen through the issuance of
          Kenya’s first green bond, which has already raised over 4.3 billion
          Kenyan Shillings.
        </p>
        <br />

        <p className="text-neutral text-lg font-light">
          Through the Vision 2030 project, the Kenyan government has made
          commitments to growing the green finance ecosystem in the country
          through the implementation of multiple policies, frameworks, and
          initiatives that govern climate action, as well as making a commitment
          to reduce their greenhouse gas emissions by 32%. Furthermore, there
          are over 10 policies or frameworks in place to govern climate change
          action, such as the National Climate Change Action Plan, the National
          Climate Finance Policy, and the upcoming Green Fiscal Policy.
        </p>
        <br />

        <p className="text-neutral text-lg font-light">
          Kenya’s importance as a significant hub of sustainability is
          highlighted by its housing of the United Nations regional
          headquarters. The Big Four programme, implemented by the President,
          has been a national priority, focusing on the provision of Food and
          Nutrition Security, Healthcare, Manufacturing, and Affordable Housing,
          all of which align with key Sustainable Development Goals.
        </p>
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

export default Sustainability;
