import { Link } from "react-router-dom";
import BreadCrumbMenu from "../components/BreadCrumbMenu";

const Events = () => {
  return (
    <div className="bg-base-200 h-screen flex justify-center items-center uppercase sm:text-lg md:text-6xl font-light">
      <div className="relative">
        {/* Hero Carousel */}
        <div className="carousel w-full h-1/2">
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
                  Events
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BreadCrumbMenu />
      </div>
    </div>
  );
};

export default Events;
