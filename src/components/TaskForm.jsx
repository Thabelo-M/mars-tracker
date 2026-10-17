
import React, { useState } from "react";
import "../styles/TaskForm.css";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [creator, setCreator] = useState("");
  const [assignee, setAssignee] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Task submitted:", {
      title,
      description,
      creator,
      assignee,
    });
  }

  return (
    <section className="task-form-section">
      <h2>Create a Mission Task</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="task-title">Task Title</label>
        <input
          id="task-title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="e.g. Inspect the Mars rover"
          required
        />

        <label htmlFor="task-description">Description</label>
        <textarea
          id="task-description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Describe the mission task"
          required
        />

        <label htmlFor="task-creator">Created By</label>
        <input
          id="task-creator"
          type="text"
          value={creator}
          onChange={(event) => setCreator(event.target.value)}
          placeholder="Enter creator's name"
          required
        />

        <label htmlFor="task-assignee">Assigned To</label>
        <input
          id="task-assignee"
          type="text"
          value={assignee}
          onChange={(event) => setAssignee(event.target.value)}
          placeholder="Enter assignee's name"
          required
        />

        <button type="submit">Add Mission Task</button>
      </form>
    </section>
  );
}

export default TaskForm;
