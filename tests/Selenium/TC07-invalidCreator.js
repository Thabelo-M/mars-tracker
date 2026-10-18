
const { Builder, By, until } = require("selenium-webdriver");

async function testInvalidAssignee() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://localhost:3000");

    await driver.findElement(By.id("task-title"))
      .sendKeys("Inspect Mars Rover");

    await driver.findElement(By.id("task-description"))
      .sendKeys("Inspect the Mars mission equipment and verify all systems are working.");

    await driver.findElement(By.id("task-creator"))
      .sendKeys("Thabelo");

    await driver.findElement(By.id("task-assignee"))
      .sendKeys("Tumi@123");

    await driver.findElement(By.css(".task-form-section button[type='submit']")).click();

    const error = await driver.wait(
      until.elementLocated(By.id("assignee-error")),
      5000
    );

    if (await error.getText() !== "Name must contain letters and spaces only.") {
      throw new Error("Incorrect assignee validation message.");
    }

    console.log("TC07 PASSED: Invalid assignee rejected successfully");
  } catch (error) {
    console.error("TC07 FAILED:", error.message);
    process.exitCode = 1;
  } finally {
    await driver.quit();
  }
}

testInvalidAssignee();