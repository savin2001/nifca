
import { useState } from "react";
import axios from "axios";

const useAdminAuth = (endpoint = `${import.meta.env.VITE_BASE_URL}/api/auth/register`) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [success, setSuccess] = useState(false);
  
    const registerAdmin = async (adminData) => {
      const siteAdminToken = localStorage.getItem("token");
  
      if (!siteAdminToken) {
        setError("Site admin token is required.");
        return { success: false, error: "Site admin token is missing" };
      }
  
      setLoading(true);
      setError(null);
      setSuccess(false);
  
      try {
        const res = await axios.post(endpoint, adminData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${siteAdminToken}`,
          },
        });
  
        const message = res.data.message;
        setSuccess(true);
        setData(message);
  
        return { success: true, data: message };
      } catch (err) {
        const errorMessage = err.response?.data?.message || "Registration failed";
        setError(errorMessage);
        return { success: false, error: errorMessage };
      } finally {
        setLoading(false);
      }
    };
  
    return { registerAdmin, loading, error, success, data };
  };

  export default useAdminAuth;
  