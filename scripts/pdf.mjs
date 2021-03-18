#!/usr/bin/env node

import { chromium } from 'playwright';

(async() => {
  const browser = await chromium.launch();
  // Create pages, interact with UI elements, assert values
  const page = await browser.newPage();
  await page.goto('https://resume.flandre.tw');
  await page.pdf({
    path: './resume.pdf',
    pageRanges: '1',
  });
  await browser.close();
})();
