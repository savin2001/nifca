import { useState } from 'react';
import axios from 'axios';

const useGalleryActions = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000';

  // Create gallery item
  const createGalleryItem = async (formData, uploadMode) => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('token');

      let response;

      if (uploadMode === 'url') {
        // Send as JSON with media URL
        response = await axios.post(
          `${baseURL}/api/content/gallery`,
          {
            type: formData.type,
            url: formData.url,
            caption: formData.caption
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
        submitData.append('type', formData.type);
        submitData.append('caption', formData.caption);

        if (formData.mediaFile) {
          submitData.append('mediaFile', formData.mediaFile);
        }

        response = await axios.post(`${baseURL}/api/content/gallery`, submitData, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      }

      setLoading(false);
      return { success: true, data: response.data };
    } catch (err) {
      console.error('Create error:', err.response?.data);
      const errorMessage = err.response?.data?.error || err.response?.data?.message || 'Failed to create gallery item';
      setError(errorMessage);
      setLoading(false);
      return { success: false, error: errorMessage };
    }
  };

  // Update gallery item
  const updateGalleryItem = async (id, formData, uploadMode) => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('token');

      let response;

      if (uploadMode === 'url') {
        // Send as JSON with media URL
        response = await axios.put(
          `${baseURL}/api/content/gallery/${id}`,
          {
            type: formData.type,
            url: formData.url,
            caption: formData.caption
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
        submitData.append('type', formData.type);
        submitData.append('caption', formData.caption);

        if (formData.mediaFile) {
          submitData.append('mediaFile', formData.mediaFile);
        }

        response = await axios.put(`${baseURL}/api/content/gallery/${id}`, submitData, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      }

      setLoading(false);
      return { success: true, data: response.data };
    } catch (err) {
      console.error('Update error:', err.response?.data);
      const errorMessage = err.response?.data?.error || err.response?.data?.message || 'Failed to update gallery item';
      setError(errorMessage);
      setLoading(false);
      return { success: false, error: errorMessage };
    }
  };

  // Delete gallery item
  const deleteGalleryItem = async (id) => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('token');

      await axios.delete(`${baseURL}/api/content/gallery/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      setLoading(false);
      return { success: true };
    } catch (err) {
      console.error('Delete error:', err.response?.data);
      const errorMessage = err.response?.data?.error || 'Failed to delete gallery item';
      setError(errorMessage);
      setLoading(false);
      return { success: false, error: errorMessage };
    }
  };

  return {
    createGalleryItem,
    updateGalleryItem,
    deleteGalleryItem,
    loading,
    error
  };
};

export default useGalleryActions;
