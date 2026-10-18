import React, { useState } from "react";
import "../styles/TaskForm.css";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [creator, setCreator] = useState("");
  const [assignee, setAssignee] = useState("");

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  function validateField(field, value) {
    const trimmedValue = value.trim();
    if (!trimmedValue) {
      return "This field is required.";
    }

    if (field === "title") {
      if (!/[A-Za-z]/.test(trimmedValue)) {
        return "Task title must contain letters, not only numbers.";
      }
    }

    if (field === "description") {
      const letterCount = (
        trimmedValue.match(/[A-Za-z]/g) || []
      ).length;

      if (letterCount < 20) {
        return "Description must contain at least 20 letters.";
      }
    }

    if (field === "creator" || field === "assignee") {
      const namePattern = /^[A-Za-z]+(?: [A-Za-z]+)*$/;

      if (!namePattern.test(trimmedValue)) {
        return "Name must contain letters and spaces only.";
      }
    }

    return "";
  }

  function handleBlur(field, value) {
    setErrors((previousErrors) => ({
      ...previousErrors,
      [field]: validateField(field, value),
    }));
  }

  function handleChange(field, value, setter) {
    setter(value);
    setSuccessMessage("");

    if (errors[field]) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        [field]: validateField(field, value),
      }));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newTask = {
      title: title.trim(),
      description: description.trim(),
      creator: creator.trim(),
      assignee: assignee.trim(),
    };

    const newErrors = {};

    Object.entries(newTask).forEach(([field, value]) => {
      const error = validateField(field, value);

      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);
    setSuccessMessage("");

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    onAddTask(newTask);

    setTitle("");
    setDescription("");
    setCreator("");
    setAssignee("");
    setErrors({});

    setSuccessMessage("Mission task added successfully!");
  }

  return (
    <section className="task-form-section">
      <h2>Create a Mission Task</h2>

      <form onSubmit={handleSubmit} noValidate>

        <label htmlFor="task-title">Task Title</label>
        <input
          id="task-title"
          type="text"
          value={title}
          onChange={(event) =>
            handleChange("title", event.target.value, setTitle)
          }
          onBlur={() => handleBlur("title", title)}
          placeholder="e.g. Inspect the Mars rover"
          aria-invalid={Boolean(errors.title)}
          aria-describedby={errors.title ? "title-error" : undefined}
          required
        />
        {errors.title && (
          <p id="title-error" className="field-error" role="alert">
            {errors.title}
          </p>
        )}

        <label htmlFor="task-description">Description</label>
        <textarea
          id="task-description"
          value={description}
          onChange={(event) =>
            handleChange(
              "description",
              event.target.value,
              setDescription
            )
          }
          onBlur={() => handleBlur("description", description)}
          placeholder="Describe the mission task"
          aria-invalid={Boolean(errors.description)}
          aria-describedby={
            errors.description ? "description-error" : undefined
          }
          required
        />
        {errors.description && (
          <p id="description-error" className="field-error" role="alert">
            {errors.description}
          </p>
        )}

        <label htmlFor="task-creator">Created By</label>
        <input
          id="task-creator"
          type="text"
          value={creator}
          onChange={(event) =>
            handleChange("creator", event.target.value, setCreator)
          }
          onBlur={() => handleBlur("creator", creator)}
          placeholder="Enter creator's name"
          aria-invalid={Boolean(errors.creator)}
          aria-describedby={errors.creator ? "creator-error" : undefined}
          required
        />
        {errors.creator && (
          <p id="creator-error" className="field-error" role="alert">
            {errors.creator}
          </p>
        )}

        <label htmlFor="task-assignee">Assigned To</label>
        <input
          id="task-assignee"
          type="text"
          value={assignee}
          onChange={(event) =>
            handleChange("assignee", event.target.value, setAssignee)
          }
          onBlur={() => handleBlur("assignee", assignee)}
          placeholder="Enter assignee's name"
          aria-invalid={Boolean(errors.assignee)}
          aria-describedby={
            errors.assignee ? "assignee-error" : undefined
          }
          required
        />
        {errors.assignee && (
          <p id="assignee-error" className="field-error" role="alert">
            {errors.assignee}
          </p>
        )}

        <button type="submit">Add Mission Task</button>

        {successMessage && (
          <p className="form-success" role="status">
            {successMessage}
          </p>
        )}
      </form>
    </section>
  );
}

export default TaskForm;