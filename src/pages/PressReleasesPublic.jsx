import React, { useState } from "react";
import BreadCrumbMenu from "../components/BreadCrumbMenu";
import { Link } from "react-router-dom";
import usePressReleases from "../hooks/usePressReleases";

const PressReleasesPublic = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(6);
  const { pressReleases, pagination, loading, error } = usePressReleases(page, limit);

  // Define breadcrumb links
  const breadcrumbLinks = [
    { to: "/media", label: "News and Media" },
    { to: "/press-releases", label: "Press Releases" },
  ];

  // Helper function to truncate content
  const truncateContent = (content, maxLength = 150) => {
    if (!content) return '';
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + "...";
  };

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
                    Press Releases
                  </h1>
                  <p className="text-lg">Official statements and announcements from NIFCA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BreadCrumbMenu links={breadcrumbLinks} />
      </div>

      {/* Press Releases Section */}
      <div className="max-w-screen-xl mx-auto px-4 py-20">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : error ? (
          <div className="alert alert-error">
            <span>Error loading press releases: {error.message}</span>
          </div>
        ) : pressReleases && pressReleases.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressReleases.map((release) => (
              <div
                key={release.id}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="card-body">
                  <p className="text-sm text-neutral opacity-60">
                    {new Date(release.created_at).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </p>
                  <h2 className="card-title text-xl font-bold">{release.title}</h2>
                  <p className="text-neutral">{truncateContent(release.content, 150)}</p>
                  <div className="card-actions justify-end mt-4">
                    <Link to={`/press-releases/${release.id}`} className="btn btn-primary btn-sm">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-neutral text-lg">No press releases available at this time.</p>
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

export default PressReleasesPublic;
