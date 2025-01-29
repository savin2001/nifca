import React from "react";
import BreadCrumbMenu from "../components/BreadCrumbMenu";
import { Link } from "react-router-dom";

const Media = () => {
  // Define breadcrumb links
  const breadcrumbLinks = [{ to: "/media", label: "News and Media" }];

  const sections = [
    {
      title: "News",
      content: "Latest updates on NIFCA's initiatives and projects.",
      articles: [
        {
          date: "7 Nov 2024",
          title: "NIFCA's Impact on Community Development",
          description:
            "NIFCA has been a driving force in community development by providing funding and support to local projects...",
        },
        {
          date: "8 Nov 2024",
          title: "The Role of NIFCA in Enhancing Financial Literacy",
          description:
            "Financial literacy has become a key focus for NIFCA, with initiatives aimed at educating the public on managing finances...",
        },
      ],
    },
    {
      title: "Press Releases",
      content: "Official announcements and statements.",
      articles: [
        {
          date: "5 Nov 2024",
          title: "NIFCA Announces New Partnership with Global Bank",
          description:
            "NIFCA has entered into a strategic partnership with Global Bank to expand financial inclusion in underserved communities...",
        },
        {
          date: "10 Nov 2024",
          title: "NIFCA Launches Green Finance Initiative",
          description:
            "As part of its commitment to sustainability, NIFCA has launched a new green finance initiative to support eco-friendly projects...",
        },
      ],
    },
    {
      title: "Media Kit",
      content: "Downloadable resources for media and press.",
      mediaItems: [
        {
          type: "image",
          url: "https://example.com/media-kit-image.jpg",
          title: "NIFCA Logo",
          description: "High-resolution NIFCA logo for press use.",
        },
        {
          type: "image",
          url: "https://example.com/media-kit-brochure.jpg",
          title: "Media Brochure",
          description: "Downloadable brochure for media inquiries.",
        },
        {
          type: "video",
          url: "https://example.com/media-kit-video.mp4",
          title: "NIFCA Overview",
          description: "Watch the NIFCA overview video for more information.",
        },
      ],
    },
    {
      title: "Events",
      content: "Upcoming events and conferences.",
      articles: [
        {
          date: "15 Nov 2024",
          title: "NIFCA's Annual Conference 2024",
          description:
            "The NIFCA Annual Conference is a leading event that brings together industry leaders to discuss key issues in community development...",
        },
        {
          date: "20 Nov 2024",
          title: "Sustainability in Financial Services Summit",
          description:
            "This summit will focus on driving sustainability practices in the financial sector, showcasing NIFCA's commitment to green finance initiatives...",
        },
      ],
    },
    {
      title: "Gallery",
      content: "Photos and videos from NIFCA events.",
      mediaItems: [
        {
          type: "image",
          url: "https://example.com/gallery-image1.jpg",
          title: "NIFCA Event 1",
          description: "Photo from NIFCA's recent event in Nairobi.",
        },
        {
          type: "image",
          url: "https://example.com/gallery-image2.jpg",
          title: "NIFCA Event 2",
          description: "Another photo from the NIFCA community event.",
        },
        {
          type: "video",
          url: "https://example.com/gallery-video1.mp4",
          title: "Event Highlights",
          description: "Watch the highlights from the NIFCA annual conference.",
        },
      ],
    },
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
                  <h1 className="mb-5 text-5xl font-light uppercase">Media</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BreadCrumbMenu links={breadcrumbLinks} />
      </div>

      {/* Section Rendering */}
      {sections.map((section, index) => (
        <div key={section.title} className="max-w-screen-lg mx-auto mt-20">
          <div className="flex justify-between items-center">
            {/* Image Section */}
            <div
              className={`w-1/3 pr-4 ${index % 2 === 0 ? "" : "order-last"}`}
            >
              <img
                src="https://antonytrivet.co.ke/wp-content/uploads/2017/12/Nairobi-Cityscapes-County-Skyscrapers-Skyline-Photographers-Kenya-Professionals-Antony-Trivet-Travels-31.jpg"
                alt="Image"
                className="w-full h-auto"
              />
            </div>

            {/* Content Section */}
            <div className="w-2/3 px-12">
              <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
              <h2 className="text-xl font-semibold mb-4">Coming Soon</h2>
              <p className="text-neutral mb-4">Page Under Maintenance</p>
              <p className="text-neutral mb-4">We are currently working on bringing you a comprehensive overview of
                this page. Stay tuned for updates on how we aim to promote sustainable
                growth, innovation, and environmental stewardship through tailored
                financial solutions.</p>
              <p className="text-neutral mb-4">{section.content}</p>

              {/* Articles for News, Press Releases, and Events */}
              {/* {["News", "Events", "Press Releases"].includes(section.title) && (
                <div className="space-y-10">
                  {section.articles?.map((article, idx) => (
                    <Link
                      key={idx}
                      to="/article"
                      className="flex justify-between items-center border-b-2 pb-2 group"
                    >
                      <div className="cursor-pointer">
                        <p className="text-neutral font-light text-xs uppercase">
                          {article.date}
                        </p>
                        <p className="text-lg font-medium text-primary group-hover:text-neutral hover:underline transition">
                          {article.title}
                        </p>
                        <p className="text-neutral text-sm">{article.description}</p>
                      </div>
                      <div>
                        <button className="text-primary hover:text-neutral hover:underline transition cursor-pointer">
                          &gt;
                        </button>
                      </div>
                    </Link>
                  ))}
                </div>
              )} */}

              {/* Cards for Media Kit and Gallery */}
              {/* {section.title === "Media Kit" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {section.mediaItems?.map((item, idx) => (
                    <div
                      key={idx}
                      className="card bg-base-100 shadow-xl overflow-hidden"
                    >
                      {item.type === "image" ? (
                        <img src={item.url} alt={item.title} className="w-full" />
                      ) : (
                        <video
                          controls
                          src={item.url}
                          className="w-full h-auto"
                        />
                      )}
                      <div className="card-body">
                        <h3 className="card-title">{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )} */}

              {/* {section.title === "Gallery" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {section.mediaItems?.map((item, idx) => (
                    <div
                      key={idx}
                      className="card bg-base-100 shadow-xl overflow-hidden"
                    >
                      {item.type === "image" ? (
                        <img src={item.url} alt={item.title} className="w-full" />
                      ) : (
                        <video
                          controls
                          src={item.url}
                          className="w-full h-auto"
                        />
                      )}
                      <div className="card-body">
                        <h3 className="card-title">{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )} */}

              {/* Button to Section */}
              {/* <div className="mt-4">
                <Link
                  to="#"
                  className="text-primary hover:text-neutral hover:underline transition cursor-pointer"
                >
                  Go to {section.title}
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Media;
