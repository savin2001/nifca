import React, { useState } from "react";
import BreadCrumbMenu from "../components/BreadCrumbMenu";
import useNews from "../hooks/useNews";
import { Link } from "react-router-dom";

const NewsPublic = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(6);
  const { news, pagination, loading, error } = useNews(page, limit);

  // Define breadcrumb links
  const breadcrumbLinks = [
    { to: "/media", label: "News and Media" },
    { to: "/news", label: "News" },
  ];

  // Helper function to truncate text
  const truncateText = (text, maxLength = 150) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="">
      <div className="relative">
        {/* Hero Section */}
        <div className="carousel w-full h-1/2">
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
                    Latest News
                  </h1>
                  <p className="text-lg">Stay updated with NIFCA's latest initiatives and achievements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BreadCrumbMenu links={breadcrumbLinks} />
      </div>

      {/* News Section */}
      <div className="max-w-screen-xl mx-auto px-4 py-20">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : error ? (
          <div className="alert alert-error">
            <span>Error loading news: {error.message}</span>
          </div>
        ) : news && news.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item) => (
              <div
                key={item.id}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <figure className="px-0 pt-0 h-64">
                  <img
                    src={`${import.meta.env.VITE_BASE_URL}${item.picture}`}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-t-2xl"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available';
                    }}
                  />
                </figure>
                <div className="card-body">
                  <p className="text-sm text-neutral opacity-60">
                    {new Date(item.created_at).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </p>
                  <h2 className="card-title text-xl font-bold">{item.title}</h2>
                  <p className="text-neutral">{truncateText(item.content, 150)}</p>
                  <div className="card-actions justify-end mt-4">
                    <Link to={`/news/${item.id}`} className="btn btn-primary btn-sm">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-neutral text-lg">No news articles available at this time.</p>
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

export default NewsPublic;
