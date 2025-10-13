import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import BreadCrumbMenu from "../components/BreadCrumbMenu";

const Login = () => {
  const navigate = useNavigate();
  const { login, error, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const breadcrumbLinks = [{ to: "/login", label: "Login" }];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login({ email, password });

    if (result.forcePasswordChange) {
      // Save the token temporarily for password change
      localStorage.setItem("tempToken", result.token);
      alert(result.message || "You must change your password first.");
      navigate("/change-password");
      return;
    }

    if (result.success) {
      navigate("/dashboard");
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
                "url(https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1950&q=80)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div>
                <h1 className="mb-5 text-5xl font-light uppercase">Login</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <BreadCrumbMenu links={breadcrumbLinks} />

      {/* Login Layout */}
      <div className="max-w-screen-lg mx-auto flex gap-10 my-20">
        {/* Info / Welcome Section */}
        <div className="w-1/2">
          <h3 className="text-xl font-medium mb-4">Welcome Back!</h3>
          <p className="mb-4">
            Login to access your dashboard and manage your account securely.
          </p>
          <div className="collapse collapse-arrow border-base-300 bg-base-200 border mb-4">
            <div className="collapse-title text-xl font-medium">Forgot your password?</div>
            <div className="collapse-content">
              <p>Click on the "Forgot Password" link on the login page to reset it via email.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow border-base-300 bg-base-200 border mb-4">
            <div className="collapse-title text-xl font-medium">Don't have an account?</div>
            <div className="collapse-content">
              <p>Contact your administrator or sign up if registration is available.</p>
            </div>
          </div>
        </div>

        {/* Login Form Section */}
        <div className="w-1/2">
          <h3 className="text-xl font-medium mb-4">Login Form</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="input input-bordered w-full"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="input input-bordered w-full"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary w-full" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
            {error && <p className="mt-2 text-red-500">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
