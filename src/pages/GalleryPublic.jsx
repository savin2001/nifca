import React, { useState } from "react";
import { Link } from "react-router-dom";
import BreadCrumbMenu from "../components/BreadCrumbMenu";
import useGallery from "../hooks/useGallery";

const GalleryPublic = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(6);
  const { gallery, pagination, loading, error } = useGallery(page, limit);

  // Define breadcrumb links
  const breadcrumbLinks = [
    { to: "/media", label: "News and Media" },
    { to: "/gallery", label: "Gallery" },
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
                    Media Gallery
                  </h1>
                  <p className="text-lg">Explore photos and videos from NIFCA events</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BreadCrumbMenu links={breadcrumbLinks} />
      </div>

      {/* Gallery Section */}
      <div className="max-w-screen-xl mx-auto px-4 py-20">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : error ? (
          <div className="alert alert-error">
            <span>Error loading gallery: {error.message}</span>
          </div>
        ) : gallery && gallery.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item) => (
              <Link
                key={item.id}
                to={`/gallery/${item.id}`}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <figure className="px-0 pt-0 h-64">
                  {item.type === 'picture' ? (
                    <img
                      src={`${import.meta.env.VITE_BASE_URL}${item.url}`}
                      alt={item.caption}
                      className="w-full h-full object-cover rounded-t-2xl"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available';
                      }}
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <video
                        src={`${import.meta.env.VITE_BASE_URL}${item.url}`}
                        className="w-full h-full object-cover rounded-t-2xl"
                      >
                        Your browser does not support the video tag.
                      </video>
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-t-2xl">
                        <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                          <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
                        </svg>
                      </div>
                    </div>
                  )}
                </figure>
                <div className="card-body">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`badge ${item.type === 'picture' ? 'badge-info' : 'badge-secondary'}`}>
                      {item.type === 'picture' ? 'Photo' : 'Video'}
                    </span>
                    <span className="text-xs text-neutral opacity-60">
                      {new Date(item.created_at).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <p className="text-neutral">{item.caption}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-neutral text-lg">No gallery items available at this time.</p>
          </div>
        )}

        {/* Pagination Controls */}
        {!loading && !error && pagination && pagination.totalPages > 1 && (
          <div className="flex justify-center items-center py-12">
            <div className="join">
              <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                className="join-item btn"
              >
                « Previous
              </button>
              <button className="join-item btn">
                Page {pagination.currentPage} of {pagination.totalPages}
              </button>
              <button
                onClick={() => setPage(page + 1)}
                disabled={page === pagination.totalPages}
                className="join-item btn"
              >
                Next »
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPublic;
