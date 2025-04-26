import { withPage } from '../../lib/browser';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: '缺少 URL' });

  try {
    const { result: html, logs } = await withPage({ url, action: page => page.content() });
    res.status(200).json({ html, logs });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
}