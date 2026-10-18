
const { Builder, By, until } = require("selenium-webdriver");

async function testdeleteTask() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://localhost:3000");

    await driver.findElement(By.id("task-title"))
      .sendKeys("Delete tasks");

    await driver.findElement(By.id("task-description"))
      .sendKeys("This test case is to test if the delete button works");

    await driver.findElement(By.id("task-creator"))
      .sendKeys("Thabelo");

    await driver.findElement(By.id("task-assignee"))
      .sendKeys("Bridget");

    await driver.findElement(By.css('button[type="submit"]'))
      .click();

    const taskCard = await driver.wait(
      until.elementLocated(
        By.xpath("//article[contains(@class,'task-card')][.//h3[text()='Delete tasks']]")
      ),
      5000
    );

    await taskCard.findElement(By.css(".delete-task-btn")).click();
    const alert = await driver.wait(until.alertIsPresent(), 5000);
        await alert.accept();
        
    await driver.wait(
      until.stalenessOf(taskCard),
      5000
    );

    console.log("TC04 PASSED: Task deleted successfully");

  } catch (error) {
    console.error("TC04 FAILED:", error.message);
    process.exitCode = 1;
  } finally {
    await driver.quit();
  }
}

testdeleteTask();