import React from "react";
import BreadCrumbMenu from "../components/BreadCrumbMenu";
import { Link } from "react-router-dom";

const Tourism = () => {
  const breadcrumbLinks = [
    { to: "/why-nairobi", label: "Why Choose Nairobi" },
    { to: "#", label: "Tourism" },
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
                <h1 className="mb-5 text-5xl font-light uppercase">Tourism</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pass breadcrumb links as a prop */}
      <BreadCrumbMenu links={breadcrumbLinks} />
      <div className="max-w-screen-lg mx-auto text-left flex flex-col mt-20">
        <p className="text-neutral text-lg font-light">
          Kenya is one of the world’s premier tourism destinations, offering
          diverse experiences from stunning beaches and blue waters to expansive
          savannahs and the majestic peaks of Mount Kenya.
        </p>
        <br />

        <p className="text-neutral text-lg font-light">
          <strong className="font-semibold mb-2">Wildlife:</strong> <br />{" "}
          Kenya’s greatest attraction is its rich wildlife, with numerous
          world-class national parks hosting the Big Five, many of which can be
          observed in their natural habitats. Nairobi itself boasts a game park
          within the city limits.
        </p>
        <br />

        <p className="text-neutral text-lg font-light">
          <strong className="font-semibold mb-2">Mount Kenya:</strong> <br /> As
          Africa’s second tallest mountain, Mount Kenya offers a unique
          challenge for tourists and climbers, featuring scenic trails and the
          chance to observe wildlife found nowhere else.
        </p>
        <br />

        <p className="text-neutral text-lg font-light">
          <strong className="font-semibold mb-2">Beaches:</strong> <br />{" "}
          Kenya’s coastline is home to some of the world’s most beautiful
          beaches. The northern coast, around Mombasa, offers cultural
          immersion, while the southern coast provides tranquility. Lamu and
          Malindi are also known for their picturesque fishing villages and
          serene landscapes.
        </p>
        <br />

        <p className="text-neutral text-lg font-light">
          <strong className="font-semibold mb-2">Historic Sites:</strong> <br />{" "}
          Kenya's rich cultural history is reflected in its many historic sites,
          such as the National Museums of Nairobi, Fort Jesus, and the Gedi
          Ruins. Natural landmarks like the Great Rift Valley and Mount Kenya
          further highlight the country’s diverse landscapes.
        </p>
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

export default Tourism;
