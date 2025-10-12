import { useState, useEffect } from 'react';
import axios from 'axios';

const useEvents = (page, limit) => {
  const [events, setEvents] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000';
        const response = await axios.get(`${baseURL}/api/content/events`, {
          params: { page, limit },
        });
        setEvents(response.data.events);
        setPagination(response.data.pagination);
        setError(null);
      } catch (err) {
        setError(err);
        setEvents([]);
        setPagination({
          currentPage: 1,
          totalPages: 1,
          totalItems: 0,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [page, limit]);

  return { events, pagination, loading, error };
};

export default useEvents;
