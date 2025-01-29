import React from "react";
import { Link } from "react-router-dom";
import BreadCrumbMenu from "../components/BreadCrumbMenu";
import { MdFileDownload } from "react-icons/md";

// Import documents from the assets folder
import NIFC_Act from "../assets/docs/NIFC-Act.pdf";
import Retirement_Benefits_Regulations from "../assets/docs/Retirement_Benefits_Regulations.pdf";
import The_Nairobi_International_Financial_Centre from "../assets/docs/The_Nairobi_International_Financial_Centre_(General)_Regulations.pdf";
import The_Central_Bank_of_Kenya_Act_1st_January_2014 from "../assets/docs/The_Central_Bank_of_Kenya_Act_1st_January_2014.pdf";
import The_Finance_Act_2023 from "../assets/docs/The_Finance_Act_2023.pdf";
import INSURANCE_ACT_UPDATED_2022_1 from "../assets/docs/INSURANCE_ACT_UPDATED_2022-1.pdf";
import CapitalMarketsAct_Cap485A from "../assets/docs/CapitalMarketsAct_Cap485A.pdf";
import Income_Tax_Act_Cap_470_Revised_2021_3_1 from "../assets/docs/Income-Tax-Act-Cap-470-Revised-2021-3-1.pdf";

const Laws = () => {
  // Define breadcrumb links
  const breadcrumbLinks = [
    { to: "/discover-nifc", label: "Discover the NIFC" },
    { to: "#", label: "Laws & Regulations" },
  ];

  // Define downloadable documents
  const documents = [
    {
      name: "NIFC Act 2017",
      file: NIFC_Act,
    },
    {
      name: "The Finance Act 2023",
      file: The_Finance_Act_2023,
    },
    {
      name: "Insurance Act Updated 2022",
      file: INSURANCE_ACT_UPDATED_2022_1,
    },
    {
      name: "Financial Markets Conduct Bill",
      file: CapitalMarketsAct_Cap485A,
    },
    {
      name: "Income Tax Act Cap 470 Revised 2021",
      file: Income_Tax_Act_Cap_470_Revised_2021_3_1,
    },
    {
      name: "Retirement Benefits Regulations",
      file: Retirement_Benefits_Regulations,
    },
    {
      name: "The Nairobi International Financial Centre",
      file: The_Nairobi_International_Financial_Centre,
    },
    {
      name: "The Central Bank of Kenya Act 1st January 2014",
      file: The_Central_Bank_of_Kenya_Act_1st_January_2014,
    },
  ];

  return (
    <div className="relative">
      {/* Hero Carousel */}
      <div className="carousel w-full h-1/2">
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
              <h1 className="mb-5 text-5xl font-light uppercase">
                Laws & Regulations
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <BreadCrumbMenu links={breadcrumbLinks} />

      {/* Introduction Paragraph */}
      <div className="max-w-screen-lg mx-auto text-center text-2xl font-light flex flex-col mt-20">
        <p className="text-neutral">
          Kenya has a well-established legal and regulatory framework that
          governs the financial sector, investment, and trade. The Nairobi
          International Financial Centre (NIFC) operates under progressive laws
          designed to enhance investor confidence, promote transparency, and
          strengthen compliance with global financial standards. Key regulations
          focus on financial markets conduct, investment promotion, and
          anti-money laundering measures, ensuring a secure and competitive
          business environment.
        </p>
      </div>

      {/* Document Download Section */}
      <div className="max-w-screen-lg mx-auto text-left flex flex-col mt-20">
        <h2 className="text-3xl font-light text-primary text-center mb-6">
          Key Regulatory Documents
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {documents.map((doc, index) => (
            <Link
              key={index}
              to={doc.file} // You would need to ensure that 'doc.file' is a route or URL
              target="_blank" // This can be added to open the file in a new tab if necessary
              className="card bg-base-200 p-6 hover:shadow-lg text-neutral hover:text-primary transition duration-300 w-full flex flex-row items-center justify-between"
              onClick={(e) => {
                e.preventDefault();
                const a = document.createElement("a");
                a.href = doc.file;
                a.download = doc.name;
                a.click();
              }}
            >
              <h3 className="text-xl">{doc.name}</h3>
              <MdFileDownload className="w-8 h-8" />
            </Link>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
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

export default Laws;
