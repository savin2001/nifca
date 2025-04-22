import { useState } from "react";
import axios from "axios";

const useAdminAuth = (endpoint = "http://localhost:3000/api/auth/register") => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const registerAdmin = async (adminData, siteAdminToken) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await axios.post(
        endpoint,
        adminData,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${siteAdminToken}`,
          },
        }
      );

      setSuccess(true);
      console.log("New Admin Registered:", res.data);
      return { success: true, data: res.data };
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
      return { success: false, error: err.response?.data?.message || "Registration failed" };
    } finally {
      setLoading(false);
    }
  };

  return { registerAdmin, loading, error, success };
};

export default useAdminAuth;
