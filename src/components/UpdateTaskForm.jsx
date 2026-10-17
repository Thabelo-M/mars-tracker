import React, { useState } from "react";

function UpdateTaskForm({ task, onSave, onCancel }) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [creator, setCreator] = useState(task.creator);
  const [assignee, setAssignee] = useState(task.assignee);

  function handleSubmit(event) {
    event.preventDefault();

    const updatedData = {
      title: title.trim(),
      description: description.trim(),
      creator: creator.trim(),
      assignee: assignee.trim(),
    };

    if (Object.values(updatedData).some((value) => !value)) {
      return;
    }

    onSave(task.id, updatedData);
  }

  return (
    <form className="update-task-form" onSubmit={handleSubmit}>
      <label htmlFor={`update-title-${task.id}`}>Task Title</label>
      <input
        id={`update-title-${task.id}`}
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />

      <label htmlFor={`update-description-${task.id}`}>Description</label>
      <textarea
        id={`update-description-${task.id}`}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      />

      <label htmlFor={`update-creator-${task.id}`}>Created By</label>
      <input
        id={`update-creator-${task.id}`}
        type="text"
        value={creator}
        onChange={(event) => setCreator(event.target.value)}
        required
      />

      <label htmlFor={`update-assignee-${task.id}`}>Assigned To</label>
      <input
        id={`update-assignee-${task.id}`}
        type="text"
        value={assignee}
        onChange={(event) => setAssignee(event.target.value)}
        required
      />

      <div className="update-task-actions">
        <button type="submit" className="save-task-btn">
          Save Changes
        </button>

        <button
          type="button"
          className="cancel-update-btn"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default UpdateTaskForm;