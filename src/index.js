
import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Welcome to Mars Mission Tracker!</h1>
      <p>Thabelo, we have a task!</p>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);