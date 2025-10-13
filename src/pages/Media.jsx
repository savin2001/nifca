import React from "react";
import BreadCrumbMenu from "../components/BreadCrumbMenu";
import { Link } from "react-router-dom";
import useNews from "../hooks/useNews";
import usePressReleases from "../hooks/usePressReleases";
import useGallery from "../hooks/useGallery";
import useEvents from "../hooks/useEvents";

const Media = () => {
  // Fetch 3 items from each section for preview
  const { news, loading: newsLoading } = useNews(1, 3);
  const { pressReleases, loading: pressLoading } = usePressReleases(1, 3);
  const { gallery, loading: galleryLoading } = useGallery(1, 3);
  const { events, loading: eventsLoading } = useEvents(1, 3);

  // Define breadcrumb links
  const breadcrumbLinks = [{ to: "/media", label: "News and Media" }];

  // Helper function to truncate text
  const truncateText = (text, maxLength = 100) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <div className="relative">
        <div className="hero h-[60vh]" style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D)",
        }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">News & Media</h1>
              <p className="text-lg md:text-xl">Stay informed with the latest updates, press releases, events, and media from NIFCA</p>
            </div>
          </div>
        </div>
        <BreadCrumbMenu links={breadcrumbLinks} />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* News Section */}
        <section className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-4xl font-bold text-neutral">Latest News</h2>
              <p className="text-neutral/70 mt-2">Stay updated with NIFCA's latest initiatives and achievements</p>
            </div>
            <Link to="/news" className="btn btn-primary">
              View All News
            </Link>
          </div>

          {newsLoading ? (
            <div className="flex justify-center py-12">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news && news.slice(0, 3).map((item) => (
                <div key={item.id} className="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <figure className="h-48">
                    <img
                      src={`${import.meta.env.VITE_BASE_URL}${item.picture}`}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x300?text=No+Image';
                      }}
                    />
                  </figure>
                  <div className="card-body">
                    <p className="text-sm text-neutral/60">{new Date(item.created_at).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                    <h3 className="card-title text-xl font-bold">{item.title}</h3>
                    <p className="text-neutral/80">{truncateText(item.content, 120)}</p>
                    <div className="card-actions justify-end mt-4">
                      <Link to={`/news/${item.id}`} className="btn btn-primary btn-sm">Read More</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {!newsLoading && (!news || news.length === 0) && (
            <p className="text-center text-neutral/60 py-12">No news articles available</p>
          )}
        </section>

        {/* Press Releases Section */}
        <section className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-4xl font-bold text-neutral">Press Releases</h2>
              <p className="text-neutral/70 mt-2">Official statements and announcements from NIFCA</p>
            </div>
            <Link to="/press-releases" className="btn btn-primary">
              View All Releases
            </Link>
          </div>

          {pressLoading ? (
            <div className="flex justify-center py-12">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pressReleases && pressReleases.slice(0, 3).map((item) => (
                <div key={item.id} className="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="card-body">
                    <p className="text-sm text-neutral/60">{new Date(item.created_at).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                    <h3 className="card-title text-xl font-bold">{item.title}</h3>
                    <p className="text-neutral/80">{truncateText(item.content, 150)}</p>
                    <div className="card-actions justify-end mt-4">
                      <Link to={`/press-releases/${item.id}`} className="btn btn-primary btn-sm">Read More</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {!pressLoading && (!pressReleases || pressReleases.length === 0) && (
            <p className="text-center text-neutral/60 py-12">No press releases available</p>
          )}
        </section>

        {/* Events Section */}
        <section className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-4xl font-bold text-neutral">Upcoming Events</h2>
              <p className="text-neutral/70 mt-2">Join us at our upcoming events and conferences</p>
            </div>
            <Link to="/events" className="btn btn-primary">
              View All Events
            </Link>
          </div>

          {eventsLoading ? (
            <div className="flex justify-center py-12">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events && events.slice(0, 3).map((item) => (
                <div key={item.id} className="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  {item.picture && (
                    <figure className="h-48">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}${item.picture}`}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x300?text=No+Image';
                        }}
                      />
                    </figure>
                  )}
                  <div className="card-body">
                    <div className="flex items-center gap-2 text-sm text-neutral/60 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {new Date(item.event_start_date || item.date || item.created_at).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </div>
                    <h3 className="card-title text-xl font-bold">{item.title}</h3>
                    <p className="text-neutral/80">{truncateText(item.description || item.content, 120)}</p>
                    {item.location && (
                      <div className="flex items-center gap-2 text-sm text-neutral/60 mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {item.location}
                      </div>
                    )}
                    <div className="card-actions justify-end mt-4">
                      <Link to={`/events/${item.id}`} className="btn btn-primary btn-sm">View Details</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {!eventsLoading && (!events || events.length === 0) && (
            <p className="text-center text-neutral/60 py-12">No upcoming events</p>
          )}
        </section>

        {/* Gallery Section */}
        <section className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-4xl font-bold text-neutral">Media Gallery</h2>
              <p className="text-neutral/70 mt-2">Explore photos and videos from NIFCA events</p>
            </div>
            <Link to="/gallery" className="btn btn-primary">
              View Full Gallery
            </Link>
          </div>

          {galleryLoading ? (
            <div className="flex justify-center py-12">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gallery && gallery.slice(0, 3).map((item) => (
                <Link key={item.id} to={`/gallery/${item.id}`} className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                  <figure className="h-64">
                    {item.type === 'picture' ? (
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}${item.url}`}
                        alt={item.caption}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x300?text=No+Image';
                        }}
                      />
                    ) : (
                      <div className="relative w-full h-full">
                        <video
                          src={`${import.meta.env.VITE_BASE_URL}${item.url}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                          <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                            <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
                          </svg>
                        </div>
                      </div>
                    )}
                  </figure>
                  <div className="card-body">
                    <span className={`badge ${item.type === 'picture' ? 'badge-info' : 'badge-secondary'}`}>
                      {item.type === 'picture' ? 'Photo' : 'Video'}
                    </span>
                    <p className="text-neutral/80 mt-2">{item.caption}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {!galleryLoading && (!gallery || gallery.length === 0) && (
            <p className="text-center text-neutral/60 py-12">No media items available</p>
          )}
        </section>

      </div>
    </div>
  );
};

export default Media;
