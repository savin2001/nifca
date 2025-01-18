import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const About = () => {
  return (
    <div className="relative">
      {/* Hero Carousel */}
      <div className="carousel w-full h-screen">
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

      {/* Breadcrumb Menu */}
      <div className="absolute w-full bg-base-100 bg-opacity-90 p-3 flex justify-start">
        <nav className="text-sm breadcrumbs">
          <ul className="flex space-x-2">
            {/* Home */}
            <li>
              <Link
                to="/"
                className="flex items-center text-primary hover:text-secondary"
              >
                <FaHome className="mr-1" />
                Home
              </Link>
            </li>
            {/* Discover the NIFC */}
            <li>
              <Link
                to="/discover-nifc"
                className="text-primary hover:text-secondary"
              >
                Discover the NIFC
              </Link>
            </li>
            {/* The NIFC */}
            <li>
              <Link
                to="/the-nifc"
                className="text-primary hover:text-secondary"
              >
                The NIFC
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default About;
