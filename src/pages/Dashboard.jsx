import React from "react";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) return <p>Loading...</p>; // or redirect to login

  const renderDashboard = () => {
    switch (user.role) {
      case 1:
        return <h2>Welcome, Site Admin!</h2>;
      case 2:
        return <h2>Welcome, Content Admin!</h2>;
      case 3:
        return <h2>Welcome, Application Admin!</h2>;
      default:
        return <h2>Welcome, User!</h2>;
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      {renderDashboard()}
    </div>
  );
};

export default Dashboard;
