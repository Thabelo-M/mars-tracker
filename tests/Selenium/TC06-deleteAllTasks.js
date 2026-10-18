
const { Builder, By, until } = require("selenium-webdriver");

async function testdeleteAllTasks() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://localhost:3000");

    const taskNames = ["Inspect Mars Rover", "Check Mars"];

    for (const taskName of taskNames) {
      await driver.findElement(By.id("task-title"))
        .sendKeys(taskName);

      await driver.findElement(By.id("task-description"))
        .sendKeys("Inspect the Mars mission equipment and verify all systems are working.");

      await driver.findElement(By.id("task-creator"))
        .sendKeys("Thabelo");

      await driver.findElement(By.id("task-assignee"))
        .sendKeys("Tumi");

      await driver.findElement(By.css(".task-form-section button[type='submit']"))
        .click();

      await driver.wait(
        until.elementLocated(By.xpath(`//h3[text()='${taskName}']`)),
        5000
      );
    }

    console.log("Two tasks created successfully.");
    await driver.sleep(1000);

    const taskCardsBefore = await driver.findElements(By.css(".task-card"));

    if (taskCardsBefore.length < 2) {
      throw new Error("Expected at least two tasks before deletion.");
    }

    const deleteAllButton = await driver.findElement(
      By.css(".delete-all-btn")
    );

    await driver.executeScript(
      "arguments[0].scrollIntoView({block: 'center'});",
      deleteAllButton
    );

    console.log("Preparing to delete all tasks...");
    await driver.sleep(1000);

    await deleteAllButton.click();

    const alert = await driver.wait(
      until.alertIsPresent(),
      5000
    );

    const alertText = await alert.getText();

    if (alertText !== "Are you sure you want to delete all mission tasks?") {
      throw new Error("Unexpected delete confirmation message.");
    }

    console.log("Delete confirmation popup opened.");
    await driver.sleep(1000);

    await alert.accept();

    await driver.wait(async () => {
      const taskCards = await driver.findElements(By.css(".task-card"));
      return taskCards.length === 0;
    }, 5000);

    console.log("TC06 PASSED: All tasks deleted successfully");

    await driver.sleep(1000);

  } catch (error) {
    console.error("TC06 FAILED:", error.message);
    process.exitCode = 1;
  } finally {
    await driver.quit();
  }
}

testdeleteAllTasks();