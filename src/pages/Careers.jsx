import React from "react";
import { Link } from "react-router-dom";
import BreadCrumbMenu from "../components/BreadCrumbMenu";
import { MdFileDownload } from "react-icons/md";

// Import job description PDFs
import Corporation_Secretary_and_Director_Legal_Services from "../assets/docs/JD/Corporation Secretary & Director, Legal Services.pdf";
import Deputy_Director_Capital_Markets from "../assets/docs/JD/Deputy Director, Capital Markets.pdf";
import Deputy_Director_Human_Resources_Administration from "../assets/docs/JD/Deputy Director, Human Resouces & Administration.pdf";
import Deputy_Director_Marketing_Communications from "../assets/docs/JD/Deputy Director, Marketing & Communications.pdf";
import Deputy_Director_Supply_Chain_Management from "../assets/docs/JD/Deputy Director, Supply Chain Management.pdf";
import Director_Corporate_Services from "../assets/docs/JD/Director, Corporate Services.pdf";
import Driver from "../assets/docs/JD/Driver.pdf";
import Financial_Analyst from "../assets/docs/JD/Financial Analyst.pdf";
import Principal_Financial_Analyst from "../assets/docs/JD/Principal Financial Analyst.pdf";
import Principal_Internal_Auditor from "../assets/docs/JD/Principal Internal Auditor.pdf";
import Senior_Finance_Accountant from "../assets/docs/JD/Senior Finance_Accountant.pdf";
import Senior_Financial_Analyst from "../assets/docs/JD/Senior Financial Analyst.pdf";

const Careers = () => {
  // Define breadcrumb links
  const breadcrumbLinks = [
    { to: "/discover-nifc", label: "Discover The NIFC" },
    { to: "#", label: "Careers" },
  ];

  // Define career opportunities with downloadable PDFs
  const careers = [
    {
      name: "Corporation Secretary & Director, Legal Services",
      file: Corporation_Secretary_and_Director_Legal_Services,
    },
    {
      name: "Deputy Director, Capital Markets",
      file: Deputy_Director_Capital_Markets,
    },
    {
      name: "Deputy Director, Human Resources & Administration",
      file: Deputy_Director_Human_Resources_Administration,
    },
    {
      name: "Deputy Director, Marketing & Communications",
      file: Deputy_Director_Marketing_Communications,
    },
    {
      name: "Deputy Director, Supply Chain Management",
      file: Deputy_Director_Supply_Chain_Management,
    },
    {
      name: "Director, Corporate Services",
      file: Director_Corporate_Services,
    },
    {
      name: "Driver",
      file: Driver,
    },
    {
      name: "Financial Analyst",
      file: Financial_Analyst,
    },
    {
      name: "Principal Financial Analyst",
      file: Principal_Financial_Analyst,
    },
    {
      name: "Principal Internal Auditor",
      file: Principal_Internal_Auditor,
    },
    {
      name: "Senior Finance Accountant",
      file: Senior_Finance_Accountant,
    },
    {
      name: "Senior Financial Analyst",
      file: Senior_Financial_Analyst,
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
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
              <h1 className="mb-5 text-5xl font-light uppercase">Careers</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <BreadCrumbMenu links={breadcrumbLinks} />

      {/* Introduction Paragraph */}
      <div className="max-w-screen-lg mx-auto text-center text-2xl font-light flex flex-col mt-20">
        <p className="text-neutral">
          Join our dynamic team and be part of a company that fosters growth,
          innovation, and career development. We are looking for talented,
          passionate individuals to contribute to our mission of driving
          business success while promoting a culture of inclusivity and
          excellence. Explore our current career opportunities and take the next
          step in your professional journey.
        </p>
      </div>

      {/* Career Opportunities Section */}
      <div className="max-w-screen-lg mx-auto text-left flex flex-col mt-20">
        <h2 className="text-3xl font-light text-primary text-center mb-6">
          Open Positions
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {careers.map((job, index) => (
            <Link
              key={index}
              to={job.file}
              target="_blank"
              className="card bg-base-200 p-6 hover:shadow-lg text-neutral hover:text-primary transition duration-300 w-full flex flex-row items-center justify-between"
              onClick={(e) => {
                e.preventDefault();
                const a = document.createElement("a");
                a.href = job.file;
                a.download = job.name;
                a.click();
              }}
            >
              <h3 className="text-xl">{job.name}</h3>
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
            Apply Now ❯
          </Link>
          <Link
            to="/contact"
            className="capitalize flex-grow btn btn-ghost btn-lg text-3xl font-light"
          >
            Contact Us ❯
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Careers;
