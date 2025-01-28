import React, { useRef } from "react";

export default function ObjectivesCarousel() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth / 5, // Scroll by the width of one item
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth / 5, // Scroll by the width of one item
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center h-fit bg-base-100 sm:text-lg md:text-3xl relative py-12">
      <h2 className="text-center uppercase md:w-2/3 mb-12">Objectives</h2>

      {/* Carousel container */}
      <div
        ref={carouselRef}
        className="carousel carousel-end rounded-box flex overflow-x-auto scrollbar-hide space-x-4 w-full max-w-6xl"
      >
        {[
          {
            title: "Attract Global Investment into Kenya",
            description:
              "Create a conducive environment for international investors to thrive in Kenya and Africa.",
            image:
              "https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D",
          },
          {
            title: "Foster Financial Innovation",
            description:
              "Support the development and adoption of innovative financial services and products.",
            image:
              "https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D",
          },
          {
            title: "Enable Regional Growth",
            description:
              "Act as a catalyst for economic and financial sector growth across Africa.",
            image:
              "https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D",
          },
          {
            title: "Promote Transparency",
            description:
              "Ensure a well-regulated and transparent ecosystem for businesses and investors.",
            image:
              "https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D",
          },
          {
            title: "Establish Nairobi as Africa’s Premier Hub for Financial Services",
            description:
              "Position Nairobi as a gateway to financial opportunities across Africa.",
            image:
              "https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D",
          },
        ].map(({ title, description, image }, index) => (
          <div
            key={index}
            className="carousel-item flex-shrink-0 w-[calc(100%/5)] max-w-[20%]"
          >
            <div className="card w-full h-fit bg-base-100 shadow-md flex flex-col justify-end p-4 group">
              {/* Image */}
              <img
                src={image}
                alt={`Objective ${index + 1}`}
                className="w-full h-32 object-cover rounded-md mb-4 transition-opacity duration-300 group-hover:opacity-50"
              />

              {/* Text Content */}
              <h3 className="text-sm font-bold">{title}</h3>
              {/* <p className="text-sm text-gray-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {description}
              </p> */}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="absolute right-1/4 top-1/4 transform -translate-y-1/2">
        <button
          onClick={scrollLeft}
          className=" btn btn-circle btn-sm animate-none"
        >
          ❮
        </button>
        <button
          onClick={scrollRight}
          className="btn btn-circle btn-sm animate-none"
        >
          ❯
        </button>
      </div>
    </div>
  );
}
