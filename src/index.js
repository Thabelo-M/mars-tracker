import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./styles/App.css";
import MarsImage from "./components/MarsImage";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <Header />

      <div className="dashboard-layout">
        <Sidebar taskCount={tasks.length} />

        <main>
          <MarsImage />
          <h2>Mars Mission Dashboard</h2>
          <p>Manage and track your mission tasks here.</p>

          <TaskForm />
        </main>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);