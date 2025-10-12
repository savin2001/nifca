import { useState } from 'react';
import axios from 'axios';

const useEventsActions = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000';

  // Create event
  const createEvent = async (formData, uploadMode) => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('token');

      let response;

      if (uploadMode === 'url') {
        // Send as JSON with picture URL
        response = await axios.post(
          `${baseURL}/api/content/events`,
          {
            title: formData.title,
            description: formData.description,
            event_start_date: formData.event_start_date,
            event_end_date: formData.event_end_date,
            location: formData.location,
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
        submitData.append('description', formData.description);
        submitData.append('event_start_date', formData.event_start_date);
        submitData.append('event_end_date', formData.event_end_date);
        submitData.append('location', formData.location);

        if (formData.picture) {
          submitData.append('pictureFile', formData.picture);
        }

        response = await axios.post(`${baseURL}/api/content/events`, submitData, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      }

      setLoading(false);
      return { success: true, data: response.data };
    } catch (err) {
      console.error('Create error:', err.response?.data);
      const errorMessage = err.response?.data?.error || err.response?.data?.message || 'Failed to create event';
      setError(errorMessage);
      setLoading(false);
      return { success: false, error: errorMessage };
    }
  };

  // Update event
  const updateEvent = async (id, formData, uploadMode) => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('token');

      let response;

      if (uploadMode === 'url') {
        // Send as JSON with picture URL
        response = await axios.put(
          `${baseURL}/api/content/events/${id}`,
          {
            title: formData.title,
            description: formData.description,
            event_start_date: formData.event_start_date,
            event_end_date: formData.event_end_date,
            location: formData.location,
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
        submitData.append('description', formData.description);
        submitData.append('event_start_date', formData.event_start_date);
        submitData.append('event_end_date', formData.event_end_date);
        submitData.append('location', formData.location);

        if (formData.picture) {
          submitData.append('pictureFile', formData.picture);
        }

        response = await axios.put(`${baseURL}/api/content/events/${id}`, submitData, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      }

      setLoading(false);
      return { success: true, data: response.data };
    } catch (err) {
      console.error('Update error:', err.response?.data);
      const errorMessage = err.response?.data?.error || err.response?.data?.message || 'Failed to update event';
      setError(errorMessage);
      setLoading(false);
      return { success: false, error: errorMessage };
    }
  };

  // Delete event
  const deleteEvent = async (id) => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('token');

      await axios.delete(`${baseURL}/api/content/events/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      setLoading(false);
      return { success: true };
    } catch (err) {
      console.error('Delete error:', err.response?.data);
      const errorMessage = err.response?.data?.error || 'Failed to delete event';
      setError(errorMessage);
      setLoading(false);
      return { success: false, error: errorMessage };
    }
  };

  return {
    createEvent,
    updateEvent,
    deleteEvent,
    loading,
    error
  };
};

export default useEventsActions;
