#!/usr/bin/env node

import { mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { chromium } from 'playwright';

const url = process.env.RESUME_URL ?? 'https://resume.flandre.tw';
const outputPath = resolve(
  process.env.PDF_OUTPUT ?? './Resume_LienChunHao.pdf',
);

await mkdir(dirname(outputPath), { recursive: true });

const printToPDF = async(pageUrl, destination) => {
  const browser = await chromium.launch();

  try {
    const page = await browser.newPage();
    const response = await page.goto(pageUrl, { waitUntil: 'networkidle' });

    if (!response?.ok()) {
      throw new Error(`Failed to load ${pageUrl}: HTTP ${response?.status() ?? 'unknown'}`);
    }

    await page.pdf({
      path: destination,
      printBackground: true,
    });
  } finally {
    await browser.close();
  }
};

await printToPDF(url, outputPath);
console.log(`PDF generated from ${url}: ${outputPath}`);
