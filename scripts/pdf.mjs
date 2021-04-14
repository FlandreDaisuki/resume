#!/usr/bin/env node

import { chromium } from 'playwright';

(async() => {
  const browser = await chromium.launch();
  const printToPDF = async(url, outName) => {
    const page = await browser.newPage();
    await page.goto(url);
    await page.pdf({
      path: outName,
      pageRanges: '1',
    });
  };

  await Promise.all([
    printToPDF('https://resume.flandre.tw?lang=zh-TW', './resume (zh-TW).pdf'),
    printToPDF('https://resume.flandre.tw?lang=en', './resume (en).pdf'),
  ]);

  await browser.close();
})();
