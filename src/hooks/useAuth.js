import { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";  // Import useNavigate

const useAuth = (endpoint = "http://localhost:3000/api/auth/login") => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [user, setUser] = useState(() => {
    const storedToken = localStorage.getItem("token");
    return storedToken ? jwtDecode(storedToken) : null;
  });

  const navigate = useNavigate();  // Initialize navigate

  const login = async (credentials) => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post(endpoint, credentials);
      const token = res.data.token;
      const decoded = jwtDecode(token);

      localStorage.setItem("token", token);
      setToken(token);
      setUser(decoded); // <- store decoded payload
      // console.log("Decoded Token:", decoded);

      return { success: true, token };
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    navigate("/login");  // Redirect to login page after logout
  };

  return { login, logout, loading, error, token, user };
};

export default useAuth;
