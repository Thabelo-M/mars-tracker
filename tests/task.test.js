
const { createTask } = require("../src/taskUtils");

describe("Mars Mission Task Tracker", () => {
  test("should create a new mission task", () => {
    const tasks = [];

    const taskData = {
      title: "Inspect Mars Rover",
      description: "Inspect the Mars rover and check all its systems.",
      creator: "John Smith",
      assignee: "Sarah Jones",
    };

    const updatedTasks = createTask(tasks, taskData);

    expect(updatedTasks.length).toBe(1);
    expect(updatedTasks[0].title).toBe("Inspect Mars Rover");
    expect(updatedTasks[0].creator).toBe("John Smith");
    expect(updatedTasks[0].id).toBeDefined();
  });
});