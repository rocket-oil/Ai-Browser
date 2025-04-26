import { withPage } from '../../lib/browser';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { url, selector } = req.body;
  if (!url) return res.status(400).json({ error: '缺少 URL' });

  try {
    const { result: buffer, logs } = await withPage({
      url,
      action: async page => {
        if (selector) { const rect = await page.$eval(selector, el => { const { x, y, width, height } = el.getBoundingClientRect(); return { x, y, width, height }; }); return page.screenshot({ clip: rect }); }
        return page.screenshot({ fullPage: true });
      }
    });
    const b64 = buffer.toString('base64');
    res.status(200).json({ image: b64, logs });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
}