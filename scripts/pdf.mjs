#!/usr/bin/env node

import { chromium } from 'playwright';

const URL = (process.env.NODE_ENV === 'debug')
  ? 'http://localhost:3000'
  : 'https://resume.flandre.tw';

(async() => {
  const browser = await chromium.launch();
  const printToPDF = async(url, outName) => {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.pdf({
      path: outName,
      pageRanges: '1',
    });
  };

  await Promise.all([
    printToPDF(`${URL}?lang=zh-TW`, './resume.zh-TW.pdf'),
    printToPDF(`${URL}?lang=en`, './resume.en.pdf'),
  ]);

  await browser.close();
})();
