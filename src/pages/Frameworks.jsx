import React from "react";
import BreadCrumbMenu from "../components/BreadCrumbMenu";

const Frameworks = () => {
  // Define breadcrumb links
  const breadcrumbLinks = [
    { to: "/discover-nifc", label: "Discover the NIFC" },
    { to: "#", label: "Our Frameworks and Incentives" },
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
                  Our Frameworks and Incentives
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pass breadcrumb links as a prop */}
      <BreadCrumbMenu links={breadcrumbLinks} />
      {/* Article */}
      <div className="max-w-screen-lg mx-auto text-left flex flex-col mt-20">
        <p className="text-neutral text-lg font-light">
          The Nairobi International Financial Centre (NIFC) provides a robust
          legal and regulatory framework designed to attract global financial
          institutions, investors, and businesses. By aligning with
          international best practices, the NIFC ensures a secure and
          transparent environment that fosters confidence among its
          participants.
        </p>
        <br />

        <p className="text-neutral">
          One of the key pillars of the NIFC framework is its commitment to
          regulatory efficiency. Businesses operating within the Centre benefit
          from streamlined processes, reduced bureaucratic hurdles, and
          expedited approvals. This efficiency is coupled with high standards of
          governance, ensuring compliance with global financial regulations.
        </p>
        <br />

        <p className="text-neutral">
          To incentivize investment, the NIFC offers a range of benefits,
          including tax exemptions, lower operational costs, and access to a
          network of global and regional financial institutions. These
          incentives are tailored to encourage both new and established
          businesses to operate within the Centre, creating a vibrant financial
          ecosystem.
        </p>
        <br />

        <p className="text-neutral">
          Innovation is at the heart of the NIFC's strategy. The Centre actively
          supports the growth of fintech and digital financial services through
          policies that encourage technological advancements. Businesses in
          areas such as mobile banking, blockchain, and digital payments find a
          supportive environment for innovation and scaling.
        </p>
        <br />

        <p className="text-neutral">
          The NIFC also prioritizes collaboration between the public and private
          sectors. By fostering partnerships, the Centre ensures that businesses
          have access to resources, expertise, and funding opportunities. These
          collaborations are crucial in driving economic growth and regional
          integration.
        </p>
        <br />

        <p className="text-neutral">
          Sustainability is another cornerstone of the NIFC's vision. Businesses
          operating in the Centre are encouraged to adopt environmentally
          friendly practices, with incentives available for those who align with
          Kenya's green economy initiatives. This focus on sustainability
          ensures that the NIFC contributes to long-term economic and
          environmental goals.
        </p>
        <br />

        <p className="text-neutral">
          In conclusion, the Nairobi International Financial Centre is not just
          a financial hub but a strategic platform for innovation, growth, and
          sustainability. Its frameworks and incentives are designed to attract
          global players while fostering regional development, making it a key
          driver of Africa's financial transformation.
        </p>
      </div>

      {/* Section 3 */}
      <div className="mt-12 flex flex-col justify-center items-center font-light">
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

export default Frameworks;
