import React from "react";
import BreadCrumbMenu from "../components/BreadCrumbMenu";
import { Link } from "react-router-dom";

const OperatingNIFC = () => {
  
  // Define breadcrumb links
  const breadcrumbLinks = [
    { to: "/operating-in-nifc", label: "Join The NIFC" }
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
                  Operating in the NIFC
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
          The Nairobi International Financial Centre (NIFC) is a strategic
          initiative that positions Nairobi as the leading financial hub in East
          Africa. It offers a conducive environment for international investors,
          financial institutions, and businesses looking to expand their
          operations across the African continent. The NIFC is designed to
          attract global financial players by providing a regulatory framework
          and infrastructure that meets international standards.
        </p>
        <br />

        <p className="text-neutral">
          Located in Kenya’s capital, Nairobi, the NIFC serves as a vital
          gateway for investors seeking to access the diverse markets of East
          Africa. Nairobi’s strategic location, coupled with its modern
          infrastructure, makes it an ideal base for financial and business
          operations. The city is well-connected through Jomo Kenyatta
          International Airport, offering seamless access to regional and global
          markets.
        </p>
        <br />

        <p className="text-neutral">
          The NIFC is governed by a progressive legal and regulatory framework
          designed to support business operations in a transparent and efficient
          manner. The regulatory environment is aligned with international best
          practices, making it an attractive destination for financial services,
          asset management, insurance, and other related industries. The
          Centre’s legal framework ensures that businesses can operate with
          confidence, knowing they are protected by a well-established system.
        </p>
        <br />

        <p className="text-neutral">
          One of the key advantages of operating within the NIFC is access to a
          skilled and diverse workforce. Nairobi is home to a growing pool of
          professionals with expertise in finance, technology, and other
          sectors. With an increasing number of universities and training
          institutions, the city continues to produce a talented workforce
          capable of supporting the needs of businesses operating in the
          financial sector.
        </p>
        <br />

        <p className="text-neutral">
          The NIFC offers various incentives to attract both local and
          international businesses. These include tax exemptions, reduced
          operational costs, and access to funding through local and
          international financial institutions. The Nairobi Securities Exchange
          (NSE) also plays an integral role, offering opportunities for
          businesses to raise capital and expand their reach within the
          financial ecosystem.
        </p>
        <br />

        <p className="text-neutral">
          Nairobi’s status as a global financial centre is further bolstered by
          its reputation as a tech hub, with many fintech startups already
          operating in the city. The synergy between Nairobi’s financial and
          technology sectors offers businesses unique opportunities for growth
          and innovation, particularly in areas like mobile banking, digital
          payments, and blockchain technology.
        </p>
        <br />

        <p className="text-neutral">
          Another advantage of operating in the NIFC is Kenya’s commitment to
          sustainability. The government is prioritizing sustainable business
          practices, particularly in energy, waste management, and urban
          development. Businesses that align with these green initiatives are
          well-positioned to access funding and incentives aimed at promoting
          environmental sustainability.
        </p>
        <br />

        <p className="text-neutral">
          In conclusion, the Nairobi International Financial Centre is a prime
          location for businesses seeking to expand in Africa. With its
          attractive regulatory environment, skilled workforce, access to global
          markets, and focus on sustainability, the NIFC offers unmatched
          opportunities for financial institutions, investors, and
          entrepreneurs. Nairobi is fast becoming one of the most important
          financial hubs in the world, and the NIFC is at the heart of this
          transformation.
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

export default OperatingNIFC;
