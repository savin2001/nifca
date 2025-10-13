import { useState, useEffect } from 'react';
import axios from 'axios';

const useGallery = (page = 1, limit = 10) => {
  const [gallery, setGallery] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGallery = async () => {
      setLoading(true);
      try {
        const baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000';
        const response = await axios.get(`${baseURL}/api/content/gallery`, {
          params: { page, limit },
        });
        // API returns 'media' not 'gallery'
        setGallery(response.data.media || response.data.gallery);
        setPagination(response.data.pagination);
        setError(null);
      } catch (err) {
        setError(err);
        setGallery([]);
        setPagination({
          currentPage: 1,
          totalPages: 1,
          totalItems: 0,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, [page, limit]);

  return { gallery, pagination, loading, error };
};

export default useGallery;
