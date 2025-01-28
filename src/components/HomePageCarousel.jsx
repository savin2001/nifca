import React, { useRef, useState } from "react";

// Modal Component
const Modal = ({ isOpen, onClose, title, description, image }) => {
  if (!isOpen) return null;

  return (
    <dialog className="modal" open>
      <div className="modal-box">
        <button
          className="btn btn-sm btn-circle btn-outline btn-primary absolute right-2 top-2"
          onClick={onClose}
        >
          ✕
        </button>
        <h3 className="font-bold text-lg text-primary font-medium">{title}</h3>
        <p className="py-4">{description}</p>
        <img src={image} alt={title} className="object-cover w-full h-48" />
      </div>
    </dialog>
  );
};

const CarouselItem = ({ title, description, image, onMoreClick }) => {
  // Split the description after the first sentence
  const firstSentence = description.split(".")[0] + ".";
  const remainingDescription = description.slice(firstSentence.length);

  return (
    <div className="carousel-item w-full flex-shrink-0 shadow-md">
      <div className="card lg:card-side bg-base-100 h-fit">
        <figure className="w-1/2">
          <img src={image} alt={title} className="object-cover w-full h-48" />
        </figure>
        <div className="card-body w-1/2">
          <h2 className="card-title">{title}</h2>
          <p>{firstSentence}</p> {/* Display the first sentence */}
          <button
            className="text-primary font-medium mt-4 inline-block text-left"
            onClick={onMoreClick}
          >
            More →{/* Display the remaining description in the modal */}
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Carousel Component
const Carousel = ({ items }) => {
  const carouselRef = useRef(null);
  const [modalData, setModalData] = useState(null);

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

  const openModal = (item) => setModalData(item);
  const closeModal = () => setModalData(null);

  return (
    <div className="bg-base-100 py-16">
      <div className="max-w-screen-lg mx-auto text-left relative">
        <h2 className="text-2xl md:text-4xl font-light uppercase text-primary pb-12">
          What’s on in NIFC
        </h2>
        <div
          ref={carouselRef}
          className="carousel carousel-end w-full h-full rounded-none flex overflow-x-auto space-x-4 scrollbar-hide"
        >
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              onMoreClick={() => openModal(item)}
            />
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

      {/* Modal */}
      {modalData && (
        <Modal
          isOpen={!!modalData}
          onClose={closeModal}
          title={modalData.title}
          description={modalData.description}
          image={modalData.image}
        />
      )}
    </div>
  );
};

// Example Usage
const HomePageCarousel = () => {
  const carouselItems = [
    {
      title: "The Future of Finance",
      description:
        "Discover how financial systems in Africa are transforming, enabling businesses to thrive and investors to prosper.",
      image:
        "https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "A Leader in Sustainability",
      description:
        "Kenya is at the forefront of Africa's green evolution, championing sustainability across its financial ecosystem. Kenya is a pioneer in renewable energy, leading in geothermal, wind, and solar power.The country's diverse ecosystems, from vast savannahs to lush forests, are preserved through progressive conservation initiatives. With a growing emphasis on sustainable finance, eco-friendly business practices, and sustainable agriculture, Kenya is building a future where economic growth and environmental stewardship go hand in hand.",
      image:
        "https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Africa’s Silicon Savannah",
      description:
        "Kenya is a powerhouse in technological innovation, known for its dynamic tech ecosystem and entrepreneurial spirit. From mobile money solutions to cutting-edge advancements in fintech, agritech, and e-commerce, the country has become a leader in leveraging technology for development. With a highly skilled, youthful workforce and a growing number of tech hubs and startups, Kenya is positioning itself as the digital gateway to Africa, fostering creativity and tech-driven solutions that address both local and global challenges. Financial access in Kenya has reached an incredible 85% in 2024, highlighting Kenya’s permeative strength in digital technology. Kenya has also established itself as Africa’s premier destination for start-ups, attracting $634 million in funding in 2024 - the highest on the continent, representing 29% of Africa’s total funding.",
      image:
        "https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "A Premier Destination for Investment",
      description:
        "Kenya stands as a leading investment destination in Africa, offering immense potential for Private Equity and Venture Capital Funds. With a robust economy, a young and growing population and access to the NIFC’s evolving business environment, Kenya offers unique opportunities across in a diverse range of sectors such as technology, agriculture, infrastructure, and financial services. Its strategic location, thriving entrepreneurial ecosystem, and supportive regulatory framework make Kenya an ideal hub for investors seeking high growth and long-term returns in Africa’s emerging markets.",
      image:
        "https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return <Carousel items={carouselItems} />;
};

export default HomePageCarousel;
