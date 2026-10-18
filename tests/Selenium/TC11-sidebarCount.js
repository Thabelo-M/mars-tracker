
const { Builder, By, until } = require("selenium-webdriver");

async function testSidebarCount() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://localhost:3000");

    const taskNames = ["Inspect Mars Rover", "Check Mars Equipment"];

    for (const taskName of taskNames) {
      await driver.findElement(By.id("task-title"))
        .sendKeys(taskName);

      await driver.findElement(By.id("task-description"))
        .sendKeys("Inspect the Mars mission equipment and verify all systems.");

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
    await driver.sleep(3000);

    const taskCards = await driver.findElements(By.css(".task-card"));

    const taskCount = await driver.findElement(
      By.xpath("//aside[contains(@class,'sidebar')]//h3[text()='Total Tasks']/following-sibling::p")
    );

    const displayedCount = Number(await taskCount.getText());

    if (displayedCount !== taskCards.length) {
      throw new Error(
        `Sidebar shows ${displayedCount}, but found ${taskCards.length} tasks.`
      );
    }

    console.log("TC11 PASSED: Sidebar task count is correct");
    await driver.sleep(3000);

  } catch (error) {
    console.error("TC11 FAILED:", error.message);
    process.exitCode = 1;
  } finally {
    await driver.quit();
  }
}

testSidebarCount();