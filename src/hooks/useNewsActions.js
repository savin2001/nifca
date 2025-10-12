import { useState } from 'react';
import axios from 'axios';

const useNewsActions = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000';

  // Create news article
  const createNews = async (formData, uploadMode) => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('token');

      let response;

      if (uploadMode === 'url') {
        // Send as JSON with picture URL
        response = await axios.post(
          `${baseURL}/api/content/news`,
          {
            title: formData.title,
            content: formData.content,
            picture: formData.pictureUrl
          },
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }
        );
      } else {
        // Send as FormData for file upload
        const submitData = new FormData();
        submitData.append('title', formData.title);
        submitData.append('content', formData.content);

        if (formData.picture) {
          submitData.append('pictureFile', formData.picture);
        }

        response = await axios.post(`${baseURL}/api/content/news`, submitData, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      }

      setLoading(false);
      return { success: true, data: response.data };
    } catch (err) {
      console.error('Create error:', err.response?.data);
      const errorMessage = err.response?.data?.error || err.response?.data?.message || 'Failed to create news article';
      setError(errorMessage);
      setLoading(false);
      return { success: false, error: errorMessage };
    }
  };

  // Update news article
  const updateNews = async (id, formData, uploadMode) => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('token');

      let response;

      if (uploadMode === 'url') {
        // Send as JSON with picture URL
        response = await axios.put(
          `${baseURL}/api/content/news/${id}`,
          {
            title: formData.title,
            content: formData.content,
            picture: formData.pictureUrl
          },
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }
        );
      } else {
        // Send as FormData for file upload
        const submitData = new FormData();
        submitData.append('title', formData.title);
        submitData.append('content', formData.content);

        if (formData.picture) {
          submitData.append('pictureFile', formData.picture);
        }

        response = await axios.put(`${baseURL}/api/content/news/${id}`, submitData, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      }

      setLoading(false);
      return { success: true, data: response.data };
    } catch (err) {
      console.error('Update error:', err.response?.data);
      const errorMessage = err.response?.data?.error || err.response?.data?.message || 'Failed to update news article';
      setError(errorMessage);
      setLoading(false);
      return { success: false, error: errorMessage };
    }
  };

  // Delete news article
  const deleteNews = async (id) => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('token');

      await axios.delete(`${baseURL}/api/content/news/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      setLoading(false);
      return { success: true };
    } catch (err) {
      console.error('Delete error:', err.response?.data);
      const errorMessage = err.response?.data?.error || 'Failed to delete news article';
      setError(errorMessage);
      setLoading(false);
      return { success: false, error: errorMessage };
    }
  };

  return {
    createNews,
    updateNews,
    deleteNews,
    loading,
    error
  };
};

export default useNewsActions;
