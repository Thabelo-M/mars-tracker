
import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./styles/App.css";

function App() {
  return (
    <div>
      <Header />

      <div className="dashboard-layout">
        <Sidebar />

        <main>
          <h2>Mars Mission Dashboard</h2>
          <p>Manage and track your mission tasks here.</p>
        </main>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);