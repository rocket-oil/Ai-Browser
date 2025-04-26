import { withPage } from '../../lib/browser';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: '缺少 URL' });

  try {
    const { result: entries, logs } = await withPage({
      url,
      action: async page => {
        const list = [];

        // **先**监听所有请求与响应
        page.on('request', r =>
          list.push({ type: 'request', url: r.url(), method: r.method() })
        );
        page.on('response', r =>
          list.push({ type: 'response', url: r.url(), status: r.status() })
        );

        // 然后再导航到目标页面
        await page.goto(url, { waitUntil: 'load', timeout: 0 });
        // 等待网络空闲（500ms 内无新请求）
        await page.waitForNetworkIdle({ idleTime: 500, timeout: 0 });
        return list;
      }
    });

    res.status(200).json({ har: entries, logs });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
}