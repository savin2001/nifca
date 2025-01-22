import React from "react";
import BreadCrumbMenu from "../components/BreadCrumbMenu";

const NIFCFirm = () => {
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
                  Becoming and NIFC Firm
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BreadCrumbMenu />
      <div className="max-w-screen-lg mx-auto text-left flex flex-col mt-20">
        <p className="text-neutral text-lg font-light">
          Becoming a Nairobi International Financial Centre (NIFC) firm
          positions your business at the heart of Africa's financial ecosystem.
          The NIFC is a government initiative aimed at transforming Nairobi into
          a globally competitive financial hub, fostering economic growth
          through financial innovation and investment.
        </p>
        <br />

        <p className="text-neutral">
          The process of becoming an NIFC firm begins with eligibility.
          Organizations seeking this status must demonstrate a commitment to
          contributing to the growth and development of Kenya's financial
          services sector. This includes compliance with international standards
          of governance, transparency, and sustainability.
        </p>
        <br />

        <p className="text-neutral">
          Once eligible, applicants can register through the NIFC Authority,
          which provides streamlined processes to reduce bureaucratic hurdles.
          Firms gain access to exclusive benefits such as tax incentives,
          simplified regulatory procedures, and a robust legal framework
          designed to protect investments and foster confidence among
          stakeholders.
        </p>
        <br />

        <p className="text-neutral">
          As an NIFC firm, businesses enjoy expanded market access. Nairobi’s
          strategic location provides proximity to key African markets, making
          it an ideal launchpad for regional and international operations. This
          advantage is further enhanced by Kenya’s advanced infrastructure,
          including its digital payment systems and financial technology
          capabilities.
        </p>
        <br />

        <p className="text-neutral">
          Another critical benefit of NIFC accreditation is the opportunity to
          collaborate with global financial institutions. The NIFC fosters
          partnerships between local and international firms, creating a vibrant
          ecosystem for innovation, knowledge sharing, and capital flow. This
          environment is particularly attractive to asset managers, investment
          funds, insurance companies, and fintech firms.
        </p>
        <br />

        <p className="text-neutral">
          NIFC firms also gain access to a talent pool of skilled professionals.
          Kenya’s reputation as a center for education and innovation ensures a
          steady supply of expertise in banking, financial technology, and
          investment management. Additionally, the NIFC offers training programs
          to equip firms with the tools to navigate the evolving global
          financial landscape.
        </p>
        <br />

        <p className="text-neutral">
          Moreover, the NIFC is committed to sustainability, aligning with
          global trends in green finance and responsible investment. Firms can
          leverage these initiatives to enhance their environmental, social, and
          governance (ESG) credentials, attracting investors who prioritize
          ethical and sustainable business practices.
        </p>
        <br />

        <p className="text-neutral">
          By becoming an NIFC firm, businesses unlock a range of opportunities
          to grow, innovate, and lead in the financial services industry. With a
          strong regulatory framework, strategic partnerships, and access to
          African and global markets, NIFC accreditation is a strategic move for
          firms looking to scale and thrive in the dynamic world of finance.
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

export default NIFCFirm;
