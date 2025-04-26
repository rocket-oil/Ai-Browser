import { withPage } from '../../lib/browser';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { url, script } = req.body;
  if (!url || !script) return res.status(400).json({ error: '缺少参数' });

  try {
    const { result: value, logs } = await withPage({ url, action: page => page.evaluate(new Function('return ' + script)) });
    res.status(200).json({ value, logs });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
}