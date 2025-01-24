import { Link } from "react-router-dom";
import BreadCrumbMenu from "../components/BreadCrumbMenu";
import ObjectivesCarousel from "../components/ObjectivesCarousel";

const About = () => {
  // Define breadcrumb links
  const breadcrumbLinks = [
    { to: "/discover-nifc", label: "Discover the NIFC" },
    { to: "#", label: "What is NIFC" },
  ];

  return (
    <div className="">
      <div className="relative">
        {/* Hero Carousel */}
        <div className="carousel w-full">
          {/* Slide 1 */}
          <div id="slide1" className="carousel-item relative w-full">
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-neutral-content text-center">
                <div>
                  <h1 className="mb-5 text-5xl font-light uppercase">
                    Discover the NIFC
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Pass breadcrumb links as a prop */}
        <BreadCrumbMenu links={breadcrumbLinks} />
      </div>

      {/* Section 2 */}
      <div className="h-screen flex flex-col justify-center items-center font-light mt-12">
        <div className="w-full flex flex-col justify-center items-center h-auto bg-base-100 sm:text-lg md:text-3xl ">
          <h2 className="text-center md:w-1/2 mb-4 uppercase text-primary">
            What is NIFC
          </h2>
          <p className="text-lg text-center md:w-2/3 mb-8">
            The Nairobi International Financial Center (NIFC) is a
            transformative initiative designed to position Nairobi as a premier
            financial hub in Africa. It aims to attract global investment by
            providing a conducive environment for financial services and
            innovation. With a focus on modern infrastructure, regulatory
            transparency, and strategic partnerships, the NIFC fosters economic
            growth and facilitates capital flow across the region. By enabling
            businesses to thrive within a dynamic and well-regulated ecosystem,
            the NIFC serves as a gateway for investors seeking access to the
            vast opportunities in Kenya and the broader African market.
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center h-auto bg-base-200 p-6">
          {/* Left Side: Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D" // Replace with your image URL
              alt="NIFC Illustration"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>

          {/* Right Side: Text */}
          <div className="w-full md:w-1/2 flex flex-col items-start md:pl-10 mt-6 md:mt-0">
            <h2 className="sm:text-xl md:text-3xl font-extralight pb-6">
              The NIFC aims to be one of the leading international financial
              centres
            </h2>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="h-auto mt-8 flex flex-col justify-center items-center font-light">
        <div className="w-full flex justify-center items-center h-1/3 bg-base-100 sm:text-lg md:text-3xl ">
          <h2 className="text-center md:w-1/2 text-primary uppercase">Explore the NIFC Ecosystem</h2>
        </div>
        <div className="w-full p-6 bg-base-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 2 */}
            <div className="card bg-base-100 shadow-md p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-lg font-semibold mb-4">Framework</h3>
              <p className="text-neutral mb-4">
                Understand the frameworks that support the NIFC.
              </p>
              <Link to="/frameworks" className="btn btn-outline btn-primary btn-sm">
                Explore ❯
              </Link>
            </div>

            {/* Card 3 */}
            <div className="card bg-base-100 shadow-md p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-lg font-semibold mb-4">Our Team</h3>
              <p className="text-neutral mb-4">
                Meet the team driving the NIFC's success.
              </p>
              <Link to="/our-team" className="btn btn-outline btn-primary btn-sm">
                Explore ❯
              </Link>
            </div>

            {/* Card 4 */}
            <div className="card bg-base-100 shadow-md p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-lg font-semibold mb-4">Key Partners</h3>
              <p className="text-neutral mb-4">
                Discover our strategic partnerships.
              </p>
              <Link to="/partners" className="btn btn-outline btn-primary btn-sm">
                Explore ❯
              </Link>
            </div>

            {/* Card 5 */}
            <div className="card bg-base-100 shadow-md p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-lg font-semibold mb-4">Laws & Regulations</h3>
              <p className="text-neutral mb-4">
                Explore the laws governing the NIFC.
              </p>
              <Link to="/laws" className="btn btn-outline btn-primary btn-sm">
                Explore ❯
              </Link>
            </div>

            {/* Card 6 */}
            <div className="card bg-base-100 shadow-md p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-lg font-semibold mb-4">Company Ledger</h3>
              <p className="text-neutral mb-4">
                Access company registration records.
              </p>
              <Link
                to="/company-ledger"
                className="btn btn-outline btn-primary btn-sm"
              >
                Explore ❯
              </Link>
            </div>

            {/* Card 7 */}
            <div className="card bg-base-100 shadow-md p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-lg font-semibold mb-4">Careers</h3>
              <p className="text-neutral mb-4">
                Join us and build your career at the NIFC.
              </p>
              <Link to="/careers" className="btn btn-outline btn-primary btn-sm">
                Explore ❯
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div className="h-screen flex flex-col justify-center items-center font-light bg-base-200">
        <div className="w-2/3 flex justify-center items-center h-2/5 sm:text-lg md:text-3xl ">
          <h2 className="text-center md:w-2/3">
            Promote economic and financial sector growth through a world-class
            innovative financial centre
          </h2>
        </div>
        <ObjectivesCarousel />
        <div className="bg-base-300 w-full  p-12 flex justify-between space-x-8">
          <button className="capitalize flex-grow btn btn-ghost btn-lg text-3xl font-light">
            Start application ❯
          </button>
          <Link to="/contact" className="capitalize flex-grow btn btn-ghost  btn-lg text-3xl font-light">
            Make an enquiry ❯
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
