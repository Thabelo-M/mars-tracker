
const { Builder, By, until } = require("selenium-webdriver");

async function testUpdateTask() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://localhost:3000");
    await driver.sleep(2000);

    await driver.findElement(By.id("task-title"))
      .sendKeys("Inspect Mars Rover");

    await driver.findElement(By.id("task-description"))
      .sendKeys("Inspect the Mars rover and check that all systems are working.");

    await driver.findElement(By.id("task-creator"))
      .sendKeys("Thabelo");

    await driver.findElement(By.id("task-assignee"))
      .sendKeys("Tumi");

    await driver.sleep(2000);

    await driver.findElement(By.css(".task-form-section button[type='submit']"))
      .click();

    const taskCard = await driver.wait(
      until.elementLocated(
        By.xpath("//article[contains(@class,'task-card')][.//h3[text()='Inspect Mars Rover']]")
      ),
      5000
    );

    console.log("Task created. Now updating...");
    await driver.sleep(3000);

    await taskCard.findElement(By.css(".update-task-btn")).click();

    const updateForm = await driver.wait(
      until.elementLocated(By.css(".update-task-form")),
      5000
    );

    console.log("Update form opened.");
    await driver.sleep(3000);

    const titleInput = await updateForm.findElement(
      By.css("input[id^='update-title-']")
    );

    await titleInput.clear();
    await titleInput.sendKeys("Inspect Mars Rover Updated");

    console.log("New title entered.");
    await driver.sleep(3000);

    await updateForm.findElement(By.css(".save-task-btn")).click();

    await driver.wait(
      until.elementLocated(
        By.xpath("//article[contains(@class,'task-card')][.//h3[text()='Inspect Mars Rover Updated']]")
      ),
      5000
    );

    console.log("TC05 PASSED: Task updated successfully");

    await driver.sleep(5000);

  } catch (error) {
    console.error("TC05 FAILED:", error.message);
    process.exitCode = 1;
  } finally {
    await driver.quit();
  }
}

testUpdateTask();