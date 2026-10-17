import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./styles/App.css";
import MarsImage from "./components/MarsImage";
import TaskForm from "./components/TaskForm";
import TaskRead from "./components/TaskRead";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(taskData) {
    const newTask = {
    id: crypto.randomUUID(),
    ...taskData,
  };
  
  setTasks((previousTasks) => [...previousTasks, newTask]);
}
 
  function deleteTask(taskId) {
   const taskToDelete = tasks.find((task) => task.id === taskId);
  if (!taskToDelete) {
    return;
  }
  const confirmed = window.confirm(
    `Are you sure you want to delete "${taskToDelete.title}"?`
  );

  if (confirmed) {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== taskId)
    );
  }
}

  function deleteAllTasks() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all mission tasks?"
    );
    if (confirmed) {
      setTasks([]);
      }
  }
  
  function updateTask(taskId, updatedData) {
   setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? { ...task, ...updatedData }
          : task
     )
   );
  }

  return (
    <div>
      <Header />

      <div className="dashboard-layout">
        <Sidebar 
        taskCount={tasks.length}
        onDeleteAll={deleteAllTasks}
        />

        <main>
          <MarsImage />
          <h2>Mars Mission Dashboard</h2>
          <p>Manage and track your mission tasks here.</p>

          <TaskForm onAddTask={addTask} />
          <TaskRead
          tasks={tasks}
          onDeleteTask={deleteTask}
          onUpdateTask={updateTask}
          />
        </main>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);