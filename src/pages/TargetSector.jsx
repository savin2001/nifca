import React from "react";
import BreadCrumbMenu from "../components/BreadCrumbMenu";
import { Link } from "react-router-dom";

const TargetSector = () => {
  const breadcrumbLinks = [{ to: "/target-sector", label: "Target Sector" }];
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
                  Target Sector
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BreadCrumbMenu links={breadcrumbLinks} />
      <div className="max-w-screen-lg mx-auto text-left flex flex-col mt-20">
        <p className="text-neutral text-lg font-light">
          Kenya is rapidly emerging as a key player in various sectors, with a
          focus on healthcare, technology, and sustainable development. The
          country's diverse and growing economy is driven by a combination of
          traditional industries and new innovations, making it an ideal
          destination for investment and business growth.
        </p>
        <br />

        <p className="text-neutral">
          One of Kenya's most promising sectors is healthcare. The country has
          seen a rise in demand for personalized healthcare services,
          particularly in urban areas like Nairobi, where middle-to-high-income
          residents are increasingly seeking tailored health solutions. The
          growth of private healthcare providers, especially pharmacies offering
          home delivery and digital prescription management, is helping to meet
          this demand.
        </p>
        <br />

        <p className="text-neutral">
          The technology sector in Kenya is another key area of growth. Nairobi,
          known as Africa’s "Silicon Savannah," is home to a vibrant tech
          ecosystem. From fintech startups to digital health solutions, Kenya's
          technological innovations are shaping industries not only within the
          country but across the continent. With a focus on tech-driven
          solutions, Kenya offers a fertile ground for entrepreneurs and
          businesses involved in digital transformation and innovation.
        </p>
        <br />

        <p className="text-neutral">
          Sustainability is also gaining traction in Kenya, with significant
          efforts being made to address environmental challenges. Investments in
          green energy, waste management, and sustainable agriculture are
          becoming more common, as the country seeks to position itself as a
          leader in sustainable development in Africa. These efforts are
          attracting international interest, particularly in sectors that
          prioritize eco-friendly practices.
        </p>
        <br />

        <p className="text-neutral">
          The financial services sector in Kenya is another area of growth,
          supported by a stable banking system and a growing focus on digital
          channels. With the rise of mobile money and digital banking services,
          Kenya is leading the way in financial inclusion across Africa. This
          trend is expected to continue, opening up new opportunities for
          businesses and investors looking to tap into the digital economy.
        </p>
        <br />

        <p className="text-neutral">
          Kenya's young and skilled workforce is a major asset, with a growing
          number of institutions offering high-quality education. This talent
          pool is driving innovation and supporting industries like healthcare,
          technology, and finance. As the country continues to develop, its
          workforce will remain a key factor in attracting investment and
          fostering growth.
        </p>
        <br />

        <p className="text-neutral">
          In conclusion, Kenya's target sectors – healthcare, technology,
          sustainability, and finance – offer significant opportunities for
          businesses and investors. With its strategic location, innovative
          economy, and skilled workforce, Kenya is well-positioned to continue
          its growth and attract international attention in these key areas.
        </p>
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

export default TargetSector;
