import React from "react";
import { Link } from "react-router-dom"; // Import Link
import Hero from "../components/Hero";
import HomePageCarousel from "../components/HomePageCarousel";
import useNews from "../hooks/useNews";

const Home = () => {
  // Fetch the latest 3 news articles
  const { news, loading, error } = useNews(1, 3);

  // Helper function to truncate text
  const truncateText = (text, maxLength = 150) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <>
      <Hero />

      {/* Section 3: The NIFC Offering */}
      <div className="h-fit flex flex-col items-center bg-base-100 mb-14">
        <div className="w-full max-w-screen-lg text-center py-16">
          <h2 className="text-2xl md:text-4xl font-light uppercase text-primary mb-8">
            The NIFC Offering
          </h2>
          <p className="text-md md:text-lg text-neutral mb-12 leading-relaxed">
            “Unlock opportunities through Kenya's new business environment,
            crafted to help companies thrive and establish their home in
            Nairobi.”
          </p>

          {/* Offering Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-none p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-4">
                An Efficient Registration Process
              </h3>
              <p className="text-neutral">
                The NIFC collaborates with key government partners to implement
                a quick and centralised business registration process
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-none p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-4">
                Enabling Business Environment
              </h3>
              <p className="text-neutral">
                Access to a set of tax and financial incentives, specially
                designed to support firms in domiciling in Nairobi
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-none p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-4">Strategic Location</h3>
              <p className="text-neutral">
                Positioned as a gateway to Africa, connecting businesses to
                global opportunities.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-lg rounded-none p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-4">
                A Thriving Start-Up Ecosystem
              </h3>
              <p className="text-neutral">
                A vibrant hub of innovation, exceptional talent, and boundless
                opportunities for technology and sustainability in the heart of
                Africa
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Articles Section */}
      <div className="bg-base-200 py-16">
        <div className="max-w-screen-lg mx-auto text-left px-4">
          <h2 className="text-2xl md:text-4xl font-light uppercase text-primary pb-12">
            Featured
          </h2>
          <p className="text-md md:text-lg text-neutral mb-8">
            Explore the latest insights, press releases, and thought leadership
            from the NIFC.
          </p>

          {/* Loading State */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : error ? (
            /* Error State */
            <div className="alert alert-error mb-8">
              <span>Error loading news: {error.message}</span>
            </div>
          ) : news && news.length > 0 ? (
            /* Articles Grid - Dynamic */
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {news.map((article) => (
                  <div key={article.id} className="bg-white shadow-lg rounded-none overflow-hidden">
                    <img
                      src={`${import.meta.env.VITE_BASE_URL}${article.picture}`}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available';
                      }}
                    />
                    <div className="p-6">
                      <p className="text-primary font-light text-xs uppercase pb-4">
                        {new Date(article.created_at).toLocaleDateString('en-US', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </p>
                      <h3 className="text-lg font-semibold mb-4">
                        {article.title}
                      </h3>
                      <p className="text-neutral">
                        {truncateText(article.content, 120)}
                      </p>
                      <Link
                        to={`/news/${article.id}`}
                        className="text-primary font-medium mt-4 inline-block"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* View More Articles */}
              <div className="mt-12">
                <Link
                  to="/news"
                  className="btn btn-primary text-white font-medium uppercase px-6 py-3"
                >
                  View More Articles
                </Link>
              </div>
            </>
          ) : (
            /* No Articles State */
            <div className="text-center py-20">
              <p className="text-neutral text-lg">No news articles available at this time.</p>
            </div>
          )}
        </div>
      </div>

      <HomePageCarousel />

      {/* Section 3: Target Sectors */}
      <div className="h-screen flex flex-col justify-center items-center font-light">
        <div className="w-full flex flex-col items-center bg-base-200">
          <h2 className="sm:text-xl md:text-4xl uppercase m-16 font-extralight">
            Target Sectors
          </h2>
          <div className="sm:text-md md:text-2xl w-full flex justify-center items-center text-center">
            <div className="w-2/3">
              <p>
                Our focus is on sectors that drive sustainable growth and
                innovation. We aim to empower organizations with tailored
                solutions to meet their unique challenges and opportunities.
              </p>
            </div>
          </div>
          <div className="sm:text-md md:text-xl w-full flex justify-center items-center m-14 max-w-5xl">
            <div className="grid grid-cols-3 grid-rows-2 h-fit gap-4 p-4">
              {/* First column spanning 2 rows */}
              <div className="row-span-2 hover:text-primary">
                <Link
                  to="/multinationals"
                  className="card bg-base-300 shadow-md h-full rounded-none"
                >
                  <div className="card-body">
                    <h3 className="card-title text-left">
                      Regional Headquarters, Multinational HQ’s and Holding
                      Companies
                    </h3>
                  </div>
                </Link>
              </div>

              {/* Second column */}
              <div className="hover:text-primary">
                <Link
                  to="/green-finance"
                  className="card bg-base-300 shadow-md h-full rounded-none"
                >
                  <div className="card-body">
                    <h3 className="card-title text-left">Green Finance</h3>
                  </div>
                </Link>
              </div>
              <div className="hover:text-primary">
                <Link
                  to="/fintech"
                  className="card bg-base-300 shadow-md h-full rounded-none"
                >
                  <div className="card-body">
                    <h3 className="card-title text-left">FinTech</h3>
                  </div>
                </Link>
              </div>

              {/* Third column */}
              <div className="hover:text-primary">
                <Link
                  to="/investment-funds"
                  className="card bg-base-300 shadow-md h-full rounded-none"
                >
                  <div className="card-body">
                    <h2 className="card-title text-left">
                      Investment Funds, Private Equity & Venture Capital
                    </h2>
                  </div>
                </Link>
              </div>
              <div className="hover:text-primary">
                <Link
                  to="/professional-services"
                  className="card bg-base-300 shadow-md h-full rounded-none"
                >
                  <div className="card-body">
                    <h3 className="card-title text-left">
                      Professional Services
                    </h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final Section */}
      <div className="h-2/3 flex flex-col justify-center items-center font-light mb-16">
        <div className="w-full flex flex-col items-center bg-base-100">
          <h2 className="sm:text-xl md:text-4xl uppercase m-16 font-extralight">
            Setting up in the NIFC
          </h2>
          <div className="sm:text-md md:text-xl w-full flex justify-center items-center text-center">
            <div className="flex w-2/3 justify-center items-center">
              <div className="grid grid-cols-4 grid-rows-1 h-full gap-4 p-4">
                {/* Column 1 */}
                <div>
                  <Link to="/discover-nifc">
                    <div className="card bg-base-100 image-full h-fit rounded-none transition-shadow ease-in-out duration-300 hover:rounded-lg hover:shadow-xl">
                      <figure>
                        <img
                          src="https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D"
                          alt="Green Finance"
                        />
                      </figure>
                      <div className="card-body flex w-full justify-center rounded-none">
                        <h2 className="card-title text-sm text-center">Discover the NIFC</h2>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Column 2 */}
                <div>
                  <Link to="/operating-in-nifc">
                    <div className="card bg-base-100 image-full h-fit rounded-none transition-shadow ease-in-out duration-300 hover:rounded-lg hover:shadow-xl">
                      <figure>
                        <img
                          src="https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D"
                          alt="Green Finance"
                        />
                      </figure>
                      <div className="card-body flex w-full justify-center rounded-none">
                        <h2 className="card-title text-sm text-center">Operating in the NIFC</h2>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Column 3 */}
                <div>
                  <Link to="/start-application">
                    <div className="card bg-base-100 image-full h-fit rounded-none transition-shadow ease-in-out duration-300 hover:rounded-lg hover:shadow-xl">
                      <figure>
                        <img
                          src="https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D"
                          alt="Green Finance"
                        />
                      </figure>
                      <div className="card-body flex w-full justify-center rounded-none">
                        <h2 className="card-title text-sm text-center">
                          The NIFC Application Process
                        </h2>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Column 4 */}
                <div>
                  <Link to="/contact">
                    <div className="card bg-base-100 image-full h-fit rounded-none transition-shadow ease-in-out duration-300 hover:rounded-lg hover:shadow-xl">
                      <figure>
                        <img
                          src="https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D"
                          alt="Green Finance"
                        />
                      </figure>
                      <div className="card-body flex w-full justify-center rounded-none">
                        <h2 className="card-title text-sm text-center">Contact Us</h2>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="col-span-4 border-t-2 border-base-300 my-4" />
    </>
  );
};

export default Home;
