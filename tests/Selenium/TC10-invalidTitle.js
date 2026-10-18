
const { Builder, By, until } = require("selenium-webdriver");

async function testInvalidTitle() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://localhost:3000");

    const tasksBefore = await driver.findElements(By.css(".task-card"));

    await driver.findElement(By.id("task-title"))
      .sendKeys("123456");

    await driver.findElement(By.id("task-description"))
      .sendKeys("Inspect the Mars rover and verify all mission systems.");

    await driver.findElement(By.id("task-creator"))
      .sendKeys("Thabelo");

    await driver.findElement(By.id("task-assignee"))
      .sendKeys("Tumi");

    await driver.sleep(2000);

    await driver.findElement(By.css(".task-form-section button[type='submit']"))
      .click();

    const error = await driver.wait(
      until.elementLocated(By.id("title-error")),
      5000
    );

    const message = await error.getText();

    if (message !== "Task title must contain letters, not only numbers.") {
      throw new Error("Incorrect title validation message.");
    }

    const tasksAfter = await driver.findElements(By.css(".task-card"));

    if (tasksAfter.length !== tasksBefore.length) {
      throw new Error("Invalid task was created.");
    }

    console.log("TC10 PASSED: Invalid title rejected successfully");
    await driver.sleep(3000);

  } catch (error) {
    console.error("TC10 FAILED:", error.message);
    process.exitCode = 1;
  } finally {
    await driver.quit();
  }
}

testInvalidTitle();