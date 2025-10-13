import React from 'react';
import { Link } from 'react-router-dom';

const ContentAdmin = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Content Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="/admin/content/events" className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold mb-2">Events</h2>
          <p>Manage events</p>
        </Link>
        <Link to="/admin/content/news" className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold mb-2">News</h2>
          <p>Manage news articles</p>
        </Link>
        <Link to="/admin/content/press-releases" className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold mb-2">Press Releases</h2>
          <p>Manage press releases</p>
        </Link>
        <Link to="/admin/content/media" className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold mb-2">Media</h2>
          <p>Manage media assets</p>
        </Link>
      </div>
    </div>
  );
};

export default ContentAdmin;