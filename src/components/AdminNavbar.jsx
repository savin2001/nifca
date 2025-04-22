// src/components/AdminNavbar.jsx
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AdminNavbar = () => {
  const { logout } = useAuth();

  return (
    <div className="navbar bg-base-200 shadow-md">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <Link to="/dashboard" className="text-xl font-bold">Admin Panel</Link>
        <div className="flex gap-4">
          <Link to="/dashboard" className="btn btn-ghost">Dashboard</Link>
          <Link to="/register-admin" className="btn btn-ghost">New Admin</Link>
          <button onClick={logout} className="btn btn-error btn-sm">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
