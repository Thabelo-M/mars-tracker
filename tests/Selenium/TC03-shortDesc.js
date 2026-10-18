
const { Builder, By, until } = require("selenium-webdriver");

async function testShortDesc() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://localhost:3000");

    await driver.findElement(By.id("task-title"))
      .sendKeys("Inspect Mars");

    await driver.findElement(By.id("task-description"))
      .sendKeys("Check the sky");

    await driver.findElement(By.id("task-creator"))
      .sendKeys("Thabelo");

    await driver.findElement(By.id("task-assignee"))
      .sendKeys("Tumi");

    await driver.findElement(By.css('button[type="submit"]'))
      .click();

    const descriptionError = await driver.wait(
      until.elementLocated(By.id("description-error")),
      5000
    );

    const message = await descriptionError.getText();

    if (message !== "Description must contain at least 20 letters.") {
      throw new Error("Incorrect description validation message.");
    }

    const successMessages = await driver.findElements(
      By.css(".form-success")
    );

    if (successMessages.length > 0) {
      throw new Error("Invalid task was submitted successfully.");
    }

    console.log("TC03 PASSED: Short description rejected successfully");

  } catch (error) {
    console.error("TC03 FAILED:", error.message);
    process.exitCode = 1;
  } finally {
    await driver.quit();
  }
}

testShortDesc();