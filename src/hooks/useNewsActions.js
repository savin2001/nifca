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

    console.log('📤 === FRONTEND: Creating News ===');
    console.log('Upload Mode:', uploadMode);
    console.log('Form Data:', {
      title: formData.title,
      content: formData.content?.substring(0, 100) + '...',
      pictureUrl: formData.pictureUrl,
      picture: formData.picture ? `File: ${formData.picture.name}` : null,
      post_to_twitter: formData.post_to_twitter,
      post_to_linkedin: formData.post_to_linkedin
    });

    try {
      const token = localStorage.getItem('token');

      let response;

      if (uploadMode === 'url') {
        // Send as JSON with picture URL
        const payload = {
          title: formData.title,
          content: formData.content,
          picture: formData.pictureUrl,
          post_to_twitter: formData.post_to_twitter,
          post_to_linkedin: formData.post_to_linkedin
        };

        console.log('📨 Sending JSON payload:', payload);

        response = await axios.post(
          `${baseURL}/api/content/news`,
          payload,
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

        // Add social media flags if present
        if (formData.post_to_twitter !== undefined) {
          submitData.append('post_to_twitter', formData.post_to_twitter);
        }
        if (formData.post_to_linkedin !== undefined) {
          submitData.append('post_to_linkedin', formData.post_to_linkedin);
        }

        console.log('📨 Sending FormData with fields:');
        for (let [key, value] of submitData.entries()) {
          console.log(`  ${key}:`, value instanceof File ? `File: ${value.name}` : value);
        }

        response = await axios.post(`${baseURL}/api/content/news`, submitData, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      }

      console.log('✅ Response received:', response.data);
      console.log('📤 === FRONTEND: News Creation Complete ===\n');

      setLoading(false);
      return { success: true, data: response.data };
    } catch (err) {
      console.error('❌ Create error:', err.response?.data);
      console.error('Error status:', err.response?.status);
      console.error('Error message:', err.message);
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
