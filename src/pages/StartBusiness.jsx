import React from "react";
import BreadCrumbMenu from "../components/BreadCrumbMenu";

const StartBusiness = () => {
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
                  Starting a Business
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BreadCrumbMenu />
      <div className="max-w-screen-lg mx-auto text-left flex flex-col mt-20">
        <p className="text-neutral text-lg font-light">
          Starting a business in Kenya offers a world of opportunities, driven
          by the country's vibrant entrepreneurial spirit and a growing economy.
          Whether you're a local entrepreneur or an international investor,
          Kenya provides an ideal environment to launch and scale a business.
        </p>
        <br />

        <p className="text-neutral">
          Kenya's strategic location in East Africa is one of its greatest
          assets. As a gateway to the region, the country offers access to a
          large market with diverse opportunities. Nairobi, the capital city,
          serves as the economic heart of Kenya, with excellent infrastructure,
          including modern roads, railways, and Jomo Kenyatta International
          Airport, connecting the country to the rest of the world.
        </p>
        <br />

        <p className="text-neutral">
          The entrepreneurial landscape in Kenya is thriving, especially in
          sectors such as technology, agriculture, and financial services.
          Nairobi, often referred to as the "Silicon Savannah," is home to a
          rapidly growing tech ecosystem, with numerous startups, accelerators,
          and innovation hubs. The fintech sector is particularly strong, with
          companies leveraging mobile money platforms like M-Pesa to transform
          financial services for millions of people.
        </p>
        <br />

        <p className="text-neutral">
          One of the key factors driving business success in Kenya is the
          country's young and dynamic population. With a growing number of
          universities and institutions providing quality education, Kenya has a
          skilled workforce ready to support businesses across various
          industries. This talent pool is instrumental in driving innovation and
          helping businesses scale.
        </p>
        <br />

        <p className="text-neutral">
          Additionally, Kenya's government has implemented a range of reforms to
          make it easier to start a business. The introduction of online
          business registration, tax incentives, and support for small and
          medium-sized enterprises (SMEs) has reduced barriers to entry for
          entrepreneurs. This, coupled with a stable banking sector and access
          to capital markets, makes Kenya an attractive destination for new
          businesses.
        </p>
        <br />

        <p className="text-neutral">
          The country also offers a favorable business climate for investment,
          with a growing focus on sustainability and green initiatives. The
          government is actively promoting environmentally friendly business
          practices, making Kenya an ideal destination for green investments.
          From renewable energy projects to waste management solutions,
          businesses with a focus on sustainability can thrive in Kenya.
        </p>
        <br />

        <p className="text-neutral">
          The Kenyan lifestyle is another draw for entrepreneurs. The country
          offers a unique blend of urban sophistication and natural beauty, with
          attractions like Nairobi National Park, beaches along the coast, and
          scenic landscapes. This balance of work and leisure makes Kenya an
          attractive destination for both business and personal life.
        </p>
        <br />

        <p className="text-neutral">
          In conclusion, Kenya is a land of opportunity for entrepreneurs and
          investors. With its strategic location, thriving tech ecosystem,
          skilled workforce, and favorable business environment, Kenya is an
          ideal place to start and grow a business. Whether you're looking to
          build a local venture or expand into the broader East African market,
          Kenya offers endless possibilities for success.
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

export default StartBusiness;
