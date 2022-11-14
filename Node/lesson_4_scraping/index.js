const puppeteer = require('puppeteer')

const script = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://es.wallapop.com/')
  await page.screenshot({ path: 'wallapop-policy.jpg' })

  await page.click('#onetrust-accept-btn-handler');
  await page.screenshot({ path: 'wallapop-home.jpg' });

  await page.type('.Search__input', 'funko pop');
  await page.screenshot({ path: 'wallapop-funko-pop.jpg' });

}

script()


