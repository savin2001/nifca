import { useState } from "react";
import useAdminAuth from "../hooks/useAdmin";

const RegisterAdmin = () => {
  const { registerAdmin, loading, error, success } = useAdminAuth();
  const [adminData, setAdminData] = useState({
    username: "",
    email: "",
    role_id: 2,
    company_id: 1,
  });

  const [message, setMessage] = useState("");

  const generatePassword = () => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const generatedPassword = generatePassword();
    const result = await registerAdmin({
      ...adminData,
      password: generatedPassword,
    });

    if (result.success) {
      setMessage(result.data);
    } else {
      setMessage(result.error);
    }
    document.getElementById("my_modal_2").showModal();
  };

  return (
    <div>
      {/* Registration Form */}
      <div className="w-1/2 mx-auto mt-10">
        <h3 className="text-xl font-medium mb-4">Create New Admin</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="input input-bordered w-full"
              required
              value={adminData.username}
              onChange={(e) =>
                setAdminData({ ...adminData, username: e.target.value })
              }
            />
          </div>
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
              value={adminData.email}
              onChange={(e) =>
                setAdminData({ ...adminData, email: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label htmlFor="role_id" className="block text-sm font-medium">
              Select Role
            </label>
            <select
              id="role_id"
              name="role_id"
              className="select select-bordered w-full"
              required
              value={adminData.role_id}
              onChange={(e) =>
                setAdminData({ ...adminData, role_id: parseInt(e.target.value) })
              }
            >
              <option value={1}>Site Admin</option>
              <option value={2}>Content Admin</option>
              <option value={3}>Application Admin</option>
              <option value={4}>Press Release</option>
              <option value={5}>Media</option>
              <option value={6}>Events</option>
              <option value={7}>Client</option>
            </select>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register Admin"}
          </button>
        </form>
        {error && <p className="mt-2 text-red-500">{error}</p>}
      </div>

      {/* Modal for Success or Error */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {success ? "Admin Registered Successfully!" : "Error"}
          </h3>
          <p className="py-4">
            {success
              ? message
              : error || "An error occurred during registration."}
          </p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default RegisterAdmin;
