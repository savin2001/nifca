import React from "react";
import BreadCrumbMenu from "../components/BreadCrumbMenu";
import { Link } from "react-router-dom";

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
          Its progressive legal and regulatory framework is enshrined in Kenyan
          law. NIFC firms will benefit from efficient business facilitation
          services provided through the NIFC Authority and a dedicated dispute
          resolution process, including a cost effective and expeditious
          arbitration process.
        </p>
        <br />

        <h3 className="text-primary text-xl mt-4 font-semibold">
          Supporting Firms in Registering in Kenya: Streamlined Support for
          Seamless Set-up
        </h3>
        <br />

        <p className="text-neutral">
          The NIFC takes pride in offering a robust range of non-financial
          support aimed at reducing operational hurdles and enhancing the
          overall business experience. We collaborate closely with key
          government partners to provide NIFC firms with tailored support and
          guidance.
        </p>
        <br />

        <p className="text-neutral">
          Kenya Revenue Authority - We work closely with the KRA to provide NIFC
          Firms with tailored tax assistance and guidance.
        </p>
        <br />

        <p className="text-neutral">
          Business Registration Service - To support companies transitioning
          into Kenya, we collaborate with the BRS to ensure that the process of
          setting up operations, understanding regulations, or managing
          workforce needs is smooth and efficient.
        </p>
        <br />

        <p className="text-neutral">
          Directorate of Immigration Services - We collaborate closely with the
          DIS to support NIFC Firms in procuring work permits for their chosen
          employees in an expedited manner. We also support in obtaining
          dependents passes and students passes for the families of those
          employees.
        </p>
        <br />

        <p className="text-primary text-xl mt-4 font-semibold">
          Creating an Enabling Tax Environment to Support Growth
        </p>
        <br />

        <p className="text-neutral">
          The NIFC Currently has two major tax incentives in law. The NIFC makes
          new proposals to the National Treasury each year, with the intention
          of making the Kenyan environment more conducive for business and
          economic growth. The current incentives are:
        </p>
        <br />
        <ul className="menu bg-base-200 rounded-box w-full hover:cursor-none disabled">
          <li>
            <p className="text-neutral">
              For a period of 10 years, a preferential corporate income tax rate
              of 15% for firms owning or operating a carbon exchange or
              emissions trading system.
            </p>
          </li>
          <li>
            <p className="text-neutral">
              A fixed capital gains tax rate of 5% on any gain arising on the
              transfer of investments whereby the Nairobi International
              Financial Centre (NIFC) Authority certifies that:
            </p>
            <ul>
              <li>
                <p className="text-neutral">
                  the firm has invested at least KES 3 billion in at least one
                  entity incorporated or registered in Kenya within two years;
                  and
                </p>
              </li>
              <li>
                <p className="text-neutral">
                  the transfer of the investments is to be made after five (5)
                  years of the date of the investment.
                </p>
              </li>
            </ul>
          </li>
        </ul>

        <br />

        <br />
      </div>

      {/* Section 3 */}
      <div className="mt-12 flex flex-col justify-center items-center font-light">
        <div className="bg-base-300 w-full  p-12 flex justify-between space-x-8">
          <button className="capitalize flex-grow btn btn-ghost btn-lg text-3xl font-light">
            Start application ❯
          </button>
          <Link
            to="/contact"
            className="capitalize flex-grow btn btn-ghost  btn-lg text-3xl font-light"
          >
            Make an enquiry ❯
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Frameworks;
