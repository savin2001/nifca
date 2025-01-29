import React from "react";
import BreadCrumbMenu from "../components/BreadCrumbMenu";
import { Link } from "react-router-dom";

const Lifestyle = () => {
  const breadcrumbLinks = [
    { to: "/why-nairobi", label: "Why Choose Nairobi" },
    { to: "#", label: "Lifestyle" },
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
                  Lifestyle & Nightlife
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
          State-of-the-art medical facilities, top-tier education, world-class
          business facilities, and a diverse arts scene set Nairobi apart. The
          city is affordable, vibrant, and the only city in the world to have a
          national park within its boundaries.
        </p>
        <br />

        <p className="text-neutral text-lg font-light">
          Nairobi is widely referred to as the “Green City under the Sun” due to
          its year-round pleasant climate and rich heritage. It is home to a
          burgeoning middle class, a lively social scene, and a diverse,
          integrated community.
        </p>
        <br />

        <p className="text-neutral text-lg font-light">
          <strong className="font-semibold mb-2">Community:</strong> <br />{" "}
          Nairobi is steeped in a diverse and beautiful culture comprised of
          several different tribes, each with unique languages, fashion, music,
          and food. Kenyan people are known for their hospitality and
          amicability, making acclimatization to Kenyan lifestyle seamless. The
          friendly disposition of the local population has led to high
          integration between local and expat communities.
        </p>
        <br />

        <p className="text-neutral text-lg font-light">
          <strong className="font-semibold mb-2">Education:</strong> <br />{" "}
          Nairobi is home to some of Africa’s most prestigious schools, offering
          a full range of academic curriculums. There is a fantastic selection
          of public, private, and international schools throughout the city,
          offering British, American, and International curriculums, including
          the International Baccalaureate, A and O levels, and the SAT.
        </p>
        <br />

        <p className="text-neutral text-lg font-light">
          <strong className="font-semibold mb-2">Social Scene:</strong> <br />{" "}
          Nairobi has a dynamic and contemporary social scene with exciting
          experiences to be found throughout the city. It is home to some of the
          world’s top restaurants, unique shopping malls, and a flamboyant
          nightlife. Exciting events and experiences are held almost every day
          throughout the city.
        </p>
        <br />

        <p className="text-neutral text-lg font-light">
          <strong className="font-semibold mb-2">
            Medical Care & Hospitals:
          </strong>{" "}
          <br /> Kenya is home to a growing network of world-class hospitals,
          offering high-quality healthcare services across a range of
          specialties. With modern facilities, skilled medical professionals,
          and advanced technologies, Kenyan hospitals are equipped to provide
          exceptional care to both local and international patients. The
          country’s healthcare sector is continually evolving, attracting
          medical tourism and offering cost-effective treatment options compared
          to many other regions. Whether for routine care or specialized
          treatments, Kenya’s hospitals are committed to delivering
          comprehensive, patient-focused services.
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

export default Lifestyle;
