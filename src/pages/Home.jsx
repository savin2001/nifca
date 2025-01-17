import React from "react";
import { Link } from "react-router-dom"; // Import Link
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Hero />

      {/* Section 2: The NIFC Offering */}
      <div className="h-screen flex flex-col items-center bg-base-100 mb-14">
        <div className="w-full max-w-screen-lg text-center py-16">
          <h2 className="text-2xl md:text-4xl font-light uppercase text-primary mb-8">
            The NIFC Offering
          </h2>
          <p className="text-md md:text-lg text-gray-600 mb-12 leading-relaxed">
            Unlock opportunities with unparalleled support, a trusted regulatory
            environment, and seamless access to a global network.
          </p>

          {/* Offering Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-none p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-4">Talent Pool</h3>
              <p className="text-gray-600">
                Access to a highly skilled and diverse workforce equipped to
                meet business needs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-none p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-4">Innovation Hub</h3>
              <p className="text-gray-600">
                A thriving ecosystem fostering innovation and collaboration
                across sectors.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-none p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-4">Strategic Location</h3>
              <p className="text-gray-600">
                Positioned as a gateway to Africa, connecting businesses to
                global opportunities.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-lg rounded-none p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-4">Sustainability</h3>
              <p className="text-gray-600">
                Commitment to sustainable practices ensuring long-term economic
                and environmental growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Articles Section */}
      <div className="bg-base-200 py-16">
        <div className="max-w-screen-lg mx-auto text-left">
          <h2 className="text-2xl md:text-4xl font-light uppercase text-primary pb-12">
            Featured Articles
          </h2>
          <p className="text-md md:text-lg text-gray-600 mb-8">
            Explore the latest insights, press releases, and thought leadership
            from the NIFC.
          </p>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <div className="bg-white shadow-lg rounded-none overflow-hidden">
              <img
                src="https://www.cigionline.org/static/images/Hanson_cigionline_FinTeh_Africa_f.2e16d0ba.fill-1600x900.jpg"
                alt="Article 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">
                  The Future of Finance in Africa
                </h3>
                <p className="text-gray-600">
                  Africa's financial landscape is rapidly evolving. Discover the
                  trends shaping the future of finance and investment in the
                  region.
                </p>
                <Link
                  to="/articles/the-future-of-finance"
                  className="text-primary font-medium mt-4 inline-block"
                >
                  Read More →
                </Link>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-white shadow-lg rounded-none overflow-hidden">
              <img
                src="https://kenyanwallstreet.com/wp-content/uploads/2022/04/nairobi-international-financial-centre.jpg"
                alt="Article 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Why Nairobi is the Business Hub of Africa
                </h3>
                <p className="text-gray-600">
                  Nairobi continues to attract global businesses. Learn why it's
                  the preferred destination for investors across various
                  industries.
                </p>
                <Link
                  to="/articles/nairobi-business-hub"
                  className="text-primary font-medium mt-4 inline-block"
                >
                  Read More →
                </Link>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-white shadow-lg rounded-none overflow-hidden">
              <img
                src="https://www.undp.org/sites/g/files/zskgke326/files/migration/sgtechcentre/Accelerator-Lab---Kenya-5---small.jpg"
                alt="Article 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Innovations Driving Growth in Kenya
                </h3>
                <p className="text-gray-600">
                  Kenya is at the forefront of technological and economic
                  innovation. Explore the key drivers of growth in this dynamic
                  market.
                </p>
                <Link
                  to="/articles/kenya-innovations-growth"
                  className="text-primary font-medium mt-4 inline-block"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>

          {/* View More Articles */}
          <div className="mt-12">
            <Link
              to="/articles"
              className="btn btn-primary text-white font-medium uppercase px-6 py-3"
            >
              View More Articles
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-base-100 py-16">
        <div className="max-w-screen-lg mx-auto text-left">
          <h2 className="text-2xl md:text-4xl font-light uppercase text-primary pb-12">
            What’s on in NIFCA
          </h2>

          <div className="carousel carousel-end w-full h-fit rounded-none">
            {/* Slide 1 */}
            <div className="carousel-item w-full">
              <div className="card lg:card-side bg-base-100 h-fit">
                <figure className="w-1/2">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                    alt="Article 1"
                    className="object-cover h-fit w-fit"
                  />
                </figure>
                <div className="card-body w-1/2">
                  <h2 className="card-title">The Future of Finance</h2>
                  <p>
                    Discover how financial systems in Africa are transforming,
                    enabling businesses to thrive and investors to prosper.
                  </p>
                  <div className="card-actions justify-start">
                    <button className="btn btn-primary">Read More</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item w-full">
              <div className="card lg:card-side bg-base-100 h-fit">
                <figure className="w-1/2">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                    alt="Article 1"
                    className="object-cover h-fit w-fit"
                  />
                </figure>
                <div className="card-body w-1/2">
                  <h2 className="card-title">The Future of Finance</h2>
                  <p>
                    Discover how financial systems in Africa are transforming,
                    enabling businesses to thrive and investors to prosper.
                  </p>
                  <div className="card-actions justify-start">
                    <button className="btn btn-primary">Read More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item w-full">
              <div className="card lg:card-side bg-base-100 h-fit">
                <figure className="w-1/2">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                    alt="Article 1"
                    className="object-cover h-fit w-fit"
                  />
                </figure>
                <div className="card-body w-1/2">
                  <h2 className="card-title">The Future of Finance</h2>
                  <p>
                    Discover how financial systems in Africa are transforming,
                    enabling businesses to thrive and investors to prosper.
                  </p>
                  <div className="card-actions justify-start">
                    <button className="btn btn-primary">Read More</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <button className="btn btn-circle">❮</button>
            </div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <button className="btn btn-circle">❯</button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Target Sectors */}
      <div className="h-screen flex flex-col justify-center items-center font-light">
        <div className="w-full flex flex-col items-center bg-base-200">
          <h2 className="sm:text-xl md:text-4xl uppercase m-16 font-extralight">
            Target Sectors
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

      {/* Final Section */}
      <div className="h-2/3 flex flex-col justify-center items-center font-light mb-16">
        <div className="w-full flex flex-col items-center bg-base-100">
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
                      <h2 className="card-title ">Starting a Business</h2>
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
