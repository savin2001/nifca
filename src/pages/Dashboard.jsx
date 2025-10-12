import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) return <p>Loading...</p>; // or redirect to login

  const renderDashboard = () => {
    switch (user.role) {
      case 1:
        return (
          <h2 className="text-2xl font-semibold mb-6">Welcome, Site Admin!</h2>
        );
      case 2:
        return (
          <h2 className="text-2xl font-semibold mb-6">
            Welcome, Content Admin!
          </h2>
        );
      case 3:
        return (
          <h2 className="text-2xl font-semibold mb-6">
            Welcome, Application Admin!
          </h2>
        );
      default:
        return <h2 className="text-2xl font-semibold mb-6">Welcome, User!</h2>;
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
      {renderDashboard()}

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Content Management Cards - Only for Content Admin (role 2) */}
        {user.role === 2 && (
          <>
            {/* Quick Access - Events */}
            <Link
              to="/admin/content/events"
              className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500"
            >
              <div className="flex items-center mb-4">
                <svg
                  className="w-8 h-8 text-blue-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <h2 className="text-2xl font-bold text-gray-800">
                  Events
                </h2>
              </div>
              <p className="text-gray-600">
                Manage events
              </p>
            </Link>

            {/* Quick Access - News */}
            <Link
              to="/admin/content/news"
              className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500"
            >
          <div className="flex items-center mb-4">
            <svg
              className="w-8 h-8 text-green-500 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2"
              />
            </svg>
            <h2 className="text-2xl font-bold text-gray-800">News</h2>
          </div>
          <p className="text-gray-600">Manage news articles</p>
        </Link>

        {/* Quick Access - Press Releases */}
        <Link
          to="/admin/content/press-releases"
          className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-500"
        >
          <div className="flex items-center mb-4">
            <svg
              className="w-8 h-8 text-purple-500 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h2 className="text-2xl font-bold text-gray-800">Press Releases</h2>
          </div>
          <p className="text-gray-600">Manage press releases</p>
        </Link>

        {/* Quick Access - Media */}
        <Link
          to="/admin/content/media"
          className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-orange-500"
        >
          <div className="flex items-center mb-4">
            <svg
              className="w-8 h-8 text-orange-500 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <h2 className="text-2xl font-bold text-gray-800">Media</h2>
          </div>
          <p className="text-gray-600">Manage media assets</p>
        </Link>
          </>
        )}

        {/* Register Admin - Only for Site Admin (role 1) */}
        {user.role === 1 && (
          <Link
            to="/register-admin"
            className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-red-500"
          >
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-red-500 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
              <h2 className="text-2xl font-bold text-gray-800">
                Register Admin
              </h2>
            </div>
            <p className="text-gray-600">Add new administrators</p>
          </Link>
        )}

        {/* Show message if user has no specific dashboard cards */}
        {user.role !== 1 && user.role !== 2 && (
          <div className="col-span-full p-8 bg-white rounded-lg shadow-lg text-center">
            <p className="text-gray-600 text-lg">
              No dashboard items available for your role. Please contact the
              administrator for assistance.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
