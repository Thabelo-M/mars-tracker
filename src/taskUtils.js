
function createTask(tasks, taskData) {
  const newTask = {
    id: crypto.randomUUID(),
    ...taskData,
  };
  return [...tasks, newTask];
}
module.exports = { createTask };