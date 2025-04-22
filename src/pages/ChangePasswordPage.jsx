import React, { useState } from "react";
import BreadCrumbMenu from "../components/BreadCrumbMenu";
import useAuth from "../hooks/useAuth";

const ChangePasswordPage = () => {
  const { changePassword, loading, error } = useAuth();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [localError, setLocalError] = useState("");

  const breadcrumbLinks = [
    { to: "/login", label: "Login" },
    { to: "/change-password", label: "Change Password" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError("");

    if (newPassword !== confirmPassword) {
      setLocalError("Passwords do not match.");
      return;
    }

    const { success } = await changePassword(oldPassword, newPassword);
    if (!success) {
      setLocalError("Failed to change password.");
    }
  };

  return (
    <div className="relative">
      {/* Hero Banner */}
      <div className="carousel w-full h-1/2">
        <div className="carousel-item relative w-full">
          <div
            className="hero h-[50vh]"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1605902711622-cfb43c44367e?auto=format&fit=crop&w=1950&q=80)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div>
                <h1 className="mb-5 text-5xl font-light uppercase">
                  Change Password
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <BreadCrumbMenu links={breadcrumbLinks} />

      {/* Change Password Layout */}
      <div className="max-w-screen-sm mx-auto my-20">
        <h3 className="text-xl font-medium mb-6">Update Your Password</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="oldPassword" className="block text-sm font-medium">
              Current Password
            </label>
            <input
              type="password"
              id="oldPassword"
              name="oldPassword"
              className="input input-bordered w-full"
              required
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-sm font-medium">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              className="input input-bordered w-full"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="input input-bordered w-full"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? "Changing..." : "Change Password"}
          </button>
          {(error || localError) && (
            <p className="mt-2 text-red-500">{error || localError}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
