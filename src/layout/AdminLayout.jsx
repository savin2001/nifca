// src/layout/AdminLayout.jsx
import Navbar from "../components/AdminNavbar"; // create this if different from public Navbar
import Footer from "../components/Footer";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen p-4 bg-gray-100">{children}</main>
      <Footer />
    </div>
  );
};

export default AdminLayout;
