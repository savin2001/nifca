import React from "react";
import BreadCrumbMenu from "../components/BreadCrumbMenu";

const GreenFinance = () => {
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
                  Green Finance
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BreadCrumbMenu />
      <div className="max-w-screen-lg mx-auto text-left flex flex-col mt-20">
        <p className="text-neutral text-lg font-light">
          Green finance represents the integration of environmental and social
          considerations into financial decision-making processes. It plays a
          vital role in supporting projects that promote sustainability and
          address pressing challenges like climate change.
        </p>
        <br />

        <p className="text-neutral">
          A core focus of green finance is funding renewable energy projects,
          such as solar and wind power installations. These initiatives not only
          reduce carbon emissions but also foster energy independence and create
          long-term economic opportunities.
        </p>
        <br />

        <p className="text-neutral">
          Another key area is sustainable infrastructure development. Through
          green bonds and other financing mechanisms, governments and
          organizations can build eco-friendly transportation systems,
          energy-efficient buildings, and waste management facilities.
        </p>
        <br />

        <p className="text-neutral">
          Green finance also enables businesses to adopt sustainable practices
          by offering incentives like lower interest loans for implementing
          energy-saving technologies or reducing their environmental footprint.
          These measures align profitability with environmental responsibility.
        </p>
        <br />

        <p className="text-neutral">
          In addition, green finance supports reforestation and conservation
          projects, which are essential for preserving biodiversity and
          combating the effects of deforestation. These projects benefit not
          only the environment but also local communities by providing jobs and
          enhancing resilience to climate change.
        </p>
        <br />

        <p className="text-neutral">
          Financial institutions play a crucial role in advancing green finance
          by integrating sustainability criteria into their lending practices.
          By prioritizing green projects, they can direct capital toward
          initiatives that generate long-term environmental and social benefits.
        </p>
        <br />

        <p className="text-neutral">
          Green finance is not just about mitigating risks; it is also about
          leveraging opportunities. With the growing global focus on
          sustainability, green investments are emerging as a critical driver of
          economic growth and innovation.
        </p>
        <br />

        <p className="text-neutral">
          By fostering collaboration between governments, businesses, and
          financial institutions, green finance has the potential to transform
          economies, ensuring a sustainable future for generations to come. Its
          ability to address environmental challenges while driving
          socio-economic development makes it a cornerstone of modern finance.
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

export default GreenFinance;
