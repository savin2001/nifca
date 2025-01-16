import React from "react";
import { Link } from "react-router-dom"; // Import Link
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      {/* Section 1 */}
      <div className="h-screen flex flex-col justify-center items-center font-light">
        <div className="w-full flex justify-center items-center h-1/3 bg-base-100 sm:text-lg md:text-3xl ">
          <h2 className="text-center md:w-2/3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
            aspernatur recusandae sequi quaerat iusto impedit, doloribus quas
            odit neque possimus!
          </h2>
        </div>
        <div className="w-full flex flex-col items-center h-2/3 bg-base-200">
          <h2 className="sm:text-xl md:text-4xl uppercase m-24 font-extralight">
            Access to Africa
          </h2>
          <div className="sm:text-md md:text-2xl w-full columns-2 ">
            <div className="text-left">a</div>
            <div className="text-left columns-1">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing latte.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing test.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="h-2/3 flex flex-col justify-center items-center font-light mb-20">
        <div className="w-full flex flex-col items-center bg-base-100">
          <h2 className="sm:text-xl md:text-4xl uppercase p-24">
            Nairobi Pitch Here
          </h2>
          <div className="sm:text-md md:text-3xl w-full flex justify-center items-center text-center m-14">
            <div className="w-2/3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                blanditiis amet illo nisi autem nulla fugiat id, aperiam esse
                voluptate quidem odio rem non repellendus cum recusandae
                praesentium, ducimus neque.
              </p>
            </div>
          </div>
          <div className="sm:text-md md:text-xl w-full flex justify-center items-center text-center m-14">
            <div className="flex w-2/3 gap-24">
              <div className="flex flex-col justify-center items-center">
                <div className="w-24 h-24 bg-base-300 rounded-full mb-8"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="w-24 h-24 bg-base-300 rounded-full mb-8"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="w-24 h-24 bg-base-300 rounded-full mb-8"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          {/* Replaced a tag with Link */}
          <Link
            className="btn btn-outline-neutral sm:text-xl md:text-3xl uppercase mb-24"
            to="/why-nairobi"
          >
            Why Nairobi
          </Link>
        </div>
      </div>
      {/* Additional Sections */}
      <div className="h-screen flex flex-col justify-center items-center font-light">
        <div className="w-full flex flex-col items-center bg-base-200">
          <h2 className="sm:text-xl md:text-4xl uppercase m-16 font-extralight">
            Target Sector
          </h2>
          <div className="sm:text-md md:text-2xl w-full flex justify-center items-center text-center">
            <div className="w-2/3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                blanditiis amet illo nisi autem nulla fugiat id, aperiam esse
                voluptate.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-2/3 flex flex-col justify-center items-center font-light mb-16">
        <div className="w-full flex flex-col items-center bg-base-100">
          <h2 className="sm:text-xl md:text-4xl uppercase m-16 font-extralight">
            Setting up in the NIFC
          </h2>
        </div>
      </div>
      <hr className="col-span-4 border-t-2 border-base-300 my-4" />
    </>
  );
};

export default Home;
