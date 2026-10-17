
import React from "react";
import "../styles/Sidebar.css";

function Sidebar() {
  const currentUser = "Mission Commander";
  const taskCount = 0;

  return (
    <aside className="sidebar">
      <h2>Mission Control</h2>

      <div className="sidebar-section">
        <h3>Current User</h3>
        <p>{currentUser}</p>
      </div>

      <div className="sidebar-section">
        <h3>Total Tasks</h3>
        <p>{taskCount}</p>
      </div>

      <button className="delete-all-btn" disabled>
        Delete All Tasks
      </button>
    </aside>
  );
}

export default Sidebar;