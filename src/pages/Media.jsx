import React from 'react'
import BreadCrumbMenu from '../components/BreadCrumbMenu'
import { Link } from 'react-router-dom'

const Media = () => {
  // Define breadcrumb links
  const breadcrumbLinks = [
    { to: "/media", label: "News and Media" }
  ];

  return (
    <div className="">
      <div className="relative ">
        {/* Hero Carousel */}
        <div className="carousel w-full h-1/2">
          {/* Slide 1 */}
          <div id="slide1" className="carousel-item relative w-full">
            <div
              className="hero h-[70vh]"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-neutral-content text-center">
                <div>
                  <h1 className="mb-5 text-5xl font-light uppercase">
                    Media
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BreadCrumbMenu links={breadcrumbLinks} />
      </div>

      {/* Articles Section */}
      <div className="max-w-screen-lg mx-auto text-left flex mt-20">
        {/* Image Section */}
        <div className="w-1/3 pr-4">
          <img
            src="https://antonytrivet.co.ke/wp-content/uploads/2017/12/Nairobi-Cityscapes-County-Skyscrapers-Skyline-Photographers-Kenya-Professionals-Antony-Trivet-Travels-31.jpg"
            alt="Image"
            className="w-full h-auto"
          />
        </div>

        {/* Articles Content */}
        <div className="w-2/3 px-12">
          {/* Articles */}
          <div className="space-y-10">
            {/* Article 1 */}
            <Link to="/article" className="flex justify-between items-center border-b-2 pb-2 group">
              <div className="cursor-pointer">
                <p className="text-neutral font-light text-xs uppercase">
                  7 Nov 2024
                </p>
                <p className="text-lg font-medium text-primary group-hover:text-neutral hover:underline transition">
                  NIFCA's Impact on Community Development
                </p>
                <p className="text-neutral text-sm">
                  NIFCA has been a driving force in community development by
                  providing funding and support to local projects...
                </p>
              </div>
              <div>
                <button className="text-primary hover:text-neutral hover:underline transition cursor-pointer">
                  &gt;
                </button>
              </div>
            </Link>

            {/* Article 2 */}
            <Link to="/article" className="flex justify-between items-center border-b-2 pb-2 group">
              <div className="cursor-pointer">
                <p className="text-neutral font-light text-xs uppercase">
                  7 Nov 2024
                </p>
                <p className="text-lg font-medium text-primary group-hover:text-neutral hover:underline transition">
                  The Role of NIFCA in Enhancing Financial Literacy
                </p>
                <p className="text-neutral text-sm">
                  Financial literacy has become a key focus for NIFCA, with
                  initiatives aimed at educating the public on managing
                  finances...
                </p>
              </div>
              <div>
                <button className="text-primary hover:text-neutral hover:underline transition cursor-pointer">
                  &gt;
                </button>
              </div>
            </Link>

            {/* Article 3 */}
            <Link to="/article" className="flex justify-between items-center border-b-2 pb-2 group">
              <div className="cursor-pointer">
                <p className="text-neutral font-light text-xs uppercase">
                  7 Nov 2024
                </p>
                <p className="text-lg font-medium text-primary group-hover:text-neutral hover:underline transition">
                  NIFCA's Push for Sustainable Investments
                </p>
                <p className="text-neutral text-sm">
                  NIFCA has been advocating for sustainable investments as part
                  of its mission to promote long-term economic growth...
                </p>
              </div>
              <div>
                <button className="text-primary hover:text-neutral hover:underline transition cursor-pointer">
                  &gt;
                </button>
              </div>
            </Link>

            {/* Article 4 */}
            <Link to="/article" className="flex justify-between items-center border-b-2 pb-2 group">
              <div className="cursor-pointer">
                <p className="text-neutral font-light text-xs uppercase">
                  7 Nov 2024
                </p>
                <p className="text-lg font-medium text-primary group-hover:text-neutral hover:underline transition">
                  How NIFCA Supports Startups and Innovation
                </p>
                <p className="text-neutral text-sm">
                  NIFCA has launched several programs designed to foster
                  innovation, offering startups crucial resources and
                  mentorship...
                </p>
              </div>
              <div>
                <button className="text-primary hover:text-neutral hover:underline transition cursor-pointer">
                  &gt;
                </button>
              </div>
            </Link>
          </div>

          {/* Pagination (DaisyUI) */}
          <div className="mt-8 flex justify-center">
            <div className="btn-group">
              <button className="btn btn-ghost">❮</button>
              <button className="btn btn-active">1</button>
              <button className="btn btn-ghost">2</button>
              <button className="btn btn-ghost">3</button>
              <button className="btn btn-ghost">❯</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Media