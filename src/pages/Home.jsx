import React, { useRef } from "react";
import { Link } from "react-router-dom"; // Import Link
import Hero from "../components/Hero";

const Home = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Hero />

      {/* Section 2: The NIFC Offering */}
      <div className="h-screen flex flex-col items-center bg-base-100 mb-14">
        <div className="w-full max-w-screen-lg text-center py-16">
          <h2 className="text-2xl md:text-4xl font-light uppercase text-primary mb-8">
            The NIFC Offering
          </h2>
          <p className="text-md md:text-lg text-neutral mb-12 leading-relaxed">
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
              <p className="text-neutral">
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
              <p className="text-neutral">
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
              <p className="text-neutral">
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
              <p className="text-neutral">
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
          <p className="text-md md:text-lg text-neutral mb-8">
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
                <p className="text-primary font-light text-xs uppercase pb-4">
                  3 JAN 2025
                </p>
                <h3 className="text-lg font-semibold mb-4">
                  The Future of Finance in Africa
                </h3>
                <p className="text-neutral">
                  Africa's financial landscape is rapidly evolving. Discover the
                  trends shaping the future of finance and investment in the
                  region.
                </p>
                <Link
                  to="/article/#"
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
                <p className="text-primary font-light text-xs uppercase pb-4">
                  15 DEC 2024
                </p>
                <h3 className="text-lg font-semibold mb-4">
                  Why Nairobi is the Business Hub of Africa
                </h3>
                <p className="text-neutral">
                  Nairobi continues to attract global businesses. Learn why it's
                  the preferred destination for investors across various
                  industries.
                </p>
                <Link
                  to="/article"
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
                <p className="text-primary font-light text-xs uppercase pb-4">
                  7 nov 2024
                </p>
                <h3 className="text-lg font-semibold mb-4">
                  Innovations Driving Growth in Kenya
                </h3>
                <p className="text-neutral">
                  Kenya is at the forefront of technological and economic
                  innovation. Explore the key drivers of growth in this dynamic
                  market.
                </p>
                <Link
                  to="/article"
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
              to="/press-releases"
              className="btn btn-primary text-white font-medium uppercase px-6 py-3"
            >
              View More Articles
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-base-100 py-16">
        <div className="max-w-screen-lg mx-auto text-left relative">
          <h2 className="text-2xl md:text-4xl font-light uppercase text-primary pb-12">
            What’s on in NIFC
          </h2>

          <div
            ref={carouselRef}
            className="carousel carousel-end w-full h-fit rounded-none flex overflow-x-auto space-x-4 scrollbar-hide"
          >
            {/* Slide 1 */}
            <div className="carousel-item w-full flex-shrink-0">
              <div className="card lg:card-side bg-base-100 h-fit">
                <figure className="w-1/2">
                  <img
                    src="https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Article 1"
                    className="object-cover w-full h-48"
                  />
                </figure>
                <div className="card-body w-1/2">
                  <h2 className="card-title">The Future of Finance</h2>
                  <p>
                    Discover how financial systems in Africa are transforming,
                    enabling businesses to thrive and investors to prosper.
                  </p>
                  <p>
                    Discover how financial systems in Africa are transforming,
                    enabling businesses to thrive and investors to prosper.
                  </p>
                </div>
              </div>
            </div>

            {/* Add more slides as needed */}
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="carousel-item w-full flex-shrink-0">
                <div className="card lg:card-side bg-base-100 h-fit">
                  <figure className="w-1/2">
                    <img
                      src="https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D"
                      alt={`Article ${index + 2}`}
                      className="object-cover h-full w-full"
                    />
                  </figure>
                  <div className="card-body w-1/2">
                    <h2 className="card-title">Article {index + 2}</h2>
                    <p>
                      Explore insights into transformative trends shaping the
                      future of finance.
                    </p>
                    <p>
                      Explore insights into transformative trends shaping the
                      future of finance.
                    </p>
                    {/* <div className="card-actions justify-start">
                      <button className="btn btn-primary">Read More</button>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute left-4 top-1/3 transform -translate-y-1/2 btn btn-circle"
            onClick={scrollLeft}
          >
            ❮
          </button>
          <button
            className="absolute right-4 top-1/3 transform -translate-y-1/2 btn btn-circle"
            onClick={scrollRight}
          >
            ❯
          </button>
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
                Our focus is on sectors that drive sustainable growth and
                innovation. We aim to empower organizations with tailored
                solutions to meet their unique challenges and opportunities.
              </p>
            </div>
          </div>
          <div className="sm:text-md md:text-xl w-full flex justify-center items-center text-center m-14">
            <div className="grid grid-cols-3 grid-rows-2 h-fit gap-4 p-4">
              {/* First column spanning 2 rows */}
              <div className="row-span-2 hover:text-primary">
                <Link
                  to="/green-finance"
                  className="card bg-base-300 shadow-md h-full rounded-none"
                >
                  <div className="card-body">
                    <h2 className="card-title ">Green Finance</h2>
                  </div>
                </Link>
              </div>

              {/* Second column */}
              <div className="hover:text-primary">
                <Link
                  to="/investment-funds"
                  className="card bg-base-300 shadow-md h-full rounded-none"
                >
                  <div className="card-body">
                    <h2 className="card-title ">Investment Funds</h2>
                  </div>
                </Link>
              </div>
              <div className="hover:text-primary">
                <Link
                  to="/multinationals"
                  className="card bg-base-300 shadow-md h-full rounded-none"
                >
                  <div className="card-body">
                    <h2 className="card-title ">Multinational HQs</h2>
                  </div>
                </Link>
              </div>

              {/* Third column */}
              <div className="hover:text-primary">
                <Link
                  to="/professional-services"
                  className="card bg-base-300 shadow-md h-full rounded-none"
                >
                  <div className="card-body">
                    <h2 className="card-title ">Professional Services</h2>
                  </div>
                </Link>
              </div>
              <div className="hover:text-primary">
                <Link
                  to="/other"
                  className="card bg-base-300 shadow-md h-full rounded-none"
                >
                  <div className="card-body">
                    <h2 className="card-title ">Other</h2>
                  </div>
                </Link>
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
                  <Link to="/target-sector">
                    <div className="card bg-base-100 image-full h-fit rounded-none transition-shadow ease-in-out duration-300 hover:rounded-lg hover:shadow-xl">
                      <figure>
                        <img
                          src="https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D"
                          alt="Green Finance"
                        />
                      </figure>
                      <div className="card-body flex w-full justify-center rounded-none">
                        <h2 className="card-title">Target sectors</h2>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Column 2 */}
                <div>
                  <Link to="/start-business">
                    <div className="card bg-base-100 image-full h-fit rounded-none transition-shadow ease-in-out duration-300 hover:rounded-lg hover:shadow-xl">
                      <figure>
                        <img
                          src="https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D"
                          alt="Green Finance"
                        />
                      </figure>
                      <div className="card-body flex w-full justify-center rounded-none">
                        <h2 className="card-title">Start a Business</h2>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Column 3 */}
                <div>
                  <Link to="/application-process">
                    <div className="card bg-base-100 image-full h-fit rounded-none transition-shadow ease-in-out duration-300 hover:rounded-lg hover:shadow-xl">
                      <figure>
                        <img
                          src="https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D"
                          alt="Green Finance"
                        />
                      </figure>
                      <div className="card-body flex w-full justify-center rounded-none">
                        <h2 className="card-title">Application Process</h2>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Column 4 */}
                <div>
                  <Link to="/operating-in-nifc">
                    <div className="card bg-base-100 image-full h-fit rounded-none transition-shadow ease-in-out duration-300 hover:rounded-lg hover:shadow-xl">
                      <figure>
                        <img
                          src="https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D"
                          alt="Green Finance"
                        />
                      </figure>
                      <div className="card-body flex w-full justify-center rounded-none">
                        <h2 className="card-title">Operating in the NIFC</h2>
                      </div>
                    </div>
                  </Link>
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
