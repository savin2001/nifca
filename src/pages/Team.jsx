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
      name: "H.E., Dr. William Ruto",
      role: "Chairperson",
      bio: "President of the Republic of Kenya",
      image: "william_ruto",
    },
    {
      name: "Kithure Kindiki",
      role: "Deputy Chairperson ",
      bio: "Deputy President of the Republic of Kenya",
      image: "kithure_kindiki",
    },
    {
      name: "Hon. FCPA John Mbadi Ng’ongo EGH",
      role: "Member",
      bio: "Cabinet Secretary, National Treasury",
      image: "john_mbadi",
    },
    {
      name: "Dorcas Oduor",
      role: "Member",
      bio: "Attorney General.",
      image: "dorcas_oduor",
    },
    {
      name: "Dr. Kamau Thugge",
      role: "Member",
      bio: "Governor, Central Bank of Kenya",
      image: "dr_thuge",
    },
    {
      name: "Wycliffe Shamiah",
      role: "Member",
      bio: "Chief Executive Officer, Capital Markets Authority.",
      image: "wyclife_chamia",
    },
    {
      name: "Godfrey Kiptum",
      role: "Member",
      bio: "Chief Executive Officer, Insurance Regulatory Authority",
      image: "godfrey_kiptum",
    },
    {
      name: "Charles Machira",
      role: "Member",
      bio: "Chief Executive Officer, Retirement Benefits Authority",
      image: "c_macharia",
    },
    {
      name: "Daniel Mainda",
      role: "Member",
      bio: "Chief Executive Officer, NIFC",
      image: "daniel_mainda",
    },
    {
      name: "Michael Kamiru Kamau",
      role: "Member",
      bio: "Chairperson of the Board of Directors, NIFC",
      image: "michael_kamiru",
    },
  ];

  const boardMembers = [
    {
      name: "Michael Kamiru Kamau",
      role: "Chairperson, NIFC",
      bio: "",
      image: "michael_kamiru",
    },
    {
      name: "Darshan Shah",
      role: "Director, NIFC",
      bio: "",
      image: "darshan_shah",
    },
    {
      name: "Tonia Mutiso Kariuki",
      role: "Director, NIFC",
      bio: "",
      image: "tonia_mutiso",
    },
    {
      name: "Francis Mutua",
      role: "ISC Rep",
      bio: "",
      image: "francis_mutua",
    },
    {
      name: "Dinah Mboje",
      role: "Director, Office of the Attorney General rep",
      bio: "",
      image: "dinah_mboje",
    },
    {
      name: "Michael Maina",
      role: "Director",
      bio: "",
      image: "michael_maina",
    },
    {
      name: "James Akali Agembe",
      role: "Director",
      bio: "",
      image: "james_akali",
    },
    {
      name: "Samuel Kiptorus",
      role: "Director, The National Treasury rep ",
      bio: "",
      image: "kiptorus",
    },
  ];

  const managementMembers = [
    {
      name: "Daniel Mainda",
      role: "Chief Executive Officer, NIFC",
      bio: "",
      image: "daniel_mainda",
    },
    {
      name: "Seth Onyango",
      role: "Ag. Head of Finance, NIFC",
      bio: "",
    },
    {
      name: "Munzher Rana",
      role: "Senior Analyst",
      bio: "",
      image: "munzher",
    },
    {
      name: "Jack Omino",
      role: "Senior Analyst",
      bio: "",
    },
    {
      name: "Nelson Mandela Magunga",
      role: "Senior Analyst",
      bio: "",
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

export default Team;
