import chromium from 'chrome-aws-lambda';
let pCore = null;
let pFull = null;

async function launchBrowser() {
  const isProd = process.env.NODE_ENV === 'production';

  // 第一次调用时再加载，减少包体积
  if (!pCore) pCore = await import('puppeteer-core');
  if (!pFull) pFull = await import('puppeteer');

  if (isProd) {
    // 生产：Vercel/Serverless 上用 chrome-aws-lambda 提供的 Chromium
    const executablePath = await chromium.executablePath;
    return pCore.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath,
      headless: chromium.headless,
    });
  } else {
    // 本地：用完整版 puppeteer，自动下载的 Chromium
    return pFull.launch({
      headless: true,
    });
  }
}

// 通用页面操作
export async function withPage({ url, action }) {
  const browser = await launchBrowser();
  const page = await browser.newPage();
  const logs = [];

  page.on('console', msg => logs.push(msg.text()));
  page.on('pageerror', err => logs.push(err.message));

  await page.goto(url, { waitUntil: 'networkidle2', timeout: 0 });
  const result = await action(page);
  await browser.close();

  return { result, logs };
}