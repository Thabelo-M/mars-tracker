
const { Builder, By, until } = require("selenium-webdriver");

async function testCancelUpdate() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://localhost:3000");

    await driver.findElement(By.id("task-title"))
      .sendKeys("Inspect Mars Rover");

    await driver.findElement(By.id("task-description"))
      .sendKeys("Inspect the Mars rover and verify all mission systems.");

    await driver.findElement(By.id("task-creator"))
      .sendKeys("Thabelo");

    await driver.findElement(By.id("task-assignee"))
      .sendKeys("Tumi");

    await driver.findElement(By.css(".task-form-section button[type='submit']")).click();

    const taskCard = await driver.wait(
      until.elementLocated(
        By.xpath("//article[contains(@class,'task-card')][.//h3[text()='Inspect Mars Rover']]")
      ),
      5000
    );

    await driver.sleep(2000);
    await taskCard.findElement(By.css(".update-task-btn")).click();

    const updateForm = await driver.wait(
      until.elementLocated(By.css(".update-task-form")),
      5000
    );

    const titleInput = await updateForm.findElement(
      By.css("input[id^='update-title-']")
    );

    await titleInput.clear();
    await titleInput.sendKeys("Changed Mars Task");

    await driver.sleep(3000);
    await updateForm.findElement(By.css(".cancel-update-btn")).click();

    await driver.wait(
      until.elementLocated(
        By.xpath("//article[contains(@class,'task-card')][.//h3[text()='Inspect Mars Rover']]")
      ),
      5000
    );

    const changedTasks = await driver.findElements(
      By.xpath("//h3[text()='Changed Mars Task']")
    );

    if (changedTasks.length > 0) {
      throw new Error("Changes were saved after clicking Cancel.");
    }

    console.log("TC09 PASSED: Update cancelled successfully");
    await driver.sleep(3000);
  } catch (error) {
    console.error("TC09 FAILED:", error.message);
    process.exitCode = 1;
  } finally {
    await driver.quit();
  }
}

testCancelUpdate();