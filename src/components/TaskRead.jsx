
import React, { useState } from "react";
import "../styles/TaskRead.css";
import UpdateTaskForm from "./UpdateTaskForm";

function TaskRead({ tasks, onDeleteTask, onUpdateTask }) {
  const [updateTaskId, setUpdateTaskId] = useState(null);
  function handleUpdateTask(taskId, updatedData) {
    onUpdateTask(taskId, updatedData);
    setUpdateTaskId(null);
  }
  return (
    <section className="task-list-section">
      <h2>Mission Tasks</h2>
      {tasks.length === 0 ? (
        <p>No mission found yet. Create your first task!</p>
      ) : (
        <div className="task-list">
          {tasks.map((task) => (
            <article className="task-card" key={task.id}>
              {updateTaskId === task.id ? (
                <UpdateTaskForm
                  task={task}
                  onSave={handleUpdateTask}
                  onCancel={() => setUpdateTaskId(null)}
                />
              ) : (
                <>
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                  <p>
                    <strong>Created By:</strong> {task.creator}
                  </p>
                  <p>
                    <strong>Assigned To:</strong> {task.assignee}
                  </p>
                  <div className="task-card-actions">
                    <button
                      type="button"
                      className="update-task-btn"
                      onClick={() => setUpdateTaskId(task.id)}
                    >
                      Update Task
                    </button>
                    <button
                      type="button"
                      className="delete-task-btn"
                      onClick={() => onDeleteTask(task.id)}
                    >
                      Delete Task
                    </button>
                  </div>
                </>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
export default TaskRead;