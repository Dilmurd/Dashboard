import React from "react";
import AddItem from "../AddItem/AddItem";
import ItemList from "../ItemList/ItemList";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-card">
        <h2>Add New Item</h2>
        <AddItem />
      </div>
      <div className="dashboard-card">
        <h2>Item List</h2>
        <ItemList />
      </div>
    </div>
  );
};

export default Dashboard;
