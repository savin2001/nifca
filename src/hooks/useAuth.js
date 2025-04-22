import { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const useAuth = (endpoint = "http://localhost:3000/api/auth/login") => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [user, setUser] = useState(() => {
    const storedToken = localStorage.getItem("token");
    return storedToken ? jwtDecode(storedToken) : null;
  });

  const navigate = useNavigate();

  const login = async (credentials) => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post(endpoint, credentials);
      const { token, forcePasswordChange, message } = res.data;

      if (forcePasswordChange) {
        return {
          success: false,
          forcePasswordChange: true,
          token,
          message,
        };
      }

      const decoded = jwtDecode(token);
      localStorage.setItem("token", token);
      setToken(token);
      setUser(decoded);

      return { success: true, token };
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  const changePassword = async (oldPassword, newPassword) => {
    setLoading(true);
    setError(null);

    const tempToken = localStorage.getItem("tempToken");
    if (!tempToken) {
      setError("Missing temporary token");
      setLoading(false);
      return { success: false };
    }

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/change-password",
        { oldPassword, newPassword },
        { headers: { Authorization: `Bearer ${tempToken}` } }
      );

      const { token } = res.data;
      const decoded = jwtDecode(token);
      console.log(decoded);
      localStorage.setItem("token", token);
      localStorage.removeItem("tempToken");
      setToken(token);
      setUser(decoded);

      navigate("/dashboard");
      return { success: true };
    } catch (err) {
      setError(err.response?.data?.error || "Password change failed");
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    navigate("/login");
  };

  return { login, logout, changePassword, loading, error, token, user };
};

export default useAuth;
