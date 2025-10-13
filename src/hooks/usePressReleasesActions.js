import { useState } from 'react';
import axios from 'axios';

const usePressReleasesActions = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000';

  // Create press release
  const createPressRelease = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('token');

      const response = await axios.post(
        `${baseURL}/api/content/press-releases`,
        {
          title: formData.title,
          content: formData.content
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      setLoading(false);
      return { success: true, data: response.data };
    } catch (err) {
      console.error('Create error:', err.response?.data);
      const errorMessage = err.response?.data?.error || err.response?.data?.message || 'Failed to create press release';
      setError(errorMessage);
      setLoading(false);
      return { success: false, error: errorMessage };
    }
  };

  // Update press release
  const updatePressRelease = async (id, formData) => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('token');

      const response = await axios.put(
        `${baseURL}/api/content/press-releases/${id}`,
        {
          title: formData.title,
          content: formData.content
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      setLoading(false);
      return { success: true, data: response.data };
    } catch (err) {
      console.error('Update error:', err.response?.data);
      const errorMessage = err.response?.data?.error || err.response?.data?.message || 'Failed to update press release';
      setError(errorMessage);
      setLoading(false);
      return { success: false, error: errorMessage };
    }
  };

  // Delete press release
  const deletePressRelease = async (id) => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('token');

      await axios.delete(`${baseURL}/api/content/press-releases/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      setLoading(false);
      return { success: true };
    } catch (err) {
      console.error('Delete error:', err.response?.data);
      const errorMessage = err.response?.data?.error || 'Failed to delete press release';
      setError(errorMessage);
      setLoading(false);
      return { success: false, error: errorMessage };
    }
  };

  return {
    createPressRelease,
    updatePressRelease,
    deletePressRelease,
    loading,
    error
  };
};

export default usePressReleasesActions;
