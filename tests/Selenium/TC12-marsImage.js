
const { Builder, By, until } = require("selenium-webdriver");

async function testMarsImage() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://localhost:3000");

    const marsImage = await driver.wait(
      until.elementLocated(By.css(".mars-image")),
      15000
    );

    const imageLoaded = await driver.executeScript(
      "return arguments[0].complete && arguments[0].naturalWidth > 0;",
      marsImage
    );

    if (!imageLoaded) {
      throw new Error("Mars image did not load correctly.");
    }

    console.log("TC12 PASSED: Mars image loaded successfully");
    await driver.sleep(3000);

  } catch (error) {
    console.error("TC12 FAILED:", error.message);
    process.exitCode = 1;
  } finally {
    await driver.quit();
  }
}

testMarsImage();