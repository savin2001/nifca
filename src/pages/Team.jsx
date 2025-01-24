import React from "react";
import BreadCrumbMenu from "../components/BreadCrumbMenu";
import { Link } from "react-router-dom";

const Team = () => {
  // Define breadcrumb links
  const breadcrumbLinks = [
    { to: "/discover-nifc", label: "Discover the NIFC" },
    { to: "#", label: "Our Team" },
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

      {/* Team Members */}
      <div className="max-w-screen-lg mx-auto text-left flex flex-col">
        {/* Board */}
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-center mb-8 uppercase text-primary text-3xl">
            Board
          </h2>
          <div className="w-full p-6 bg-base-100">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Example Member 1 */}
              <div className="card bg-base-100 hover:shadow-md rounded-none p-6 hover:shadow-lg transition duration-300">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
                  alt="Board Member 1"
                  className="w-full h-fit object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">John Doe</h3>
                <p className="text-gray-600 mb-4">Chairperson, NIFC</p>
              </div>

              {/* Example Member 2 */}
              <div className="card bg-base-100 hover:shadow-md rounded-none p-6 hover:shadow-lg transition duration-300">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
                  alt="Board Member 2"
                  className="w-full h-fit object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">Jane Smith</h3>
                <p className="text-gray-600 mb-4">Chief Executive Officer</p>
              </div>

              {/* Example Member 3 */}
              <div className="card bg-base-100 hover:shadow-md rounded-none p-6 hover:shadow-lg transition duration-300">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
                  alt="Board Member 3"
                  className="w-full h-fit object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">Michael Brown</h3>
                <p className="text-gray-600 mb-4">Chief Financial Officer</p>
              </div>

              {/* Example Member 4 */}
              <div className="card bg-base-100 hover:shadow-md rounded-none p-6 hover:shadow-lg transition duration-300">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
                  alt="Board Member 4"
                  className="w-full h-fit object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">Sarah Wilson</h3>
                <p className="text-gray-600 mb-4">Head of Strategy</p>
              </div>

              {/* Example Member 5 */}
              <div className="card bg-base-100 hover:shadow-md rounded-none p-6 hover:shadow-lg transition duration-300">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
                  alt="Board Member 5"
                  className="w-full h-fit object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">David Lee</h3>
                <p className="text-gray-600 mb-4">General Counsel</p>
              </div>

              {/* Example Member 6 */}
              <div className="card bg-base-100 hover:shadow-md rounded-none p-6 hover:shadow-lg transition duration-300">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
                  alt="Board Member 6"
                  className="w-full h-fit object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">Emily Johnson</h3>
                <p className="text-gray-600 mb-4">Director of Operations</p>
              </div>

              {/* Example Member 6 */}
              <div className="card bg-base-100 hover:shadow-md rounded-none p-6 hover:shadow-lg transition duration-300">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
                  alt="Board Member 6"
                  className="w-full h-fit object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">Emily Johnson</h3>
                <p className="text-gray-600 mb-4">Director of Operations</p>
              </div>

              {/* Example Member 6 */}
              <div className="card bg-base-100 hover:shadow-md rounded-none p-6 hover:shadow-lg transition duration-300">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
                  alt="Board Member 6"
                  className="w-full h-fit object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">Emily Johnson</h3>
                <p className="text-gray-600 mb-4">Director of Operations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Management */}
        <div className="flex justify-center items-center flex-col mt-20">
          <h2 className="text-center mb-8 uppercase text-primary text-3xl">
            Management
          </h2>
          <div className="w-full p-6 bg-base-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Member 1 */}
              <div className="card bg-base-100 hover:shadow-md rounded-none p-6 hover:shadow-lg transition duration-300 flex flex-row w-full justify-between items-center">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
                  alt="Management Member 1"
                  className="w-fit h-full object-cover rounded-md mb-4"
                />
                <div className="">
                  <h3 className="text-lg font-semibold mb-2">Alice Kamau</h3>
                  <p className="text-gray-600 mb-4">Chief Executive Officer</p>
                </div>
              </div>

              {/* Member 2 */}
              <div className="card bg-base-100 hover:shadow-md rounded-none p-6 hover:shadow-lg transition duration-300 flex flex-row w-full justify-between items-center">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
                  alt="Management Member 2"
                  className="w-fit h-full object-cover rounded-md mb-4"
                />
                <div className="">
                  <h3 className="text-lg font-semibold mb-2">Brian Mwangi</h3>
                  <p className="text-gray-600 mb-4">Chief Operations Officer</p>
                </div>
              </div>

              {/* Member 3 */}
              <div className="card bg-base-100 hover:shadow-md rounded-none p-6 hover:shadow-lg transition duration-300 flex flex-row w-full justify-between items-center">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
                  alt="Management Member 3"
                  className="w-fit h-full object-cover rounded-md mb-4"
                />
                <div className="">
                  <h3 className="text-lg font-semibold mb-2">
                    Cynthia Njoroge
                  </h3>
                  <p className="text-gray-600 mb-4">Chief Financial Officer</p>
                </div>
              </div>

              {/* Member 4 */}
              <div className="card bg-base-100 hover:shadow-md rounded-none p-6 hover:shadow-lg transition duration-300 flex flex-row w-full justify-between items-center">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
                  alt="Management Member 4"
                  className="w-fit h-full object-cover rounded-md mb-4"
                />
                <div className="">
                  <h3 className="text-lg font-semibold mb-2">David Otieno</h3>
                  <p className="text-gray-600 mb-4">Director of Strategy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Steering Committee */}
        <div className="flex justify-center items-center flex-col mt-20">
          <h2 className="text-center mb-8 uppercase text-primary text-3xl">
            Steering Committee
          </h2>
          <div className="w-full p-6 bg-base-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Member 1 */}
              <div className="card bg-base-100 hover:shadow-md rounded-none p-6 hover:shadow-lg transition duration-300">
                <h3 className="text-lg font-semibold mb-2">Jane Mwangi</h3>
                <p className="text-gray-600">Chairperson, Steering Committee</p>
              </div>

              {/* Member 2 */}
              <div className="card bg-base-100 hover:shadow-md rounded-none p-6 hover:shadow-lg transition duration-300">
                <h3 className="text-lg font-semibold mb-2">Michael Ochieng</h3>
                <p className="text-gray-600">Policy Advisor</p>
              </div>

              {/* Member 3 */}
              <div className="card bg-base-100 hover:shadow-md rounded-none p-6 hover:shadow-lg transition duration-300">
                <h3 className="text-lg font-semibold mb-2">Grace Wanjiru</h3>
                <p className="text-gray-600">Head of Legal Affairs</p>
              </div>

              {/* Member 4 */}
              <div className="card bg-base-100 hover:shadow-md rounded-none p-6 hover:shadow-lg transition duration-300">
                <h3 className="text-lg font-semibold mb-2">Peter Njoroge</h3>
                <p className="text-gray-600">Director of Communications</p>
              </div>

              {/* Member 5 */}
              <div className="card bg-base-100 hover:shadow-md rounded-none p-6 hover:shadow-lg transition duration-300">
                <h3 className="text-lg font-semibold mb-2">Susan Otieno</h3>
                <p className="text-gray-600">Financial Strategist</p>
              </div>

              {/* Member 6 */}
              <div className="card bg-base-100 hover:shadow-md rounded-none p-6 hover:shadow-lg transition duration-300">
                <h3 className="text-lg font-semibold mb-2">Kevin Mutua</h3>
                <p className="text-gray-600">Project Manager</p>
              </div>
            </div>
          </div>
        </div>
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

export default Team;
