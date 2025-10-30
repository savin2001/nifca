import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4 py-16">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary/20">404</h1>
        </div>

        {/* Error Message */}
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral">
            Page Not Found
          </h2>
          <p className="text-lg text-neutral/70">
            Sorry, we couldn't find the page you're looking for. The page may have been moved, deleted, or the URL might be incorrect.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link to="/" className="btn btn-primary btn-wide">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Go to Homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn btn-outline btn-wide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Go Back
          </button>
        </div>

        {/* Helpful Links */}
        <div className="border-t border-base-300 pt-8">
          <h3 className="text-lg font-semibold text-neutral mb-6">
            You might be looking for:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
            <Link
              to="/discover-nifc"
              className="text-primary hover:underline text-sm"
            >
              What is NIFC
            </Link>
            <Link
              to="/becoming-nifc-firm"
              className="text-primary hover:underline text-sm"
            >
              Becoming an NIFC Firm
            </Link>
            <Link
              to="/why-nairobi"
              className="text-primary hover:underline text-sm"
            >
              Why Nairobi
            </Link>
            <Link
              to="/media"
              className="text-primary hover:underline text-sm"
            >
              News & Media
            </Link>
            <Link
              to="/our-team"
              className="text-primary hover:underline text-sm"
            >
              Our Team
            </Link>
            <Link
              to="/contact"
              className="text-primary hover:underline text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;