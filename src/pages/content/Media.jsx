import React, { useState } from 'react';
import useGallery from '../../hooks/useGallery';
import useGalleryActions from '../../hooks/useGalleryActions';
import { Link } from 'react-router-dom';

const Media = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const { gallery, pagination, loading, error } = useGallery(page, limit);
  const { createGalleryItem, updateGalleryItem, deleteGalleryItem, loading: actionLoading } = useGalleryActions();

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    type: 'picture',
    caption: '',
    url: '',
    mediaFile: null
  });
  const [uploadMode, setUploadMode] = useState('file'); // 'file' or 'url'
  const [mediaPreview, setMediaPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  // Delete modal state
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [deleting, setDeleting] = useState(false);

  // Notification modal state
  const [notification, setNotification] = useState({
    show: false,
    type: 'success',
    title: '',
    message: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle media file selection
  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        mediaFile: file
      }));

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setMediaPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setUploadError(null);

    try {
      let result;

      if (isEditMode) {
        result = await updateGalleryItem(editingId, formData, uploadMode);
      } else {
        result = await createGalleryItem(formData, uploadMode);
      }

      if (result.success) {
        // Reset form and close modal
        setFormData({ type: 'picture', caption: '', url: '', mediaFile: null });
        setMediaPreview(null);
        setIsModalOpen(false);
        setIsEditMode(false);
        setEditingId(null);

        // Show success notification
        setNotification({
          show: true,
          type: 'success',
          title: isEditMode ? 'Update Successful' : 'Submission Successful',
          message: isEditMode
            ? 'Your gallery item has been updated successfully.'
            : 'Your gallery item has been submitted successfully.'
        });

        // Refresh after delay
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        setUploadError(result.error);
      }
    } catch (err) {
      setUploadError('An unexpected error occurred');
    } finally {
      setUploading(false);
    }
  };

  // Handle edit button click
  const handleEdit = (item) => {
    setIsEditMode(true);
    setEditingId(item.id);
    setFormData({
      type: item.type,
      caption: item.caption,
      url: item.url || '',
      mediaFile: null
    });
    setMediaPreview(item.url ? `${import.meta.env.VITE_BASE_URL}${item.url}` : null);
    setUploadMode('url');
    setIsModalOpen(true);
  };

  // Handle delete button click
  const handleDeleteClick = (id) => {
    setDeletingId(id);
    setIsDeleteModalOpen(true);
  };

  // Confirm delete
  const confirmDelete = async () => {
    setDeleting(true);

    const result = await deleteGalleryItem(deletingId);

    if (result.success) {
      setIsDeleteModalOpen(false);
      setDeletingId(null);

      // Show success notification
      setNotification({
        show: true,
        type: 'success',
        title: 'Deletion Successful',
        message: 'The gallery item has been deleted successfully.'
      });

      // Refresh after delay
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      setNotification({
        show: true,
        type: 'error',
        title: 'Deletion Failed',
        message: result.error
      });
      setIsDeleteModalOpen(false);
    }

    setDeleting(false);
  };

  // Close notification
  const closeNotification = () => {
    setNotification({ show: false, type: 'success', title: '', message: '' });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg text-red-500">Error: {error.message}</div>
      </div>
    );
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <main className="px-40 flex flex-1 justify-center py-10">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between items-center gap-4 p-4">
              <h1 className="text-background-dark dark:text-background-light text-3xl font-bold">Media Gallery</h1>
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary btn-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Add Media
              </button>
            </div>
            <div className="px-4 py-3 @container">
              <div className="overflow-hidden rounded-lg border border-primary/20 dark:border-primary/30 bg-background-light dark:bg-background-dark">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-primary/5 dark:bg-primary/10">
                      <th className="px-4 py-3 text-background-dark dark:text-background-light text-sm font-bold">Preview</th>
                      <th className="px-4 py-3 text-background-dark dark:text-background-light text-sm font-bold">Type</th>
                      <th className="px-4 py-3 text-background-dark dark:text-background-light text-sm font-bold">Caption</th>
                      <th className="px-4 py-3 text-background-dark dark:text-background-light text-sm font-bold">Date</th>
                      <th className="px-4 py-3 text-right text-background-dark dark:text-background-light text-sm font-bold">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-background-dark/80 dark:text-background-light/80 text-sm">
                    {gallery && gallery.length > 0 ? (
                      gallery.map((item) => (
                        <tr key={item.id} className="border-t border-primary/20 dark:border-primary/30">
                          <td className="px-4 py-4">
                            <div className="avatar">
                              <div className="w-16 h-16 rounded">
                                {item.type === 'picture' ? (
                                  <img
                                    src={`${import.meta.env.VITE_BASE_URL}${item.url}`}
                                    alt={item.caption}
                                    className="object-cover w-full h-full"
                                    onError={(e) => {
                                      e.target.src = 'https://via.placeholder.com/64x64?text=No+Image';
                                    }}
                                  />
                                ) : (
                                  <video
                                    src={`${import.meta.env.VITE_BASE_URL}${item.url}`}
                                    className="object-cover w-full h-full"
                                  />
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <span className={`badge ${item.type === 'picture' ? 'badge-info' : 'badge-secondary'}`}>
                              {item.type}
                            </span>
                          </td>
                          <td className="px-4 py-4 font-semibold text-background-dark dark:text-background-light">
                            {item.caption}
                          </td>
                          <td className="px-4 py-4">{new Date(item.created_at).toLocaleDateString()}</td>
                          <td className="px-4 py-4 text-right">
                            <div className="flex gap-2 justify-end text-primary font-bold">
                              <button
                                onClick={() => handleEdit(item)}
                                className="hover:underline"
                              >
                                Edit
                              </button>
                              <span>|</span>
                              <button
                                onClick={() => handleDeleteClick(item.id)}
                                className="hover:underline text-error"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr className="border-t border-primary/20 dark:border-primary/30">
                        <td colSpan="5" className="px-4 py-8 text-center text-background-dark/60 dark:text-background-light/60">
                          No media items found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination Controls */}
            {pagination && pagination.totalPages > 1 && (
              <div className="flex justify-center items-center py-6">
                <div className="join">
                  <button
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                    className="join-item btn btn-sm"
                  >
                    «
                  </button>
                  <button className="join-item btn btn-sm">
                    Page {pagination.currentPage} of {pagination.totalPages}
                  </button>
                  <button
                    onClick={() => setPage(page + 1)}
                    disabled={page === pagination.totalPages}
                    className="join-item btn btn-sm"
                  >
                    »
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Create/Edit Media Modal */}
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box max-w-2xl">
            <h3 className="font-bold text-lg mb-4">
              {isEditMode ? 'Edit Gallery Item' : 'Add New Gallery Item'}
            </h3>

            <form onSubmit={handleSubmit}>
              {/* Type Selection */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Media Type</span>
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="select select-bordered w-full"
                  required
                >
                  <option value="picture">Picture</option>
                  <option value="video">Video</option>
                </select>
              </div>

              {/* Caption Input */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Caption</span>
                </label>
                <input
                  type="text"
                  name="caption"
                  value={formData.caption}
                  onChange={handleInputChange}
                  placeholder="Enter caption"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Media Upload Mode Tabs */}
              <div className="tabs tabs-boxed mb-2">
                <a
                  className={`tab ${uploadMode === 'file' ? 'tab-active' : ''}`}
                  onClick={() => setUploadMode('file')}
                >
                  Upload File
                </a>
                <a
                  className={`tab ${uploadMode === 'url' ? 'tab-active' : ''}`}
                  onClick={() => setUploadMode('url')}
                >
                  Media URL
                </a>
              </div>

              {/* Media Upload - File */}
              {uploadMode === 'file' ? (
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Media File</span>
                  </label>
                  <input
                    type="file"
                    accept={formData.type === 'picture' ? 'image/*' : 'video/*'}
                    onChange={handleMediaChange}
                    className="file-input file-input-bordered w-full"
                  />
                  <label className="label">
                    <span className="label-text-alt">
                      Max size: 10MB. Formats: JPEG, JPG, PNG, GIF, WEBP
                    </span>
                  </label>
                </div>
              ) : (
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Media URL</span>
                  </label>
                  <input
                    type="url"
                    name="url"
                    value={formData.url}
                    onChange={(e) => {
                      handleInputChange(e);
                      setMediaPreview(e.target.value);
                    }}
                    placeholder="https://example.com/media.jpg"
                    className="input input-bordered w-full"
                  />
                </div>
              )}

              {/* Media Preview */}
              {mediaPreview && (
                <div className="mb-4">
                  <label className="label">
                    <span className="label-text">Preview</span>
                  </label>
                  <div className="avatar">
                    <div className="w-32 h-32 rounded">
                      {formData.type === 'picture' ? (
                        <img src={mediaPreview} alt="Preview" className="object-cover" />
                      ) : (
                        <video src={mediaPreview} controls className="object-cover" />
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {uploadError && (
                <div className="alert alert-error mb-4">
                  <span>{uploadError}</span>
                </div>
              )}

              {/* Modal Actions */}
              <div className="modal-action">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setFormData({ type: 'picture', caption: '', url: '', mediaFile: null });
                    setMediaPreview(null);
                    setUploadError(null);
                    setUploadMode('file');
                    setIsEditMode(false);
                    setEditingId(null);
                  }}
                  className="btn"
                  disabled={uploading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={uploading}
                >
                  {uploading ? (
                    <>
                      <span className="loading loading-spinner"></span>
                      {isEditMode ? 'Updating...' : 'Creating...'}
                    </>
                  ) : (
                    isEditMode ? 'Update' : 'Create'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-warning/20 flex items-center justify-center">
                  <svg
                    className="h-8 w-8 text-warning"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Are you sure?</h3>
              <p className="text-sm opacity-70">
                Are you sure you want to delete this gallery item? This action
                cannot be undone.
              </p>
            </div>
            <div className="modal-action justify-center gap-4">
              <button
                onClick={confirmDelete}
                className="btn btn-error text-white"
                disabled={deleting}
              >
                {deleting ? (
                  <>
                    <span className="loading loading-spinner"></span>
                    Deleting...
                  </>
                ) : (
                  'Confirm Delete'
                )}
              </button>
              <button
                onClick={() => {
                  setIsDeleteModalOpen(false);
                  setDeletingId(null);
                }}
                className="btn btn-ghost"
                disabled={deleting}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success/Error Notification Modal */}
      {notification.show && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-base-100 rounded-xl shadow-2xl w-full max-w-lg">
            <div className="p-6 md:p-8 text-center">
              <div className="flex justify-center mb-4">
                <div
                  className={`h-16 w-16 rounded-full flex items-center justify-center ${
                    notification.type === 'success'
                      ? 'bg-success/10'
                      : notification.type === 'error'
                      ? 'bg-error/10'
                      : 'bg-warning/10'
                  }`}
                >
                  {notification.type === 'success' ? (
                    <svg
                      className="h-8 w-8 text-success"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  ) : notification.type === 'error' ? (
                    <svg
                      className="h-8 w-8 text-error"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 18L18 6M6 6l12 12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-8 w-8 text-warning"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2">{notification.title}</h2>
              <p className="opacity-70">{notification.message}</p>
            </div>
            <div className="bg-base-200/50 px-6 py-4 flex justify-center items-center rounded-b-xl">
              <button
                onClick={closeNotification}
                className="btn btn-primary"
                type="button"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Media;
