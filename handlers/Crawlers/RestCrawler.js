const puppeteer = require("puppeteer");

const getDetails = async (page) => {
  const phoneNumber = await page.$eval(
    ".LrzXr > a > span",
    (el) => el.textContent
  );
  const address = await page.$eval(".LrzXr", (el) => el.textContent);

  const tableHours = await page.$eval(
    ".WgFkxc > tbody",
    (el) => el.textContent
  );
  const result = {
    phoneNumber,
    tableHours,
    address,
  };
  return result;
};
exports.restaurantDetailsCrawler = async (restName) => {
  console.log("im innnn");
  try {
    const browser = await puppeteer.launch({
      defaultViewport: null,
      headless: true,
      args: ["--no-sandbox"],
      executablePath: '/usr/bin/chromium-browser'
    });

    const page = await browser.newPage();
    await page.goto(`https://www.google.com/search?q=${restName}`);
    const isPhone = await page
      .$eval("#rhs", (el) => el.textContent)
      .catch((err) => console.log(err));
    if (isPhone) {
      return await getDetails(page);
    } else {
      const goToRest = await page.$x(
        "//a[@class='C8TUKc rllt__link a-no-hover-decoration']"
      );
      if (goToRest) {
        await goToRest[0].click();
      }
      await page.waitForNavigation();
      return await getDetails(page);
    }
  } catch (err) {
    console.log(err);
  }
};
