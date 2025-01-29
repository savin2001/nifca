import React from "react";
import { Link } from "react-router-dom";
import BreadCrumbMenu from "../components/BreadCrumbMenu";
import { MdWork } from "react-icons/md"; // Changed the icon to one more relevant for careers

// Import job-related assets (e.g., PDFs or job descriptions if available)
// import Job_Description_1 from "../assets/docs/Job_Description_1.pdf";
// import Job_Description_2 from "../assets/docs/Job_Description_2.pdf";
// import Job_Description_3 from "../assets/docs/Job_Description_3.pdf";

const Careers = () => {
  // Define breadcrumb links
  const breadcrumbLinks = [
    { to: "/home", label: "Home" },
    { to: "#", label: "Careers" },
  ];

  // Define career opportunities (document names now represent job positions)
  const careers = [
    {
      name: "Digital Channels Support Officer",
    //   file: Job_Description_1,
    },
    {
      name: "Financial Analyst",
    //   file: Job_Description_2,
    },
    {
      name: "Compliance Officer",
    //   file: Job_Description_3,
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
                "url(https://images.unsplash.com/photo-1611599536072-fd600b035b9f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZWVyJTIwb3Bwb3J0dW5pdGllZXN8ZW58MHx8MHx8&crop=entropy)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <h1 className="mb-5 text-5xl font-light uppercase">
                Careers at Our Company
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
          Join our dynamic team and be part of a company that fosters growth, innovation, and career development. We are looking for talented, passionate individuals to contribute to our mission of driving business success while promoting a culture of inclusivity and excellence. Explore our current career opportunities and take the next step in your professional journey.
        </p>
      </div>

      {/* Career Opportunities Section */}
      <div className="max-w-screen-lg mx-auto text-left flex flex-col mt-20">
        <h2 className="text-3xl font-light text-primary text-center mb-6">
          Open Positions
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {/* {careers.map((job, index) => (
            <Link
              key={index}
              to={job.file} // Ensures that clicking the job description file will prompt a download
              target="_blank" // Opens the file in a new tab
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
              <MdWork className="w-8 h-8" />
            </Link>
          ))} */}
          <h3 className="text-xl text-center">Cominng Soon</h3>
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
