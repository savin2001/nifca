import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const EventArticle = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      setLoading(true);
      try {
        const baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000';
        const response = await axios.get(`${baseURL}/api/content/events/${id}`);
        setEvent(response.data);
        setError(null);
      } catch (err) {
        setError(err);
        setEvent(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchEvent();
    }
  }, [id]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDateShort = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const addToGoogleCalendar = () => {
    if (!event) return;

    const startDate = new Date(event.event_start_date).toISOString().replace(/-|:|\.\d\d\d/g, "");
    const endDate = new Date(event.event_end_date).toISOString().replace(/-|:|\.\d\d\d/g, "");
    const details = encodeURIComponent(event.description || '');
    const location = encodeURIComponent(event.location || '');
    const title = encodeURIComponent(event.title);

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="min-h-screen flex justify-center items-center px-4">
        <div className="alert alert-error max-w-md">
          <span>Error loading event. Please try again later.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-base-100">
      <main className="flex-1 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6 sm:mb-8 pt-6">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Link to="/media" className="text-primary hover:underline transition-colors">
                News & Media
              </Link>
              <span className="text-neutral/40">/</span>
              <Link to="/events" className="text-primary hover:underline transition-colors">
                Events
              </Link>
              <span className="text-neutral/40">/</span>
              <span className="text-neutral/60">Event Details</span>
            </div>
          </div>

          {/* Event Card */}
          <div className="bg-base-100 rounded-lg sm:rounded-xl shadow-lg overflow-hidden border border-base-300">
            {/* Event Image - Full Width on Mobile */}
            {event.picture && (
              <div className="w-full h-64 sm:h-80 md:hidden">
                <img
                  src={`${import.meta.env.VITE_BASE_URL}${event.picture}`}
                  alt={event.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/800x400?text=Event+Image';
                  }}
                />
              </div>
            )}

            <div className="md:flex">
              {/* Event Image - Side Panel on Desktop */}
              {event.picture && (
                <div className="hidden md:block md:flex-shrink-0 md:w-80 lg:w-96">
                  <div
                    className="h-full min-h-[400px] bg-center bg-no-repeat bg-cover"
                    style={{ backgroundImage: `url(${import.meta.env.VITE_BASE_URL}${event.picture})` }}
                  ></div>
                </div>
              )}

              {/* Event Content */}
              <div className="p-5 sm:p-6 md:p-8 flex-1">
                <div className="uppercase tracking-wide text-xs sm:text-sm text-primary font-semibold">
                  {formatDateShort(event.event_start_date)}
                </div>
                <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-neutral leading-tight">
                  {event.title}
                </h1>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-neutral/80 whitespace-pre-wrap leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>

            {/* Event Details Section */}
            <div className="border-t border-base-300 px-5 py-5 sm:px-6 sm:py-6 md:px-8 bg-base-200/30">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {/* Date & Time */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                      <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"></path>
                    </svg>
                    <h3 className="text-base sm:text-lg font-semibold text-neutral">Date & Time</h3>
                  </div>
                  <p className="mt-2 text-sm sm:text-base text-neutral/70 pl-7">
                    {formatDate(event.event_start_date)}
                  </p>
                  <p className="text-sm text-neutral/70 pl-7">
                    {formatTime(event.event_start_date)} - {formatTime(event.event_end_date)}
                  </p>
                  {new Date(event.event_start_date).toDateString() !== new Date(event.event_end_date).toDateString() && (
                    <p className="text-xs sm:text-sm text-neutral/60 pl-7 mt-1">
                      Ends: {formatDate(event.event_end_date)}
                    </p>
                  )}
                </div>

                {/* Location */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                      <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
                    </svg>
                    <h3 className="text-base sm:text-lg font-semibold text-neutral">Location</h3>
                  </div>
                  <p className="mt-2 text-sm sm:text-base text-neutral/70 pl-7">{event.location}</p>
                </div>

                {/* Add to Calendar */}
                <div className="space-y-1 sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V88a8,8,0,0,1,16,0v52h28A8,8,0,0,1,168,148Z"></path>
                    </svg>
                    <h3 className="text-base sm:text-lg font-semibold text-neutral">Calendar</h3>
                  </div>
                  <button
                    onClick={addToGoogleCalendar}
                    className="mt-2 ml-7 inline-flex items-center gap-2 text-sm sm:text-base text-primary hover:underline transition-all"
                  >
                    <span>Add to Google Calendar</span>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                      <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              to="/events"
              className="btn btn-primary btn-block sm:btn-wide"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
              </svg>
              Back to Events
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventArticle;
