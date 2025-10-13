import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const GalleryItemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [allItems, setAllItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000';

        // Fetch current item
        const itemResponse = await axios.get(`${baseURL}/api/content/gallery/${id}`);
        setItem(itemResponse.data);

        // Fetch all items for navigation
        const allResponse = await axios.get(`${baseURL}/api/content/gallery`, {
          params: { page: 1, limit: 1000 }
        });
        setAllItems(allResponse.data.media || allResponse.data.gallery || []);

        setError(null);
      } catch (err) {
        setError(err);
        setItem(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const getCurrentIndex = () => {
    return allItems.findIndex(item => item.id === parseInt(id));
  };

  const handlePrevious = () => {
    const currentIndex = getCurrentIndex();
    if (currentIndex > 0) {
      const prevItem = allItems[currentIndex - 1];
      navigate(`/gallery/${prevItem.id}`);
    }
  };

  const handleNext = () => {
    const currentIndex = getCurrentIndex();
    if (currentIndex < allItems.length - 1) {
      const nextItem = allItems[currentIndex + 1];
      navigate(`/gallery/${nextItem.id}`);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error || !item) {
    return (
      <div className="min-h-screen flex justify-center items-center px-4">
        <div className="alert alert-error max-w-md">
          <span>Error loading gallery item. Please try again later.</span>
        </div>
      </div>
    );
  }

  const currentIndex = getCurrentIndex();
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < allItems.length - 1;

  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      <main className="flex-grow">
        {/* Breadcrumb - Above Image */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-sm breadcrumbs">
              <ul>
                <li>
                  <Link to="/media" className="hover:text-primary transition-colors">
                    News & Media
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-primary transition-colors">
                    Gallery
                  </Link>
                </li>
                <li className="text-neutral/60">Item Details</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hero Media Section */}
        <div className="w-full">
          <div className="w-full aspect-video bg-base-300">
            {item.type === 'picture' ? (
              <img
                alt={item.caption || 'Gallery item'}
                className="w-full h-full object-cover"
                src={`${import.meta.env.VITE_BASE_URL}${item.url}`}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/1920x1080?text=Image+Not+Available';
                }}
              />
            ) : (
              <video
                className="w-full h-full object-cover"
                controls
                src={`${import.meta.env.VITE_BASE_URL}${item.url}`}
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto">

            {/* Item Details Card */}
            <div className="bg-base-100 p-6 md:p-8 rounded-lg shadow-lg border border-base-300">
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-2xl sm:text-3xl font-bold text-neutral flex-1">
                  {item.caption || 'Gallery Item'}
                </h1>
                <span className={`badge ${item.type === 'picture' ? 'badge-info' : 'badge-secondary'} badge-lg ml-4`}>
                  {item.type === 'picture' ? 'Photo' : 'Video'}
                </span>
              </div>

              {item.caption && (
                <p className="text-neutral/80 leading-relaxed mb-6">
                  {item.caption}
                </p>
              )}

              {/* Metadata */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                  {item.type === 'picture' ? 'Photography' : 'Video'}
                </span>
                <span className="bg-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                  Added {formatDate(item.created_at)}
                </span>
              </div>

              {/* Navigation Controls */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-base-300">
                {/* Previous/Next Buttons */}
                <div className="flex w-full sm:w-auto justify-between sm:justify-start gap-4">
                  <button
                    onClick={handlePrevious}
                    disabled={!hasPrevious}
                    className="flex items-center gap-2 px-4 py-2 rounded text-sm font-bold bg-primary/20 hover:bg-primary/30 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                      <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
                    </svg>
                    Previous
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!hasNext}
                    className="flex items-center gap-2 px-4 py-2 rounded text-sm font-bold bg-primary/20 hover:bg-primary/30 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    Next
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                    </svg>
                  </button>
                </div>

                {/* Back to Gallery Button */}
                <Link
                  to="/gallery"
                  className="w-full sm:w-auto px-6 py-2 rounded text-sm font-bold bg-primary text-white hover:bg-primary/90 transition-colors text-center"
                >
                  Back to Gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GalleryItemDetail;
