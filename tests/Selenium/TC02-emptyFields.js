
const { Builder, By, until } = require("selenium-webdriver");

async function testEmptyFields() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://localhost:3000");

    const tasksBefore = await driver.findElements(By.css(".task-card"));

    await driver.findElement(By.id("task-title")).click();
    await driver.findElement(By.id("task-description")).click();
    await driver.findElement(By.id("task-creator")).click();
    await driver.findElement(By.id("task-assignee")).click();
    await driver.findElement(By.id("task-title")).click();

    await driver.findElement(By.css('button[type="submit"]')).click();

    const errorMessages = await driver.wait(
      until.elementsLocated(By.css(".field-error")),
      5000
    );

    if (errorMessages.length !== 4) {
      throw new Error(`Expected 4 validation errors, but found ${errorMessages.length}`);
    }

    const tasksAfter = await driver.findElements(By.css(".task-card"));

    if (tasksAfter.length !== tasksBefore.length) {
      throw new Error("A task was created with empty fields.");
    }

    console.log("TC02 PASSED: Empty fields rejected successfully");
  } catch (error) {
    console.error("TC02 FAILED:", error.message);
    process.exitCode = 1;
  } finally {
    await driver.quit();
  }
}

testEmptyFields();