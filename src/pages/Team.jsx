import React from "react";
import BreadCrumbMenu from "../components/BreadCrumbMenu";
import { Link } from "react-router-dom";
import TeamSection from "../components/TeamSection";

const Team = () => {
  // Define breadcrumb links
  const breadcrumbLinks = [
    { to: "/discover-nifc", label: "Discover the NIFC" },
    { to: "#", label: "Our Team" },
  ];

  const steeringCouncilMembers = [
    {
      name: "Jane Mwangi",
      role: "Chairperson, Steering Council",
      bio: "Jane has been leading the council for over 5 years with remarkable success...",
    },
    {
      name: "Michael Ochieng",
      role: "Policy Advisor",
      bio: "Michael advises on policy and strategic direction...",
    },
    {
      name: "Grace Wanjiru",
      role: "Head of Legal Affairs",
      bio: "Grace is responsible for overseeing legal matters and ensuring compliance...",
    },
    {
      name: "Peter Njoroge",
      role: "Director of Communications",
      bio: "Peter manages the external and internal communications for the council...",
    },
    {
      name: "Susan Otieno",
      role: "Financial Strategist",
      bio: "Susan is a seasoned financial strategist with a focus on sustainable growth...",
    },
    {
      name: "Kevin Mutua",
      role: "Project Manager",
      bio: "Kevin leads key projects and initiatives that align with the council’s goals...",
    },
  ];

  const boardMembers = [
    {
      name: "John Doe",
      role: "Chairperson, NIFC",
      bio: "John has over 20 years of experience in the corporate sector...",
    },
    {
      name: "Jane Smith",
      role: "Director",
      bio: "Jane has been a director for 10 years and specializes in finance...",
    },
  ];

  const managementMembers = [
    {
      name: "Alice Kamau",
      role: "Chief Executive Officer",
      bio: "Alice has been the CEO for 3 years and is focused on innovation...",
    },
    {
      name: "Brian Mwangi",
      role: "Ag. Director Finance",
      bio: "Brian has over 15 years of experience in corporate finance...",
    },
    {
      name: "Cynthia Njoroge",
      role: "Senior Analyst",
      bio: "Cynthia provides strategic insights and data analysis to support decision-making...",
    },
    {
      name: "David Otieno",
      role: "Senior Analyst",
      bio: "David specializes in financial forecasting and market analysis...",
    },
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
                <h1 className="mb-5 text-5xl font-light uppercase">Our Team</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pass breadcrumb links as a prop */}
      <BreadCrumbMenu links={breadcrumbLinks} />

      {/* Description */}
      <div className="max-w-screen-lg mx-auto text-left flex flex-col my-20">
        <h2 className="text-center mb-8 font-light text-2xl">
          Meet the dedicated individuals whose expertise and leadership drive
          the success and vision of the Nairobi International Financial Centre.
        </h2>
      </div>

      <div className="max-w-screen-lg mx-auto text-left flex flex-col">
        <TeamSection
          category="Steering Council"
          members={steeringCouncilMembers}
        />
        <TeamSection category="Board" members={boardMembers} />
        <TeamSection category="Management" members={managementMembers} />
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

export default Team;
