import React from "react";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      {/*  */}
      <div className="h-screen flex flex-col justify-center items-center font-light">
        <div className="w-full flex justify-center items-center h-1/3 bg-base-100 sm:text-lg md:text-3xl ">
          <h2 className="text-center md:w-2/3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
            aspernatur recusandae sequi quaerat iusto impedit, doloribus quas
            odit neque possimus!
          </h2>
        </div>
        <div className=" w-full flex  flex-col items-center h-2/3 bg-base-200">
          <h2 className="sm:text-xl md:text-4xl uppercase m-24 font-extralight">
            Access to Africa
          </h2>
          <div className="sm:text-md md:text-2xl  w-full columns-2 ">
            <div className="text-left">a</div>
            <div className="text-left columns-1">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing latte.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing test.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="h-2/3 flex flex-col justify-center items-center font-light mb-20">
        <div className=" w-full flex  flex-col items-center bg-base-100">
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
          <a className="btn btn-outline-neutral sm:text-xl md:text-3xl uppercase mb-24" href="/why-nairobi">
            Why Nairobi
          </a>
        </div>
      </div>
      {/*  */}
      <div className="h-screen flex flex-col justify-center items-center font-light">
        <div className=" w-full flex  flex-col items-center bg-base-200">
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
          <div className="sm:text-md md:text-xl w-full flex justify-center items-center text-center m-14">
            <div className="flex w-2/3 gap-24">
              <div className="grid grid-cols-3 grid-rows-2 h-fit gap-4 p-4">
                {/* First column spanning 2 rows */}
                <div className="row-span-2">
                  <div className="card bg-base-300 shadow-md h-full rounded-none">
                    <div className="card-body">
                      <h2 className="card-title ">Column 1</h2>
                    </div>
                  </div>
                </div>

                {/* Second column */}
                <div>
                  <div className="card bg-base-300 shadow-md h-full rounded-none">
                    <div className="card-body">
                      <h2 className="card-title ">Column 2, Row 1</h2>
                      <p>Content for row 1 in column 2.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card bg-base-300 shadow-md h-full rounded-none">
                    <div className="card-body">
                      <h2 className="card-title ">Column 2, Row 2</h2>
                      <p>Content for row 2 in column 2.</p>
                    </div>
                  </div>
                </div>

                {/* Third column */}
                <div>
                  <div className="card bg-base-300 shadow-md h-full rounded-none">
                    <div className="card-body">
                      <h2 className="card-title ">Column 3, Row 1</h2>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card bg-base-300 shadow-md h-full rounded-none">
                    <div className="card-body">
                      <h2 className="card-title ">Column 3, Row 2</h2>
                      <p>Content for row 2 in column 3.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="h-2/3 flex flex-col justify-center items-center font-light mb-16">
        <div className=" w-full flex  flex-col items-center bg-base-100">
          <h2 className="sm:text-xl md:text-4xl uppercase m-16 font-extralight">
            Setting up in the NIFC
          </h2>

          <div className="sm:text-md md:text-xl w-full flex justify-center items-center text-center">
            <div className="flex w-2/3 justify-center items-center">
              <div className="grid grid-cols-4 grid-rows-1 h-full gap-4 p-4">
                {/* Column 1 */}
                <div>
                  <div className="card bg-base-300 shadow-md h-full rounded-none">
                    <div className="card-body">
                      <h2 className="card-title ">Target Sector</h2>
                    </div>
                  </div>
                </div>

                {/* Column 2 */}
                <div>
                  <div className="card bg-base-300 shadow-md h-full rounded-none">
                    <div className="card-body">
                      <h2 className="card-title ">STarting a Business</h2>
                    </div>
                  </div>
                </div>

                {/* Column 3 */}
                <div>
                  <div className="card bg-base-300 shadow-md h-full rounded-none">
                    <div className="card-body">
                      <h2 className="card-title ">Application Process</h2>
                    </div>
                  </div>
                </div>

                {/* Column 4 */}
                <div>
                  <div className="card bg-base-300 shadow-md h-full rounded-none">
                    <div className="card-body">
                      <h2 className="card-title ">Operating in the NIFC</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="col-span-4 border-t-2 border-base-300 my-4" />
    </>
  );
};

export default Home;
