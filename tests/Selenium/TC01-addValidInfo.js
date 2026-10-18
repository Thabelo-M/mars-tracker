//TC01: Create a task with valid information
const { Builder, By, until } = require("selenium-webdriver");

async function testCreateTask() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://localhost:3000");

    await driver.findElement(By.id("task-title"))
      .sendKeys("Inspect Mars Rover 2");

    await driver.findElement(By.id("task-description"))
      .sendKeys("Inspect the Mars rover and verify all its systems are working correctly.");

    await driver.findElement(By.id("task-creator"))
      .sendKeys("Thabelo");

    await driver.findElement(By.id("task-assignee"))
      .sendKeys("Mthokozisi");

    await driver.findElement(By.css('button[type="submit"]'))
      .click();

    await driver.wait(
      until.elementLocated(By.xpath("//h3[text()='Inspect Mars Rover 2']")),
      5000
    );

    console.log("TC01 PASSED: Task created successfully");
    await driver.sleep(2000);
  } catch (error) {
    console.error("TC01 FAILED:", error.message);
    process.exitCode = 1;
  } finally {
    await driver.quit();
  }
}
testCreateTask();