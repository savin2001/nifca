import React from "react";
import BreadCrumbMenu from "../components/BreadCrumbMenu";

const WhyNairobi = () => {
  // Define breadcrumb links
  const breadcrumbLinks = [
    { to: "/why-nairobi", label: "Why Choose Nairobi" }
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
                <h1 className="mb-5 text-5xl font-light uppercase">
                  Why Nairobi
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pass breadcrumb links as a prop */}
      <BreadCrumbMenu links={breadcrumbLinks} />
      <div className="max-w-screen-lg mx-auto text-left flex flex-col mt-20">
        <p className="text-neutral text-lg font-light">
          Nairobi, often referred to as the "Green City in the Sun," is more
          than just Kenya’s capital. It is a dynamic hub for business,
          innovation, and culture, making it one of Africa’s most attractive
          destinations for investment and growth.
        </p>
        <br />

        <p className="text-neutral">
          One of Nairobi's greatest advantages is its strategic location. As a
          gateway to East Africa, the city offers unparalleled connectivity to
          major markets in the region. Its well-established infrastructure,
          including Jomo Kenyatta International Airport and a growing network of
          roads and railways, makes it an essential logistics and trade hub.
        </p>
        <br />

        <p className="text-neutral">
          Nairobi is also a global leader in innovation. Known as the "Silicon
          Savannah," the city has become a hotbed for tech startups and
          entrepreneurial ventures. Home to the renowned iHub and numerous
          fintech companies, Nairobi’s thriving tech ecosystem continues to
          attract investment and foster groundbreaking solutions for local and
          global challenges.
        </p>
        <br />

        <p className="text-neutral">
          As the economic heart of Kenya, Nairobi hosts regional headquarters
          for multinational corporations, NGOs, and international organizations.
          Its role as a financial hub is further enhanced by a stable banking
          sector, access to capital markets, and a growing focus on sustainable
          investments. These factors make the city an ideal base for businesses
          looking to expand into Africa.
        </p>
        <br />

        <p className="text-neutral">
          Beyond business, Nairobi boasts a vibrant lifestyle and cultural
          scene. The city offers a unique blend of urban sophistication and
          natural beauty. Attractions like Nairobi National Park, the Karen
          Blixen Museum, and bustling markets showcase the city’s rich heritage
          and outdoor appeal. This balance makes it an attractive location for
          both professionals and families seeking a high quality of life.
        </p>
        <br />

        <p className="text-neutral">
          Nairobi’s young and skilled workforce is another key advantage. With a
          growing number of universities and institutions providing quality
          education, the city has a talent pool that fuels innovation and growth
          across industries. This energetic and forward-thinking population is a
          driving force behind Nairobi's ongoing transformation.
        </p>
        <br />

        <p className="text-neutral">
          Sustainability is also becoming a priority for Nairobi’s development.
          With initiatives focusing on green energy, waste management, and urban
          planning, the city is positioning itself as a leader in sustainable
          urbanization in Africa. These efforts align with global goals, making
          Nairobi an attractive destination for green investments.
        </p>
        <br />

        <p className="text-neutral">
          In conclusion, Nairobi’s blend of strategic location,
          innovation-driven economy, skilled workforce, and vibrant culture
          makes it a city of endless opportunities. Whether you’re an investor,
          entrepreneur, or professional, Nairobi offers the ideal environment to
          grow, thrive, and make an impact in one of the world’s most dynamic
          regions.
        </p>
      </div>

      {/* Section 3 */}
      <div className="mt-12 flex flex-col justify-center items-center font-light">
        <div className="bg-base-300 w-full  p-12 flex justify-between space-x-8">
          <button className="capitalize flex-grow btn btn-ghost btn-lg text-3xl font-light">
            Start application ❯
          </button>
          <button className="capitalize flex-grow btn btn-ghost  btn-lg text-3xl font-light">
            Make an enquiry ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyNairobi;
