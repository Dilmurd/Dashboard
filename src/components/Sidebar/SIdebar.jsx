import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li>Home</li>
        <li>Items</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
