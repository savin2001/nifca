import { useState, useEffect } from 'react';
import axios from 'axios';

const useNews = (page, limit) => {
  const [news, setNews] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000';
        const response = await axios.get(`${baseURL}/api/content/news`, {
          params: { page, limit },
        });
        setNews(response.data.news);
        setPagination(response.data.pagination);
        setError(null);
      } catch (err) {
        setError(err);
        setNews([]);
        setPagination({
            currentPage: 1,
            totalPages: 1,
            totalItems: 0,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [page, limit]);

  return { news, pagination, loading, error };
};

export default useNews;
