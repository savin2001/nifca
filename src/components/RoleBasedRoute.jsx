// src/components/RoleBasedRoute.jsx
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const RoleBasedRoute = ({ children, allowedRoles = [] }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    const decoded = jwtDecode(token);
    const userRole = decoded.role;

    // If no specific roles required, just check authentication
    if (allowedRoles.length === 0) {
      return children;
    }

    // Check if user's role is in the allowed roles
    if (allowedRoles.includes(userRole)) {
      return children;
    }

    // User doesn't have permission, redirect to dashboard
    return <Navigate to="/dashboard" replace />;
  } catch (error) {
    // Invalid token, redirect to login
    localStorage.removeItem("token");
    return <Navigate to="/login" replace />;
  }
};

export default RoleBasedRoute;
