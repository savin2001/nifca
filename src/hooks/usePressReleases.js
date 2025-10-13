import { useState, useEffect } from 'react';
import axios from 'axios';

const usePressReleases = (page, limit) => {
  const [pressReleases, setPressReleases] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPressReleases = async () => {
      setLoading(true);
      try {
        const baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000';
        const response = await axios.get(`${baseURL}/api/content/press-releases`, {
          params: { page, limit },
        });
        setPressReleases(response.data.pressReleases);
        setPagination(response.data.pagination);
        setError(null);
      } catch (err) {
        setError(err);
        setPressReleases([]);
        setPagination({
            currentPage: 1,
            totalPages: 1,
            totalItems: 0,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPressReleases();
  }, [page, limit]);

  return { pressReleases, pagination, loading, error };
};

export default usePressReleases;
